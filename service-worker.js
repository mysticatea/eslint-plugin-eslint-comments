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
    "revision": "0b5acdaccbd1dda106af04867c138cf8"
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
    "url": "assets/js/app.bf04409d.js",
    "revision": "247f3cbc2406db24f473fb27ab752f40"
  },
  {
    "url": "getting-started.html",
    "revision": "854cc79867b7afe945e51cd81b7d141b"
  },
  {
    "url": "index.html",
    "revision": "246e92c266cc56cc6d06076b40326fe7"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "5acb5b7106c98dd1cfeaf1858ce0a472"
  },
  {
    "url": "rules/index.html",
    "revision": "227e863052a0f0beacc105dc7ab30cdc"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "356e1ea57cd9600ca0407c25122b6c42"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "ea86671358c4c33cdb33c637db25e9d6"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "7a9f0d9d0ae56c528c387fba07fa816d"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "29896e3253baf117e5560adcfa11284b"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d17080928ed0efdbaf05fe0876e588a1"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "f331ef74bfe6282cc1d44b7596c49f3a"
  },
  {
    "url": "rules/no-use.html",
    "revision": "7d9829d9e2bcdad10d137e2eaa9203bf"
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
