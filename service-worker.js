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
    "revision": "daeddac2abd633bb40e78cf3a924b6f5"
  },
  {
    "url": "assets/css/1.styles.8c89e4af.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.5729b43b.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.840db642.css",
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
    "url": "assets/css/styles.7074130a.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8c89e4af.js",
    "revision": "553e241fcef333a0654a28dd0ad8900b"
  },
  {
    "url": "assets/js/10.5dfa6019.js",
    "revision": "f691fa7a0a60eee76970a7dda5000834"
  },
  {
    "url": "assets/js/11.2c2b9463.js",
    "revision": "2df1baa60b5e20325cd76bb24f756fbb"
  },
  {
    "url": "assets/js/12.90424053.js",
    "revision": "da8e73d523bb33ccf4615134173769fd"
  },
  {
    "url": "assets/js/13.4eca4025.js",
    "revision": "b133d9ba2436d114d2ddd95dd8edf79b"
  },
  {
    "url": "assets/js/14.cffe9bad.js",
    "revision": "16f276e6c930cd3892fadc585638422f"
  },
  {
    "url": "assets/js/15.bf6ea929.js",
    "revision": "3748bf2a56b10cbd487055ccc65162c7"
  },
  {
    "url": "assets/js/16.454525b3.js",
    "revision": "d0e4c37af146f3b58405c90a69a0ea48"
  },
  {
    "url": "assets/js/2.5729b43b.js",
    "revision": "cf33e710bdb1a0962c89e6ffff366797"
  },
  {
    "url": "assets/js/3.840db642.js",
    "revision": "929a927b70dfdd6a80c3bc0290c54534"
  },
  {
    "url": "assets/js/5.f22818c6.js",
    "revision": "77bdbc5093ec1b1308285b7662614083"
  },
  {
    "url": "assets/js/6.aa1f6207.js",
    "revision": "8b88cf1c8c0ced56031fce820ffe3bec"
  },
  {
    "url": "assets/js/7.e05aceb5.js",
    "revision": "1e177493a47f99259943813c5dc39086"
  },
  {
    "url": "assets/js/8.3b1aa3bb.js",
    "revision": "d1948797be07849296b0e91149b1bc2e"
  },
  {
    "url": "assets/js/9.7798819e.js",
    "revision": "2e74e314a01a90cf072f9e5e3c36e41c"
  },
  {
    "url": "assets/js/app.7074130a.js",
    "revision": "823a566c98b18943bf221271868503ad"
  },
  {
    "url": "getting-started.html",
    "revision": "12010059a0d946de7a4100e9eefcc24d"
  },
  {
    "url": "index.html",
    "revision": "6e375e9152d96f6118dec42364ef0149"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "dabb955868c46a49f5a757bde96a1bb5"
  },
  {
    "url": "rules/index.html",
    "revision": "4445ad7f19768cdcf8ffbb0798d6a928"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "5bbdd17074b32fe0595011c71c6a52d4"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "4082f9382fa7c44ad7f7984bae0b7f00"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "ce3ff627cdd3a0702baec26d2188eb3c"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "f9ee9bcb888416bd135f578aec3dd7db"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "b1f9e38c1d66b9436026363bc3476b3d"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "5647599efeff4ae23a80959510360049"
  },
  {
    "url": "rules/no-use.html",
    "revision": "1a70ee93ff6d1058894e61b69b294fca"
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
