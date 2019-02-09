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
    "revision": "5177e3ef33a6b97e6eb813553a1dc3d3"
  },
  {
    "url": "assets/css/1.styles.3e44b417.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.d4a4ec37.css",
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
    "url": "assets/css/styles.65b15a3b.css",
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
    "url": "assets/js/14.19aebd00.js",
    "revision": "07118b1d274e794ab22ecf1bcd0646a9"
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
    "url": "assets/js/2.d4a4ec37.js",
    "revision": "11c8b5d7df6796051aa39bf51342f829"
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
    "url": "assets/js/8.e648b078.js",
    "revision": "8c0cae9ac88f4840153140936aeb75cc"
  },
  {
    "url": "assets/js/9.f33b76ba.js",
    "revision": "cba08149ae435536254498f48c34ee02"
  },
  {
    "url": "assets/js/app.65b15a3b.js",
    "revision": "e903e1130f60b2dde619fecd3c0c58ad"
  },
  {
    "url": "getting-started.html",
    "revision": "08f1f57b62fe9d53d15a36069487e720"
  },
  {
    "url": "index.html",
    "revision": "6b150dd9df25e39fb82299c89e44f808"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "b53c214edec435defe4d167fbc8f1e46"
  },
  {
    "url": "rules/index.html",
    "revision": "818949ef5d93cd87160ce72349a6fb48"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "be3a3478e3ad73cb0439174444c0b697"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "cd01feee4f1ec1081616a242c9da89c2"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "30ecb5c727d92e6de15c0b23af425b01"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "f0821eb0abcfa6ffce86b60154b6c857"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "59e6663f70a3b799b36d6855300f2771"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "6825deca355995e42c320dbd2e245132"
  },
  {
    "url": "rules/no-use.html",
    "revision": "1125c26c70e01f3fdf14039bcba85ca5"
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
