"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ae7f4523c442d202131e4e69090561a8"],["/static/css/main.4b7db1fe.css","6e088ed9ba7d2db48edec7152b736fc9"],["/static/js/main.14478a6f.js","665ab529a00e1ffbe6b46cb1918d250b"],["/static/media/3-slider-label2.1c7390aa.png","1c7390aa58d382fc7fdd76d2e2019dd9"],["/static/media/acclaimed.90885997.png","90885997f589152d47d52984f6885a03"],["/static/media/antipasto-box-logo.cec79da8.png","cec79da84fc0c08f69cfe969a811b8ef"],["/static/media/bg-photo.9802b2be.jpg","9802b2beb73c3c101a513cff5c0c1ee2"],["/static/media/bg-photo2.69d2624a.jpg","69d2624a341951cc8ac2785cadd88519"],["/static/media/box.b4a989f8.png","b4a989f8224ae9a5ff20676c7745ec1b"],["/static/media/boxoffood.6a0ee1dc.png","6a0ee1dc9f5a8ce87242aba8414d6fef"],["/static/media/buy1.68d1b650.png","68d1b65036d3b66f8d5e479d9cf38121"],["/static/media/buytwo.59e2945a.png","59e2945a235ca43e19647ca2912c2837"],["/static/media/curry-box-logo.108cfa78.png","108cfa78cc91eab26fd46e797b6ba812"],["/static/media/food-crates-logo.6f8f4cff.png","6f8f4cff9ac9de83b4b4fa1192d60596"],["/static/media/food.87f181ca.png","87f181caa2acf4298e810785166000d3"],["/static/media/food.a550142e.jpg","a550142e4e017830e9aa97d56c07d6dd"],["/static/media/foodcrates.a955c15d.png","a955c15d9426e9cebae8012f7274b5f5"],["/static/media/meatbg.0b71e449.png","0b71e449052294500abf0b3cebfae3d6"],["/static/media/ordernow.d5d56e43.png","d5d56e4339ea32df9710688fe570b78b"],["/static/media/padano.a74d6ad5.png","a74d6ad51433fafca55d34f374305ef3"],["/static/media/parma.3afb54fe.png","3afb54fee281e3efd29fced819e505db"],["/static/media/reggiano.35e9283e.png","35e9283efa6a935d7217892d0badcfeb"],["/static/media/salami.19498dd1.png","19498dd1e80be805aa669f2fe578f8f1"],["/static/media/sanmarzano.4829f2ab.png","4829f2abc5228331ccb18ea8cc3e5130"],["/static/media/slide2-text3.77ea2c85.png","77ea2c856010ffc2b2a0451753ad3ec8"],["/static/media/slider-1-message.304f7803.png","304f78030f61d6e32ba3b61955ef72cc"],["/static/media/slider2-text1.ddfb1828.png","ddfb18289c9c54b18042b4a77eec717f"],["/static/media/slider2-text2.ef7a0901.png","ef7a090193b4d761fac821fb0046887f"],["/static/media/tile2.41f3ae0e.png","41f3ae0ed14be43bf5853e28798630df"],["/static/media/tileone.05a1bd36.png","05a1bd3619b21f31309cc4013e121cf9"],["/static/media/woman.f4aaf0e9.png","f4aaf0e93ae820a43afe071ec5331874"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});