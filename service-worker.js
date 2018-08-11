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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22874374131f13e39b9383e8968fb7ff"
  },
  {
    "url": "assets/css/0.styles.bc516859.css",
    "revision": "bc95948adbf39f53250fcb15f8a3cf4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96b9e973.js",
    "revision": "9a285503beacb1c209ccc0dc68da0dac"
  },
  {
    "url": "assets/js/11.d28f6317.js",
    "revision": "387a5ca22048e046ce61d59502788d67"
  },
  {
    "url": "assets/js/12.b0649757.js",
    "revision": "f523847c8df7d959a94ee5cef17b195b"
  },
  {
    "url": "assets/js/13.350c94a5.js",
    "revision": "903e3541e55e1d0b717274c747881f8b"
  },
  {
    "url": "assets/js/14.d5ff2414.js",
    "revision": "f3def6dafd2e26f24b2437eaf87d59aa"
  },
  {
    "url": "assets/js/15.0d9aec22.js",
    "revision": "d659830e33abf171aa58c1cc4031b737"
  },
  {
    "url": "assets/js/16.6cd532cf.js",
    "revision": "48defe70a4827a602663639caa6e2327"
  },
  {
    "url": "assets/js/17.aaf9f60e.js",
    "revision": "c14c542b4092dff1e15c3392c9b636f7"
  },
  {
    "url": "assets/js/2.9888a274.js",
    "revision": "4e25e1fead27de665cd7ba181cc79db7"
  },
  {
    "url": "assets/js/3.a6319933.js",
    "revision": "3dc48b23c95324a6013836bca359b57d"
  },
  {
    "url": "assets/js/4.fa29f84c.js",
    "revision": "cd410d27cb2d397c1e05350e56eac968"
  },
  {
    "url": "assets/js/5.7b3403e0.js",
    "revision": "ad7927e5401cbb8a3957dfcdb4ccb00f"
  },
  {
    "url": "assets/js/6.02793ccf.js",
    "revision": "9c312b1453e190122c6102f7ed42baef"
  },
  {
    "url": "assets/js/7.439eb83c.js",
    "revision": "364743e1909ad05f94c36782dc6709fb"
  },
  {
    "url": "assets/js/8.0e2c287a.js",
    "revision": "c323d715025e2a0c2f5e4aa7f34af326"
  },
  {
    "url": "assets/js/9.f26d643e.js",
    "revision": "ba3403d6d71f4671fd9e36c4b548e72a"
  },
  {
    "url": "assets/js/app.e33c9be0.js",
    "revision": "193eea578de0adba9783bd810ccc89ed"
  },
  {
    "url": "getting-started.html",
    "revision": "966267dc22e4fd6f102ed9f328152052"
  },
  {
    "url": "index.html",
    "revision": "4e1464dfcc30036a17dbf20e8053757d"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "c863a84e88ba5f723ae6c88c60ddd860"
  },
  {
    "url": "rules/index.html",
    "revision": "b1e85957439553a76a56699b77eb197c"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "42dd54e17694ed9a685e0fc6ccb5626d"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "a55682fc2bac39f56a4b277072b9c859"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "7acdb5aeecfa67a41718dd90e3a3658e"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "7cf6bec5d815cae61c2859099fee15f3"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "b87fc055817641c524c42a662686ef18"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "941ed3f06cebf896fd4bb85ce0f2f4ad"
  },
  {
    "url": "rules/no-use.html",
    "revision": "c03750d9ff439b41310f350dbd56bc90"
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
