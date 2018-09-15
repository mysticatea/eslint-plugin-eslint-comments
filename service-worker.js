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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8306c9864c93898db8b6a5a93fb1ab30"
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
    "url": "assets/js/17.bdcf096d.js",
    "revision": "76618e3a40a37b0064be957b10838324"
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
    "url": "assets/js/app.e87c5f2e.js",
    "revision": "4215c7001d473b8d57c8db2ddbd21ebb"
  },
  {
    "url": "getting-started.html",
    "revision": "389f127f082d723dee4d768c01125dc0"
  },
  {
    "url": "index.html",
    "revision": "e32fc679da6b1736cf3ea00018a8f634"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "dbdbc189517fb52fcf3f5e1542192598"
  },
  {
    "url": "rules/index.html",
    "revision": "6a4337fe76e48ba00b43cd7b88c81788"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "35c663191cba616c2e7a7e8612b5dfd2"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "e5a3b03b735bd45ed39a0c4d7058e3e4"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "2d56ff40ae7b32b8c9dbf4f836715b62"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "9d67bf7e4f1a757285d794819a6bb52b"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "08422e4ec1e47d2b926795c93570ecb2"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "166c72a859a20627a41304bf942df26a"
  },
  {
    "url": "rules/no-use.html",
    "revision": "5cb2af50a6aff410163892fc228dcb0e"
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
