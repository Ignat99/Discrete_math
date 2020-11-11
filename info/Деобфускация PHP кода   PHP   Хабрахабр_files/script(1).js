(function(){
	var rnd = Math.round(Math.random() * 1000000000);
	var d = document, 
		src_show = 'http://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=314060&bt=21&pid=753419&bid=1523777&bn=1523777&rnd=' + rnd,
		src_has_PV = 'http://ad.adriver.ru/cgi-bin/click.cgi?sid=1&ad=314060&bt=21&pid=753419&bid=1523777&bn=1523777&rnd=' + rnd;
	
	function send_pix(src){
		if(document.createElement&&document.body){
			var i=document.createElement('img');
			i.style.position='absolute';i.style.width=i.style.height='0px';
			i.src=src;
			document.body.insertBefore(i, document.body.firstChild);
		} 
		else{new Image().src = src}
	}

	send_pix(src_show);

	function state(){
		if (typeof d.visibilityState != 'undefined') return d.visibilityState;
		var prefs = ['webkit', 'moz', 'o', 'ms'], l = prefs.length;
		for (var i = 0; i < l; i++) if (typeof d[prefs[i] + 'VisibilityState'] != 'undefined') return d[prefs[i] + 'VisibilityState'];
		return 'visible';
	}
	
	if ('prerender' == state()) send_pix(src_has_PV);
})();