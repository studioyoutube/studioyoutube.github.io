self.addEventListener('install', e => {});
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
