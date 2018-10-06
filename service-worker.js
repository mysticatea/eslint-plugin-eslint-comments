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
    "revision": "a0b2c705168507f55f8bd203d0664cc2"
  },
  {
    "url": "assets/css/1.styles.787dfc12.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/16.styles.e4f9d425.css",
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
    "url": "assets/css/styles.1ec76988.css",
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
    "url": "assets/js/16.e4f9d425.js",
    "revision": "fbc2f82b2130c3a5294ec2c42c300ab3"
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
    "url": "assets/js/app.1ec76988.js",
    "revision": "d21514ab19ce9abbc0f92aaf88fe4130"
  },
  {
    "url": "getting-started.html",
    "revision": "f9ede4703af214bc978b029819b11339"
  },
  {
    "url": "index.html",
    "revision": "e86d7c75847610eda9ca2254157cbd64"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "d6ee91ae2aa85cb6363ae1c533926d80"
  },
  {
    "url": "rules/index.html",
    "revision": "cb79a2925181e395c2c3d21d4e3bbd72"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "00a0596a3fe7fe39f34a7b5204fa2224"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "1c59782d99212a7bd5ed582691471016"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "2be86ed5f8e4174d3ba15b3d26ab302d"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "9cfc6d15a32a2749e9e1b78c4c6199e7"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "f6982f2fd7cc75b36936ea60244296a0"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "3e7e14be7b867299466bef2816ce6f9d"
  },
  {
    "url": "rules/no-use.html",
    "revision": "817c2e979e31969d0cc3c753132ab413"
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
