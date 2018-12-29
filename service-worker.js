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
    "revision": "bdc44050be608443b53f8d96ddaf70b5"
  },
  {
    "url": "assets/css/1.styles.c40e7a31.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.1d5aef24.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.276d1b6a.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.33a465cc.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.e921e226.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.1c1c4822.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c40e7a31.js",
    "revision": "7463ef9dbdfea68c86ac971ab139ef2b"
  },
  {
    "url": "assets/js/10.bf9b18e6.js",
    "revision": "f691fa7a0a60eee76970a7dda5000834"
  },
  {
    "url": "assets/js/11.8cf78b31.js",
    "revision": "2df1baa60b5e20325cd76bb24f756fbb"
  },
  {
    "url": "assets/js/12.1cb610e4.js",
    "revision": "da8e73d523bb33ccf4615134173769fd"
  },
  {
    "url": "assets/js/13.9a455573.js",
    "revision": "b133d9ba2436d114d2ddd95dd8edf79b"
  },
  {
    "url": "assets/js/14.0b121ee5.js",
    "revision": "16f276e6c930cd3892fadc585638422f"
  },
  {
    "url": "assets/js/15.6fc7e1cd.js",
    "revision": "3748bf2a56b10cbd487055ccc65162c7"
  },
  {
    "url": "assets/js/16.b3b2e522.js",
    "revision": "d0e4c37af146f3b58405c90a69a0ea48"
  },
  {
    "url": "assets/js/2.1d5aef24.js",
    "revision": "63b3e143cde490183683026ea8511fd8"
  },
  {
    "url": "assets/js/3.276d1b6a.js",
    "revision": "929a927b70dfdd6a80c3bc0290c54534"
  },
  {
    "url": "assets/js/5.e921e226.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/6.c9de9dee.js",
    "revision": "8b88cf1c8c0ced56031fce820ffe3bec"
  },
  {
    "url": "assets/js/7.1b9e7aec.js",
    "revision": "1e177493a47f99259943813c5dc39086"
  },
  {
    "url": "assets/js/8.ead45d66.js",
    "revision": "d1948797be07849296b0e91149b1bc2e"
  },
  {
    "url": "assets/js/9.da189d91.js",
    "revision": "2e74e314a01a90cf072f9e5e3c36e41c"
  },
  {
    "url": "assets/js/app.1c1c4822.js",
    "revision": "37065b87e04c9820f3640133cfbd2ae6"
  },
  {
    "url": "getting-started.html",
    "revision": "b704f93bed26d9d67f76dc408fb4249c"
  },
  {
    "url": "index.html",
    "revision": "e3e2e5b70f3369edb0f96baf1588b877"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "fb7f433b339cf7919caa7bcb6ca4030b"
  },
  {
    "url": "rules/index.html",
    "revision": "e0ea860733174efb2b7aaa824ecee171"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "5b37e00bb3278fb1302bfb6e127e8479"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "793189e91c3104ca0e358b7f7c5ce24c"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "47e9bb8a95d0f8b37547cd3fccc09d99"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "ef60c80f6f9f13b0149391c0e9cb93ef"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "b6fc8f55eb106fa9f586f1e938b7f260"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "79f6f57c45713f1e305b7c69698e05cb"
  },
  {
    "url": "rules/no-use.html",
    "revision": "db6d976b14abdd1658bac0441b9d193c"
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
