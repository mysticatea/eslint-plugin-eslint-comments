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
    "revision": "45e4691f0a8df06dc330f54643abc384"
  },
  {
    "url": "assets/css/1.styles.3e44b417.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.683d0b71.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.aa44fe4f.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.3b6c4f3c.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.7ca5e48a.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.fb9789da.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3e44b417.js",
    "revision": "3882ac813ff23434a578706737c3d2b1"
  },
  {
    "url": "assets/js/10.ead81941.js",
    "revision": "499921f599972977bd02350bf39b8064"
  },
  {
    "url": "assets/js/11.0d74e411.js",
    "revision": "da7ded0b184968ef0c6a3832876db49e"
  },
  {
    "url": "assets/js/12.1ad54bbe.js",
    "revision": "6ef2fa45b5d0a0f5e16571195934010e"
  },
  {
    "url": "assets/js/13.13ca483a.js",
    "revision": "ed27a612d56d289f3beef1cbfb22963d"
  },
  {
    "url": "assets/js/14.46743992.js",
    "revision": "c653cec74f9c5b89e671264e210e9071"
  },
  {
    "url": "assets/js/15.f3a4871f.js",
    "revision": "351250e78abcb5a11f50d828e3d26897"
  },
  {
    "url": "assets/js/16.c7c2b7db.js",
    "revision": "10d6eab96416ad2d7b6d079452f3edce"
  },
  {
    "url": "assets/js/2.683d0b71.js",
    "revision": "b79d0e44548e896d5e1346be64f22731"
  },
  {
    "url": "assets/js/3.aa44fe4f.js",
    "revision": "7d16fe26a04c5d052d858396673894ae"
  },
  {
    "url": "assets/js/5.7ca5e48a.js",
    "revision": "4d15903f7682860d8c49223beee8706c"
  },
  {
    "url": "assets/js/6.d8af661d.js",
    "revision": "4156e9f7be782afe4985b5878636e51c"
  },
  {
    "url": "assets/js/7.b8137976.js",
    "revision": "3b749e755d0c165ac273eb717d5baad8"
  },
  {
    "url": "assets/js/8.37bd8576.js",
    "revision": "7d418cdb56e282b0c2f6b31d0efd6811"
  },
  {
    "url": "assets/js/9.f33b76ba.js",
    "revision": "cba08149ae435536254498f48c34ee02"
  },
  {
    "url": "assets/js/app.fb9789da.js",
    "revision": "6a6d16fd17a174784388ef4a5d9e4022"
  },
  {
    "url": "getting-started.html",
    "revision": "15cf37d7679f220ae8b6fb96a30c7810"
  },
  {
    "url": "index.html",
    "revision": "a6aff7db28a1edc9c61439295b3067b0"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "b3526e46e811e8e10fe35848432140f1"
  },
  {
    "url": "rules/index.html",
    "revision": "45498c2e618e3a4b679180e965caf2c7"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "4d95fccfbec90a95f3f26204c2b87d1c"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "f89009cba4a3cef0ced8212e9f26f9a5"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "03aad416cb5d53ef11ad24790fdc1af9"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c8f8ac8b241c2158a4718b103ba7427d"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "6d457a07fe9b941713b461fe2bcd38b3"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "07210451ff85d1df11f539ef8a9aa1b0"
  },
  {
    "url": "rules/no-use.html",
    "revision": "80c8e46cc8fa9fe693955a10badcc461"
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
