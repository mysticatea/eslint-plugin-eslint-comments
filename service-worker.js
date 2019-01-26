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
    "revision": "87199bff6770f2139e1b0d9ecf283615"
  },
  {
    "url": "assets/css/1.styles.f7e5d481.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.7f723891.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.18b9ace4.css",
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
    "url": "assets/css/styles.d2c7a7dd.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f7e5d481.js",
    "revision": "c072193255a0811dea7aa0951f7c7daa"
  },
  {
    "url": "assets/js/10.edd4fad8.js",
    "revision": "9747478b1dc76d128f6baa0ab5cee0f6"
  },
  {
    "url": "assets/js/11.59dfd9d1.js",
    "revision": "2da4cd31915537bb9ef13d4ea0977a67"
  },
  {
    "url": "assets/js/12.5fe255f8.js",
    "revision": "7eefc26f441e31f72a18fd7b826fde99"
  },
  {
    "url": "assets/js/13.6d9720e7.js",
    "revision": "bd50f2d83213400f8b0886f712a0cf72"
  },
  {
    "url": "assets/js/14.fd2323a7.js",
    "revision": "17dc3677c99ebdac41215ac239ae1da3"
  },
  {
    "url": "assets/js/15.e6879446.js",
    "revision": "761d95747d19577fa8d6ed7f006291ca"
  },
  {
    "url": "assets/js/16.d1c43ddc.js",
    "revision": "25ddbd540ded7099c74e7f86d7044d9e"
  },
  {
    "url": "assets/js/2.7f723891.js",
    "revision": "7739fae29a552616e0edc7a6b8dff4b6"
  },
  {
    "url": "assets/js/3.18b9ace4.js",
    "revision": "0452a852add580d6fba6825cc24f512c"
  },
  {
    "url": "assets/js/5.f22818c6.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/6.91e35fc9.js",
    "revision": "9198359192e710d57f74026b46122afc"
  },
  {
    "url": "assets/js/7.1bde7ce8.js",
    "revision": "443dfd28e20bf575843ec31d09e9a35e"
  },
  {
    "url": "assets/js/8.f0677e3a.js",
    "revision": "a8a8e0b505b00c4541d733669e1c71f7"
  },
  {
    "url": "assets/js/9.e68a6c0e.js",
    "revision": "9df06190740c245da914a4595fba2bc0"
  },
  {
    "url": "assets/js/app.d2c7a7dd.js",
    "revision": "87aa5df1617f800af231e19db32867cc"
  },
  {
    "url": "getting-started.html",
    "revision": "88ab2b6dabad226d3e111f7b9d391f85"
  },
  {
    "url": "index.html",
    "revision": "696f4217886fb43ac51e2ca84cb822ef"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "b2143b7bc3d27ec7dc3087bb5117dd9d"
  },
  {
    "url": "rules/index.html",
    "revision": "5a8de5ec1c9d458a90388a8485697a9a"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "4085517fe9a7c450c5cedb7270669a97"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "7834ecfb27cb458a504ee32f6e8648c0"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "7a0fcaa1c7db6aca68d71a3f05b192b8"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "e4c3482b999cfb0bcc4cd5bb8a906a04"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "3af1ec53895936123ecc17f74714da5d"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "8eb2b65e9b041e482695600d5d122fde"
  },
  {
    "url": "rules/no-use.html",
    "revision": "63a7903daba91612791a8330c0608008"
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
