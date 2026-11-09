// Flip Clock: keeps the app's own files on the phone so it opens without internet.
// Flight data (AeroDataBox) always goes straight to the network.
const CACHE = "flipclock-v7";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png",
               "inter-light.woff2", "inter-medium.woff2", "inter-bold.woff2",
               "wx/clear-day.svg", "wx/clear-night.svg", "wx/drizzle.svg", "wx/fog-day.svg", "wx/fog-night.svg", "wx/not-available.svg", "wx/overcast.svg", "wx/partly-cloudy-day-rain.svg", "wx/partly-cloudy-day-snow.svg", "wx/partly-cloudy-day.svg", "wx/partly-cloudy-night-rain.svg", "wx/partly-cloudy-night-snow.svg", "wx/partly-cloudy-night.svg", "wx/rain.svg", "wx/sleet.svg", "wx/snow.svg", "wx/thunderstorms-day-rain.svg", "wx/thunderstorms-night-rain.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // network first so updates show up; the saved copy when offline
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
