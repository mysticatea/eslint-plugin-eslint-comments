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
    "revision": "c8d8e735b566f00ce5d1e954ce69927f"
  },
  {
    "url": "assets/css/0.styles.3783a7e6.css",
    "revision": "0fd799e4dde3c513112ba84d0a39dfbb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0b38da8.js",
    "revision": "6836e6fc207d8c05828a881dbd5c126e"
  },
  {
    "url": "assets/js/11.724aee4b.js",
    "revision": "7a6d5bb333b3e267a49b2bc2969c065c"
  },
  {
    "url": "assets/js/12.79af5cbe.js",
    "revision": "47775ab66e9158061ebe729cfdc2f1ca"
  },
  {
    "url": "assets/js/13.8ce627b2.js",
    "revision": "c1f749e5f1cd8591b720458b77c095d0"
  },
  {
    "url": "assets/js/14.70f3c9f7.js",
    "revision": "8353817b1fda59722322946b0096a208"
  },
  {
    "url": "assets/js/15.40bb7859.js",
    "revision": "d018115803b8592c9580d90cd0f46415"
  },
  {
    "url": "assets/js/16.de4d8803.js",
    "revision": "0bb07b31f8d4e531ff03d7fb7a3c96f4"
  },
  {
    "url": "assets/js/17.0cd1893a.js",
    "revision": "a698a8bcc75c6267e9795e52f88afdab"
  },
  {
    "url": "assets/js/18.f7fa6e53.js",
    "revision": "8d24deb4b294138e8d1726131da8f172"
  },
  {
    "url": "assets/js/19.a083557a.js",
    "revision": "b351b3570d116706b30d7b651c38afc8"
  },
  {
    "url": "assets/js/2.abe41860.js",
    "revision": "344f082114db5088428a831619ea7958"
  },
  {
    "url": "assets/js/20.9552a75f.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.1e1346b2.js",
    "revision": "c1734d0ff1ed808e67640ce276f3d81b"
  },
  {
    "url": "assets/js/4.1ed5a87b.js",
    "revision": "1ffc76539a53c40a66b7a9fda3b5b7b3"
  },
  {
    "url": "assets/js/5.e9e9d000.js",
    "revision": "ee906d8c3dc530990cd3bf69d84e0f3d"
  },
  {
    "url": "assets/js/6.43ee3a92.js",
    "revision": "ddc76df738d43e692cd061434dc18f99"
  },
  {
    "url": "assets/js/7.49e6277d.js",
    "revision": "758d9340cd50bfe42ee8dcbec70203a2"
  },
  {
    "url": "assets/js/8.a00c91af.js",
    "revision": "1e35abc3b65166e59e0997d18fe8339e"
  },
  {
    "url": "assets/js/app.026d1a0a.js",
    "revision": "f151e6a16ab6254f94f348eac4f769b8"
  },
  {
    "url": "index.html",
    "revision": "14623d96aacb1d38101152ecaab61137"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "d2a9b7a003eaedb754b58a394a4d1e67"
  },
  {
    "url": "rules/index.html",
    "revision": "8f15f9a91d403040caa65d2b5eff4538"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "f02e0a1a0085dacbab19ef4f2948ac93"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "fc91c18c57e3a2a75c7f5a6ed23b0c34"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "df6740509652642f6d0ba86c6ea2af43"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "eade9c9a24066b9902278d09ed2dac6e"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "7a0574f33fe399d71b48e8d862ee4ea4"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "eadaa3914dbccb59181ce21c3441bac1"
  },
  {
    "url": "rules/no-use.html",
    "revision": "fe85b38df91df3202be9be7d939da989"
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
