workbox.core.skipWaiting()
workbox.core.clientsClaim()
workbox.precaching.precacheAndRoute([...(self.__precacheManifest || []), { url: '/index.html' }])
workbox.routing.registerRoute(
  new workbox.strategies.NetworkFirst()
)
