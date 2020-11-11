
var woopraTracker=false;

function WoopraScript(_src,_hook,_async){

	this.src=_src;
	this.hook=_hook;
	this.async=_async;
}

WoopraScript.prototype.load=function(){

	var script=document.createElement('script');
	script.type='text/javascript';
	script.src=this.src;
	script.async=this.async;

	var _hook=this.hook;

	if(_hook){
		if(typeof(script.onreadystatechange)!='undefined'){
			script.onreadystatechange = function() {
                       	        if (this.readyState == 'complete'|| this.readyState=='loaded') {
                                        setTimeout(_hook,400);
				}
			};
		}else{
			script.onload=function(){
				setTimeout(function(){_hook.apply();},400);
			}
		}
	}

	var ssc = document.getElementsByTagName('script')[0];
	ssc.parentNode.insertBefore(script, ssc);
}



function WoopraEvent(name, ce, cv, file){

	this.name=name || 'unknown';
	this.ce = ce || {};
	this.cv = cv || {};
	this.file = file || 'ce';
	this.requestString='';
}


WoopraEvent.prototype.addProperty=function(key,value){
	this.ce[key] = value;
}


WoopraEvent.prototype.serialize=function(v, prefix){

	if(this.requestString.length>4000){
		return;
	}

	if(typeof(v) =='undefined' || typeof(v) == 'function'){
		return;
	}
	if(typeof(v) == 'string' || typeof(v) == 'number' || typeof(v) == 'boolean') {
		this.requestString += '&' + encodeURIComponent(prefix)+'='+encodeURIComponent(v);
		return;
	}
	if (v instanceof Array) {
		for (var i=0; i< v.length; i++) {
			this.serialize(v[i], prefix+'['+i+']');
		}
		return;
	}

	for (var itemKey in v) {
		if(v.hasOwnProperty && v.hasOwnProperty(itemKey)){
			this.serialize(v[itemKey], prefix+'.'+itemKey);
		}
	}
}

WoopraEvent.prototype.fire=function(tracker){

	var t=tracker || woopraTracker;

	this.addProperty('name',this.name);

	this.requestString='';
		
	var rd = woopraTracker.getRequestData() || {};
	for (var key in rd) {
		if(rd.hasOwnProperty && rd.hasOwnProperty(key)){
			this.serialize(rd[key], key);
		}
	}

	for(var key in this.cv){
		if(this.cv.hasOwnProperty && this.cv.hasOwnProperty(key)){
			this.serialize(this.cv[key], 'cv_'+key);
		}
	}
	for(var key in this.ce){
		if(this.ce.hasOwnProperty && this.ce.hasOwnProperty(key)){
                        this.serialize(this.ce[key], 'ce_'+key);
                }
        }

	t.request(t.getEndpoint(this.file)+'ra='+t.randomstring()+this.requestString);

}

function WoopraTracker(){

	this.chat=false;
	this.alias='';
	this.vs=0;
	this.cv={};
	this.cs={};
	this.pint=false;
	this.version=10;
	this.last_activity=new Date();
	this.idle=0;
}

WoopraTracker.prototype.initialize=function(){
	
	this.pint=setInterval(function(){woopraTracker.ping();},12000);

	if(typeof(document.attachEvent)!='undefined'){
		document.attachEvent("onmousedown", woopraTracker.clicked);
		document.attachEvent("onmousemove", woopraTracker.moved);
		document.attachEvent("onkeydown", woopraTracker.typed);
	}else{
		document.addEventListener("mousedown", woopraTracker.clicked, false);
		document.addEventListener("mousemove", woopraTracker.moved, false);
		document.addEventListener("keydown", woopraTracker.typed, false);
	}
	this.initCookies();
}

WoopraTracker.prototype.initCookies=function(){
	var _c=this.readcookie('wooTracker');
	if(!_c){
		c=this.randomstring();
		this.createcookie('wooTracker', _c, 10*1000);
	}
}

WoopraTracker.prototype.getEndpoint=function(file){
	var s='';
	if(document.location.protocol=="https:"){
		s='https://sec1.woopra.com';
	}else{
		var domain=this.getSettings()['domain'];
                s='http://'+domain+'.woopra-ns.com';
	}
	if(typeof(file)=='undefined'){
		return s;
	}
	if(!file){
		return s;
	}
	var path = ((document.location.protocol=="https:")?'/woopras/'+file+'.jsp?':'/'+file+'/');
	return s+''+path;
}

WoopraTracker.prototype.getStatic=function(){
	return document.location.protocol+"//static.woopra.com";
}

WoopraTracker.prototype.sleep=function(millis){
	var date = new Date();
	var curDate = new Date();
	while(curDate-date < millis){
		curDate=new Date();
	}
}

WoopraTracker.prototype.randomstring=function(){
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var s = '';
	for (var i = 0; i < 32; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		s += chars.substring(rnum, rnum + 1);
	}
	return s;
}

WoopraTracker.prototype.readcookie=function(k) {
	var c=""+document.cookie;
	var ind=c.indexOf(k);
	if (ind==-1 || k==""){
		return "";
	}
	var ind1=c.indexOf(';',ind);
	if (ind1==-1){
		ind1=c.length;
	}
	return unescape(c.substring(ind+k.length+1,ind1));
}

WoopraTracker.prototype.createcookie=function(k,v,days){
	var exp='';
	if(days>0){
		var expires = new Date();
		expires.setDate(expires.getDate() + days);
		exp = expires.toGMTString();
	}
	cookieval = k + '=' + v + '; ' + 'expires=' + exp + ';' + 'path=/'+';domain=.'+this.getSettings()['domain'];
	document.cookie = cookieval;
}

WoopraTracker.prototype.request=function(url,hook){
	var script=new WoopraScript(url,hook,true);
	script.load();
}

WoopraTracker.prototype.meta=function(){
	var meta=this.readcookie('wooMeta');
	if(!meta){
		return '';
	}
	return meta;
}
	
WoopraTracker.prototype.site=function(){
	return this.getSettings()['domain'];
}

WoopraTracker.prototype.getRequestData=function(){
	var r=new Object();
	r['alias']=this.getSettings()['domain'];
	r['cookie']=this.readcookie('wooTracker');
	r['meta']=this.meta();
	r['screen']=screen.width + 'x' + screen.height;;
	r['language']=(navigator.browserLanguage || navigator.language || "");
	r['referer']=document.referrer;
	r['idle']=''+parseInt(this.idle/1000);
	if(this.vs==2){
		r['vs']='w';
		this.vs=0;
	}else{
		if(this.idle==0){
			r['vs']='r';
		}else{
			r['vs']='i';
		}
	}
	return r;
}

WoopraTracker.prototype.getVisitorData=function(){
	return this.cv;
}

WoopraTracker.prototype.getVisitData=function(){
	return this.cs;
}

WoopraTracker.prototype.getSettings=function(){

	if(typeof(woo_settings) != 'undefined' && woo_settings != false){
	}else{
		woo_settings={};
	}
	if(!woo_settings['idle_timeout']){
		woo_settings['idle_timeout']='300000';
	}
	if(!woo_settings['domain']){
		var s=location.hostname;
		s=((s.indexOf('www.')<0)?s:s.substring(4));
		woo_settings['domain']=s;
	}
	return woo_settings;
}

WoopraTracker.prototype.trackPageview=function(action){
	var e=new WoopraEvent('pv', action, woopraTracker.cv, 'visit');
	e.fire(this);
}

//compatibility with woopra.v2.js
WoopraTracker.prototype.track=function(){
	var title=((document.getElementsByTagName('title').length==0)?'':document.getElementsByTagName('title')[0].innerHTML);
	var e=new WoopraEvent('pv', {url:window.location.pathname,title:title}, woopraTracker.cv, 'visit');
	e.fire();
}

WoopraTracker.prototype.setDomain=function(site){
	this.getSettings()['domain']=site;
	this.initCookies();
}

WoopraTracker.prototype.addVisitorProperty=function(name, value){
	this.getVisitorData()[name]=value;
}

WoopraTracker.prototype.addVisitProperty=function(name, value){
	this.getVisitData()[name]=value;
}

WoopraTracker.prototype.setIdleTimeout=function(t){
	this.getSettings()['idle_timeout']=''+t;
}
//end

WoopraTracker.prototype.pingServer=function(){
	var e=new WoopraEvent('x', {}, woopraTracker.cv, 'ping');
	e.fire();
}

WoopraTracker.prototype.typed=function(e){
	woopraTracker.vs=2;
}

WoopraTracker.prototype.clicked=function(e) {
	woopraTracker.moved();

	var cElem = (e.srcElement) ? e.srcElement : e.target;

	 while (typeof cElem != 'undefined' && cElem != null){
		if (cElem.tagName == "A") {
			break;
		}
         	cElem = cElem.parentNode;
         }

	if(typeof cElem != 'undefined' && cElem != null){

		var link=cElem;
		var _download = link.pathname.match(/(?:doc|eps|jpg|png|svg|xls|ppt|pdf|xls|zip|txt|vsd|vxd|js|css|rar|exe|wma|mov|avi|wmv|mp3)($|\&)/);
		var ev=false;
		if(_download && (link.href.toString().indexOf('woopra-ns.com')<0)){
			ev=new WoopraEvent('download', {url:link.href});
			ev.addProperty('url',link.href);
			ev.fire();
			woopraTracker.sleep(100);
		}
		if (!_download&&link.hostname != location.host && link.hostname.indexOf('javascript')==-1 && link.hostname!=''){
			ev=new WoopraEvent('outgoing',{url:link.href});
			ev.fire();
			woopraTracker.sleep(400);
		}
	}
}
	
WoopraTracker.prototype.moved=function(){
	woopraTracker.last_activity=new Date();       
	woopraTracker.idle=0;
}

WoopraTracker.prototype.ping=function(){
	var timeout=4*60*1000;
	if(woopraTracker.getSettings()['idle_timeout']){
		timeout=parseInt(woopraTracker.getSettings()['idle_timeout']);
	}
	if(woopraTracker.idle>timeout){
		clearInterval(woopraTracker.pint);
		return;
	}
	woopraTracker.pingServer();
	var now=new Date();
	if(now-woopraTracker.last_activity>10000){
		woopraTracker.idle=now-woopraTracker.last_activity;
	}
}

WoopraTracker.prototype.loadScript=function(src, hook){
	woopraTracker.request(src, hook);
}

WoopraTracker.prototype.pushEvent=function(ce){
	var e=new WoopraEvent(ce.name, ce, woopraTracker.cv, 'ce');
        e.fire();
}


woopraTracker=new WoopraTracker();
woopraTracker.initialize();


if (typeof woopraReady == 'undefined' || woopraReady(woopraTracker) != false) {

	var wx=0;

	if(typeof(woo_actions) != 'undefined' && woo_actions != false){
	}else{
		var title=((document.getElementsByTagName('title').length==0)?'':document.getElementsByTagName('title')[0].innerHTML);
		woo_actions=[{'type':'pageview','title':title,'url':window.location.pathname}];
	}

	if(typeof(woo_visitor) !='undefined' && woo_visitor != false){
		for (var _key in woo_visitor) {
			var item=woo_visitor[_key];
			woopraTracker.addVisitorProperty(_key,item);
		}
	}

        for(wx=0;wx<woo_actions.length;wx++){
                var action=woo_actions[wx];
                if(action.type=='pageview'){
                        woopraTracker.trackPageview(action);
                }else{
                        woopraTracker.pushEvent(action);
               	}
        }

}
