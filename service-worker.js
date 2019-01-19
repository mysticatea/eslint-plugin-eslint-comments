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
    "revision": "70ffab8e6ce69e36efe6abcf27d28636"
  },
  {
    "url": "assets/css/1.styles.47766aa2.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.5729b43b.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.840db642.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.50f08393.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.f22818c6.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.a783e2ff.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.47766aa2.js",
    "revision": "58351f33b537c15a841826abd5fc7ac2"
  },
  {
    "url": "assets/js/10.5dfa6019.js",
    "revision": "f691fa7a0a60eee76970a7dda5000834"
  },
  {
    "url": "assets/js/11.2c2b9463.js",
    "revision": "2df1baa60b5e20325cd76bb24f756fbb"
  },
  {
    "url": "assets/js/12.90424053.js",
    "revision": "da8e73d523bb33ccf4615134173769fd"
  },
  {
    "url": "assets/js/13.4eca4025.js",
    "revision": "b133d9ba2436d114d2ddd95dd8edf79b"
  },
  {
    "url": "assets/js/14.cffe9bad.js",
    "revision": "16f276e6c930cd3892fadc585638422f"
  },
  {
    "url": "assets/js/15.bf6ea929.js",
    "revision": "3748bf2a56b10cbd487055ccc65162c7"
  },
  {
    "url": "assets/js/16.454525b3.js",
    "revision": "d0e4c37af146f3b58405c90a69a0ea48"
  },
  {
    "url": "assets/js/2.5729b43b.js",
    "revision": "cf33e710bdb1a0962c89e6ffff366797"
  },
  {
    "url": "assets/js/3.840db642.js",
    "revision": "929a927b70dfdd6a80c3bc0290c54534"
  },
  {
    "url": "assets/js/5.f22818c6.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/6.aa1f6207.js",
    "revision": "8b88cf1c8c0ced56031fce820ffe3bec"
  },
  {
    "url": "assets/js/7.e05aceb5.js",
    "revision": "1e177493a47f99259943813c5dc39086"
  },
  {
    "url": "assets/js/8.3b1aa3bb.js",
    "revision": "d1948797be07849296b0e91149b1bc2e"
  },
  {
    "url": "assets/js/9.7798819e.js",
    "revision": "2e74e314a01a90cf072f9e5e3c36e41c"
  },
  {
    "url": "assets/js/app.a783e2ff.js",
    "revision": "22b2be22709379550ee78e14b9742342"
  },
  {
    "url": "getting-started.html",
    "revision": "7c0fdd22fcca01888bb4a66f87a55d87"
  },
  {
    "url": "index.html",
    "revision": "a4c36a57d983283acb46acffd46d11a8"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "1aa97159f5b087ee68b68bb032e4230f"
  },
  {
    "url": "rules/index.html",
    "revision": "6534f07776ad87d07aa093d2e8cd1ad8"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "92c69c5f1eb81133a1654cac0e36febf"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "c360a2b5566acf022d21fbb36485c457"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "519ae7a7f10dcaa7f88018689afd06c3"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c8d54a2d8fcbc90a4257cb965d502803"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "b410cb997e1889ae2583118448c4e4e8"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "3e772dfbb97a6084b5c854e81abaabe3"
  },
  {
    "url": "rules/no-use.html",
    "revision": "6578fe8da2ccfe29c04471f021b0bbe0"
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
