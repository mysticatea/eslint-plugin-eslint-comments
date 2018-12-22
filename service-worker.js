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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f249e6723201a330a1cec7ddc307f0b5"
  },
  {
    "url": "assets/css/1.styles.8835c4bd.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.bde66f35.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.0e316ad9.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.7c109696.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.c3328a4c.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.9ce5f58e.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8835c4bd.js",
    "revision": "6e156a5e1e8c8f2e6296a9ff513e6082"
  },
  {
    "url": "assets/js/10.d9aba1bb.js",
    "revision": "f691fa7a0a60eee76970a7dda5000834"
  },
  {
    "url": "assets/js/11.e42c8716.js",
    "revision": "2df1baa60b5e20325cd76bb24f756fbb"
  },
  {
    "url": "assets/js/12.bb05970d.js",
    "revision": "da8e73d523bb33ccf4615134173769fd"
  },
  {
    "url": "assets/js/13.14a6f650.js",
    "revision": "b133d9ba2436d114d2ddd95dd8edf79b"
  },
  {
    "url": "assets/js/14.d8faf442.js",
    "revision": "16f276e6c930cd3892fadc585638422f"
  },
  {
    "url": "assets/js/15.6759ce18.js",
    "revision": "3748bf2a56b10cbd487055ccc65162c7"
  },
  {
    "url": "assets/js/16.8c46a0db.js",
    "revision": "d0e4c37af146f3b58405c90a69a0ea48"
  },
  {
    "url": "assets/js/2.bde66f35.js",
    "revision": "63b3e143cde490183683026ea8511fd8"
  },
  {
    "url": "assets/js/3.0e316ad9.js",
    "revision": "929a927b70dfdd6a80c3bc0290c54534"
  },
  {
    "url": "assets/js/5.c3328a4c.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/6.385729c2.js",
    "revision": "8b88cf1c8c0ced56031fce820ffe3bec"
  },
  {
    "url": "assets/js/7.d6ead6c2.js",
    "revision": "1e177493a47f99259943813c5dc39086"
  },
  {
    "url": "assets/js/8.37a337f2.js",
    "revision": "d1948797be07849296b0e91149b1bc2e"
  },
  {
    "url": "assets/js/9.ed34d159.js",
    "revision": "2e74e314a01a90cf072f9e5e3c36e41c"
  },
  {
    "url": "assets/js/app.9ce5f58e.js",
    "revision": "924fd7f022d1735bb324eab53086b7fb"
  },
  {
    "url": "getting-started.html",
    "revision": "48cc08cacf9b9c47a37326da80bface8"
  },
  {
    "url": "index.html",
    "revision": "149cd6c28b05c837ddab9d7eeb697d2d"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "448b2931b37101bcb12eb90dd2d66611"
  },
  {
    "url": "rules/index.html",
    "revision": "f6c215e53fdd455cc6efac110a04443c"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "e6c2506e21cb1ef1d52cbe132ca39213"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "7c061da4d5d517632faf15a12de3e83f"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "28efc52076bcfd0aec8c531095311c8e"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "1f8a7f7dde18424d9fe1b3f44f673bb3"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "c1413d35d89d8172337b4ef0c8952a64"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "6b82251264a10f6e594a0e8b2b406d17"
  },
  {
    "url": "rules/no-use.html",
    "revision": "9a0367fb2fbe3343bb48df6068f53dcb"
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
