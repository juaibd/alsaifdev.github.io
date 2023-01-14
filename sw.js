self.addEventListener("install", (e) => {
  e.waitUntill(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./src/style.css",
        "./src/index.js",
        "./src/script.js",
        "./src/other.js",
        "./images/android-icon-192x192.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  //   console.log(`refdsf ${e.request.url}`);
  caches.match(e.request).then((response) => {
    return response || fetch(e.request);
  });
});
