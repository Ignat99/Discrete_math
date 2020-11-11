/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 *  * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session, key;

    /* */ jsonData = {"reactions": [], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"344901197": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "I got: \u00a0TypeError: Array.prototype.sort called on null or undefined\u00a0\u00a0when I trying your code into Chrome console.", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-10-26_05:19:03", "date": "3 months ago", "message": "I got: \u00a0TypeError: Array.prototype.sort called on null or undefined\u00a0\u00a0when I trying your code into Chrome console.", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 0, "user_key": "e7cec005712fe50630175e1dc33ddadd", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "135382774": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "The converter in the link above is flawed. it doesn't work for all cases. I tried \n\nalert(\"Didn't think this was valid javascript now, did ya?!\")\nand the output of the obfuscated code was \n\"Didn't think this nas valid javascript non, did ya?!\"\n\nFAIL\n", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-01-27_11:33:33", "date": "1 year ago", "message": "The converter in the link above is flawed. it doesn't work for all cases. I tried <br><br>alert(\"Didn't think this was valid javascript now, did ya?!\")<br>and the output of the obfuscated code was <br>\"Didn't think this nas valid javascript non, did ya?!\"<br><br>FAIL<br>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 0, "user_key": "199a360eef70de12572cb42873076137", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "134487773": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Another version with the word \"boNjour\"\nhttp://blog.fgribreau.com/2011/01/javascript.html", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-01-25_16:28:20", "date": "1 year ago", "message": "Another version with the word \"boNjour\"<br><a href=\"http://blog.fgribreau.com/2011/01/javascript.html\" rel=\"nofollow\">http://blog.fgribreau.com/2011...</a>", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 0, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 0, "user_key": "FGRibreau", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [344901197, 135382774, 134487773], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": false, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1328224449", "users": {"FGRibreau": {"username": "FGRibreau", "tumblr": "", "about": "Micro-blogger &amp; Developer | PHP/HTML5/CSS3/JS/jQuery/\uf8ff \u2665", "display_name": "Francois-Guillaume Ribreau", "url": "http://disqus.com/FGRibreau/", "registered": true, "remote_id": null, "linkedin": "", "blog": "http://fgribreau.com/", "remote_domain": "", "points": 9, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/159/2809/avatar32.jpg?1324649524", "delicious": "", "is_remote": false, "verified": true, "flickr": "", "twitter": "http://twitter.com/FGRibreau", "remote_domain_name": ""}, "e7cec005712fe50630175e1dc33ddadd": {"username": "Nobody", "tumblr": "", "about": "", "display_name": "Nobody", "url": "http://disqus.com/guest/e7cec005712fe50630175e1dc33ddadd/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "199a360eef70de12572cb42873076137": {"username": "Sudi", "tumblr": "", "about": "", "display_name": "Sudi", "url": "http://disqus.com/guest/199a360eef70de12572cb42873076137/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}}, "user_unapproved": {}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 1, "offset_posts": 0, "slug": "badass_js_is_back_with_some_badass_obfuscation", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {"twitter-2696221": {"url": "http://disqus.com/twitter-2696221/", "username": "twitter-2696221", "is_moderator": false, "avatar": "http://mediacdn.disqus.com/uploads/users/306/7590/avatar32.jpg?1323577949", "name": "Elliott Back"}}, "total_posts": 3, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 4, "num_posts": 3, "closed": false, "per_page": 0, "id": 215963971, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "H9PbjroTeLznKjOYMOpTv0ES9GDZiRwaOWAXhHgtYg7AbXKySprRjiZuccgsbRjh", "features": {}, "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": false, "streaming_realtime": false, "reply_position": false, "id": 377448, "default_avatar_url": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "template": {"url": "http://mediacdn.disqus.com/1328224449/uploads/themes/7884a9652e94555c70f96b6be63be216/theme.js?174", "mobile": {"url": "http://mediacdn.disqus.com/1328224449/uploads/themes/mobile/theme.js", "css": "http://mediacdn.disqus.com/1328224449/uploads/themes/mobile/theme.css"}, "api": "1.1", "name": "Houdini", "css": "http://mediacdn.disqus.com/1328224449/uploads/themes/7884a9652e94555c70f96b6be63be216/theme.css?174"}, "max_depth": 0, "ranks_enabled": false, "lastUpdate": "", "linkbacks_enabled": false, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/37/7448/badassjs.css", "show_avatar": true, "reactions_enabled": false, "disqus_auth_disabled": false, "name": "Badass JavaScript", "language": "en", "mentions_enabled": true, "url": "badassjs", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": false, "moderate_all": false}, "settings": {"realtimeHost": "qq.disqus.com", "uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1328224449", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "52254943976", "realtimePort": "80", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1328224449"}, "ranks": {}, "request": {"sort": "hot", "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2012-02-04_14:31:00", "is_moderator": false, "ordered_unapproved_posts": [], "unapproved_posts": {}, "forum": "badassjs", "is_initial_load": true, "display_username": "", "points": null, "has_email": false, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": false, "show_reply": true, "active_switches": ["autocommitted_thread", "bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "new_thread_create", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_60m"], "sigma_chance": 10, "use_google_signin": false, "switches": {"olark_admin_addons": true, "listactivity_replies": true, "es_index_threads": true, "use_master_for_api": true, "google_auth": true, "html_email": true, "statsd.timings": true, "community_icon": true, "show_captcha_on_links": true, "google_analytics": true, "olark_admin_packages": true, "static_styles": true, "firehose": true, "stats": true, "realtime": true, "realtime_cached": true, "statsd_created": true, "bespin": true, "olark_support": true, "firehose_gnip": true, "olark_addons": true, "new_facebook_auth": true, "limit_get_posts_days_30d": true, "use_impermium": true, "discovery_network": true, "phoenix": true, "new_thread_create": true, "edits_to_spam": true, "upload_media": true, "vip_read_slave": true, "embedapi": true, "ssl": true, "autocommitted_thread": true, "send_to_impermium": true, "theme_editor_disabled": true, "train_impermium": true, "listactivity_replies_30d": true, "firehose_gnip_http": true, "moderate_ascending": true, "firehose_message_db_lookup": true, "git_themes": true, "new_moderate": true, "use_rs_paginator_60m": true, "redis_threadcount": true, "mentions": true, "olark_install": true, "static_reply_frame": true}, "forum_facebook_key": "", "use_yahoo": false, "subscribed": false, "active_gargoyle_switches": ["discovery_network", "edits_to_spam", "es_index_threads", "firehose", "firehose_gnip", "firehose_gnip_http", "firehose_message_db_lookup", "git_themes", "google_analytics", "html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "moderate_ascending", "new_moderate", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "phoenix", "realtime", "redis_threadcount", "send_to_impermium", "show_captcha_on_links", "stats", "statsd.timings", "theme_editor_disabled", "train_impermium", "use_impermium", "use_master_for_api", "vip_read_slave"], "realtime_speed": 15000, "use_openid": false}}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://badassjs.disqus.com/thread/badass_js_is_back_with_some_badass_obfuscation/async_media_remove/',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1328224449/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://badassjs.disqus.com/_auth/embed/remote_settings/',
    edit_profile_window: 'http://disqus.com/embed/profile/edit/',
    embed_thread: 'http://badassjs.disqus.com/thread.js',
    embed_vote: 'http://badassjs.disqus.com/vote.js',
    embed_thread_vote: 'http://badassjs.disqus.com/thread_vote.js',
    embed_thread_share: 'http://badassjs.disqus.com/thread_share.js',
    embed_queueurl: 'http://badassjs.disqus.com/queueurl.js',
    embed_hidereaction: 'http://badassjs.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://badassjs.disqus.com/more_reactions.js',
    embed_subscribe: 'http://badassjs.disqus.com/subscribe.js',
    embed_highlight: 'http://badassjs.disqus.com/highlight.js',
    embed_block: 'http://badassjs.disqus.com/block.js',
    update_moderate_all: 'http://badassjs.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://badassjs.disqus.com/update_days_alive.js',
    show_user_votes: 'http://badassjs.disqus.com/show_user_votes.js',
    forum_view: 'http://badassjs.disqus.com/badass_js_is_back_with_some_badass_obfuscation',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://badassjs.disqus.com/thread/badass_js_is_back_with_some_badass_obfuscation/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
    community: 'http://badassjs.disqus.com/community.html',
    admin: 'http://badassjs.disqus.com/admin/moderate/',
    moderate: 'http://badassjs.disqus.com/admin/moderate/',
    moderate_threads: 'http://badassjs.disqus.com/admin/moderate-threads/',
    settings: 'http://badassjs.disqus.com/admin/settings/',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',

    channels: {
        def:      'http://disqus.com/default.html', /* default channel */
        auth:     'https://disqus.com/embed/login.html',
        tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=badassjs',
        edit:     'http://badassjs.disqus.com/embed/editcomment.html'
    }
};


// 
//     
DISQUS.jsonData.urls.channels.reply = 'http://mediacdn.disqus.com/1328224449/build/system/reply.html';
DISQUS.jsonData.urls.channels.upload = 'http://mediacdn.disqus.com/1328224449/build/system/upload.html';
DISQUS.jsonData.urls.channels.sso = 'http://mediacdn.disqus.com/1328224449/build/system/sso.html';
DISQUS.jsonData.urls.channels.facebook = 'http://mediacdn.disqus.com/1328224449/build/system/facebook.html';
//     
// 