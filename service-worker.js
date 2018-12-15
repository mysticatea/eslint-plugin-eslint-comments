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
    "revision": "7e6c70347b78592b6653b5a6704019db"
  },
  {
    "url": "assets/css/1.styles.4b40acb1.css",
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
    "url": "assets/css/styles.d6bb01ee.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.4b40acb1.js",
    "revision": "46c6a6e2b73f0cbd9b3c68962ff99129"
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
    "revision": "cf33e710bdb1a0962c89e6ffff366797"
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
    "url": "assets/js/app.d6bb01ee.js",
    "revision": "0d1312dc31b7c135ede478086b616522"
  },
  {
    "url": "getting-started.html",
    "revision": "0bd5ac421b2d83539c53f6e7f26bc62c"
  },
  {
    "url": "index.html",
    "revision": "e92cafc5b67ef01801ade703df4ab963"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "0a6b220687164b5b4b50fd978dcc5630"
  },
  {
    "url": "rules/index.html",
    "revision": "d9b0446eb2fdfb570de70491298cc3fe"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "78cb48de9d4840a797aedfe80ced4efa"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "bf775052a315a441efd665d8855c1734"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "9b1134233d49418f1441f17dce8a96f7"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "6ccc035ee95cfbb023c00b0a7924fcb7"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "9c8b2963d0a8253db6da9c194ecc9752"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "73632ea52569906ab1af81e49a924667"
  },
  {
    "url": "rules/no-use.html",
    "revision": "a7aa14afa0872fd3539f415fd93a61c5"
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
