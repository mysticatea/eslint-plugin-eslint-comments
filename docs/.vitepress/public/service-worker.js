"use strict"

// https://github.com/NekR/self-destroying-sw
/* globals self */
self.addEventListener("install", () => {
    self.skipWaiting()
})

self.addEventListener("activate", () => {
    self.registration
        .unregister()
        .then(() => self.clients.matchAll())
        .then((clients) => {
            for (const client of clients) {
                client.navigate(client.url)
            }
        })
})
