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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a467508833928248b1483f2d5711ddf"
  },
  {
    "url": "assets/css/1.styles.787dfc12.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/16.styles.4ed3aaf7.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/17.styles.b93fdcdb.css",
    "revision": "bf53b56c8cdce50985f6089ef543418b"
  },
  {
    "url": "assets/css/2.styles.c74b8bef.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/3.styles.fb79bd12.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/styles.40a43dd4.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.787dfc12.js",
    "revision": "aeef49a9b682374782eb355b8a182b3f"
  },
  {
    "url": "assets/js/10.d87db68a.js",
    "revision": "c7b7536661bb0d308c59696928e98ce5"
  },
  {
    "url": "assets/js/11.6cb2554b.js",
    "revision": "2dd1667cc58c43d03a601d28014a23cd"
  },
  {
    "url": "assets/js/12.88184210.js",
    "revision": "1e6cb8f095439f09a0e68d532d5df746"
  },
  {
    "url": "assets/js/13.3c2db453.js",
    "revision": "4d5a91dd8edf0d3dff031c73712f36e1"
  },
  {
    "url": "assets/js/14.67358397.js",
    "revision": "0bb2cdabe0fd4af8fb51e8db8b97c56c"
  },
  {
    "url": "assets/js/15.2a2b7a32.js",
    "revision": "4a124655f26b909dc235105c5176f256"
  },
  {
    "url": "assets/js/16.4ed3aaf7.js",
    "revision": "9331a3cb7e04a6ad48584529e0e12ea8"
  },
  {
    "url": "assets/js/2.c74b8bef.js",
    "revision": "fcf4b9b9e1079c6526ce3408ce099195"
  },
  {
    "url": "assets/js/3.fb79bd12.js",
    "revision": "a2b0c036200ffd1149fd5862f9f18a9a"
  },
  {
    "url": "assets/js/4.4d179878.js",
    "revision": "656a3e19c33c1ec73b496414d4bca125"
  },
  {
    "url": "assets/js/5.f404bc8c.js",
    "revision": "8ed159911c9a1713d77d52fe4a5f2196"
  },
  {
    "url": "assets/js/6.2ad69b32.js",
    "revision": "4e1d88789af44383ce55c11696e3c581"
  },
  {
    "url": "assets/js/7.ef28c665.js",
    "revision": "73f6e68dcec390fab0abb0c53667506b"
  },
  {
    "url": "assets/js/8.d8528eaf.js",
    "revision": "a09f8c2d65acd2aa0a92003653b17df9"
  },
  {
    "url": "assets/js/9.af447e6a.js",
    "revision": "bb710c8b4d4c65c8e76653ef6f610da7"
  },
  {
    "url": "assets/js/app.40a43dd4.js",
    "revision": "78a6498173df139a5c679bbab6dff72f"
  },
  {
    "url": "getting-started.html",
    "revision": "02065e3fb08c1d64028ce2d79b818dc1"
  },
  {
    "url": "index.html",
    "revision": "157f82c6250fe72d832260ef122e3afc"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "3ee5d13f9355ab9723a9436c4cf9c72a"
  },
  {
    "url": "rules/index.html",
    "revision": "f05a1d5818d2966c95fc052bbed74b87"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "9b3f0b2264caa10967e59b5b847c051d"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "a39f3e5c273a7954df585df39af648f3"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "4ad2e4e9aafa71cc811d9f1493e982d7"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "597bcd2e029972176ed309d989f9b2af"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "0970e7ac6051571506bc6e9b4db73c97"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "e787c0520feb2d18aed647c82feb2bab"
  },
  {
    "url": "rules/no-use.html",
    "revision": "d7eaec61683919642c47ff8931a5ae86"
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
