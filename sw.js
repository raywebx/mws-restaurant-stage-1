
var cacheName = 'v1';
var cacheFile = [
	'./',
	'./index.html',
	'./restaurant.html',
	'./css/style.css',
	'./js/main.js',
	'./js/dbhelper.js',
	'./js/restaurant_info.js'
	
	]



self.addEventListener('install', function(event){
	console.log("ServiceWorker Installed")
	
	event.waitUntil(
	
		caches.open(cacheName).then(function(cache) {
			
			console.log("ServiceWorker Caching cacheFiles");
			return cache.addAll(cacheFiles);
			
		})
	)
})

self.addEventListener('activate', function(event){
	console.log("ServiceWorker Activated");
})

self.addEventListener('fetch', function(event){
	console.log("ServiceWorker Fetching", event.request.url);
})