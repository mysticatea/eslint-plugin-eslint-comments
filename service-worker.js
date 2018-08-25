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
    "revision": "3f3886cf47cc6622251e0074dc8a6829"
  },
  {
    "url": "assets/css/0.styles.bc516859.css",
    "revision": "90fae02b73c26f348ec117a43ef35e49"
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
    "url": "assets/js/17.08ef66f1.js",
    "revision": "487b8a62889cf7792eb3afe7219881d8"
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
    "url": "assets/js/app.0b888d40.js",
    "revision": "45316f8c7e6ada3f987a04558c44bd3a"
  },
  {
    "url": "getting-started.html",
    "revision": "1485ec02c12b4630a7c9724cd9b1f2dd"
  },
  {
    "url": "index.html",
    "revision": "08b7afa590953e5a7310ba16d2059f37"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "48aa17f70c2ea277ec7a434f601cb08f"
  },
  {
    "url": "rules/index.html",
    "revision": "92343cd83a9740f93eeadaf17ac46cb7"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "4cef63e0aed39d55694a3e2db1dd727d"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "2e8699eb0ffd07635c34c5b55e88883a"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "ac4b8da54c77892bfe47762b2c80d0a2"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "1601aa54f604c6417dfc23016179905b"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "bf71d7bd4b14d0b985751f61268f4c58"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "805482355d810fb79626f96f41d12d40"
  },
  {
    "url": "rules/no-use.html",
    "revision": "7d4a54c133561a75c4e5623df771f221"
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
