/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0aa7e668eda4b16651c39a32dcb17e65"
  },
  {
    "url": "assets/css/0.styles.d38a46de.css",
    "revision": "d2c28a49b501924ba763d9b4ae7aa19b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.905c2d59.js",
    "revision": "3dd17ed2a4411102c5e688f0689c87ae"
  },
  {
    "url": "assets/js/10.35df16fb.js",
    "revision": "1a18e729876a81e8e82968f28fd49f2b"
  },
  {
    "url": "assets/js/11.49ced118.js",
    "revision": "4d34da18c26652cd8a5cd1c2e2fe8025"
  },
  {
    "url": "assets/js/12.0d219c89.js",
    "revision": "e96e1813dc0fbe8df21b4a01f300744c"
  },
  {
    "url": "assets/js/13.36cea28e.js",
    "revision": "4d77f3ee573da0af7db8f330237a96df"
  },
  {
    "url": "assets/js/15.83251832.js",
    "revision": "d498a06bd444edd8e814c35254de75d2"
  },
  {
    "url": "assets/js/16.54b15f11.js",
    "revision": "35d9893046a720d7332a316435e9b729"
  },
  {
    "url": "assets/js/2.7c067848.js",
    "revision": "90bd331e933fcb45d53d4413268598ac"
  },
  {
    "url": "assets/js/3.a135acea.js",
    "revision": "a47f8ff0bf0035cb9b7fd1db58c90c77"
  },
  {
    "url": "assets/js/4.70e9c9a2.js",
    "revision": "7bab2588af504a653e2ecbbce4afa908"
  },
  {
    "url": "assets/js/5.c7527bb8.js",
    "revision": "37344eb8c8229fbc7cad2f7f2d94729d"
  },
  {
    "url": "assets/js/6.ddfb5085.js",
    "revision": "83710e27ac46c451442e04aa1e2a40e9"
  },
  {
    "url": "assets/js/7.c1af1869.js",
    "revision": "d5a83072c333491939eb00544fddd73a"
  },
  {
    "url": "assets/js/8.ab1bb0cf.js",
    "revision": "7783bb5623d4779ad151412286afedae"
  },
  {
    "url": "assets/js/9.3701b839.js",
    "revision": "ae1050849d1fc0fa5dc837dcc3ccc44d"
  },
  {
    "url": "assets/js/app.82ef83ac.js",
    "revision": "db099925b2f3ae058e21cdc9f2578c53"
  },
  {
    "url": "getting-started.html",
    "revision": "0f2fcf2a0df137f606d8c661016c4f4d"
  },
  {
    "url": "index.html",
    "revision": "22f46c06fe42c526b85291043346738f"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "7582e73e32da9560e96d16e185d57833"
  },
  {
    "url": "rules/index.html",
    "revision": "8c82c39a8198f84c5d095110f93314fd"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "cc38dd499d659363be1cb4cc45319be8"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "8f1cb20f83609c8ed2e1b87e3e33a41e"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "62a7ea12d39d53e9c73dc807f2c60ac5"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c88c16ccf16024532a4f4c51e89ea750"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d64c6bdee3741001c9ab6bc530754ce9"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "2478adfca35c70825d11846122cd0545"
  },
  {
    "url": "rules/no-use.html",
    "revision": "7b090f9eb74585a4fd2d731c7ebaa78c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
