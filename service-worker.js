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
    "revision": "30096e94ac807eebef12d4823da335f7"
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
    "url": "assets/js/app.1f432c5e.js",
    "revision": "204c8de2f345f67b1b5565d8da6a6686"
  },
  {
    "url": "getting-started.html",
    "revision": "ad3795422a33383d5bc3de5d016a11d5"
  },
  {
    "url": "index.html",
    "revision": "d5fcb6e8d79fbc804d7f0ad40a823eef"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "138a6b900673ea664f5d4262bc5a331f"
  },
  {
    "url": "rules/index.html",
    "revision": "8dbf2804596d81a8a5fa92cb1d673be0"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "6dfda0c50fefae007a59cd46e42dd738"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "893d5192645280ed6d3ac3302fb03117"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "34c1a9183b77c75cd8dddf43ac170b9c"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "00908e88c59a327e2af561ed082014a9"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "4f91f989f81e8cfd81039c3b1be63c88"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "c03aa271a084e56beb06e2cf41b01cf3"
  },
  {
    "url": "rules/no-use.html",
    "revision": "09526b2c67ec547b2dc6f5c6e3268ad6"
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
