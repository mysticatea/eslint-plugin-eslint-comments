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
    "revision": "c214af4123a2a223a23967e2b9e789ce"
  },
  {
    "url": "assets/css/1.styles.b92d58c6.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.fd4b0860.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.6971ce3d.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.99a46cdf.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.622b5b61.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.2a10e080.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b92d58c6.js",
    "revision": "97e85e47fcfe29ff20ce62f045a04acf"
  },
  {
    "url": "assets/js/10.2d348809.js",
    "revision": "499921f599972977bd02350bf39b8064"
  },
  {
    "url": "assets/js/11.aec937aa.js",
    "revision": "da7ded0b184968ef0c6a3832876db49e"
  },
  {
    "url": "assets/js/12.b9460eb7.js",
    "revision": "6ef2fa45b5d0a0f5e16571195934010e"
  },
  {
    "url": "assets/js/13.b17c7c79.js",
    "revision": "ed27a612d56d289f3beef1cbfb22963d"
  },
  {
    "url": "assets/js/14.b22ea5d2.js",
    "revision": "07118b1d274e794ab22ecf1bcd0646a9"
  },
  {
    "url": "assets/js/15.a1d0b18c.js",
    "revision": "351250e78abcb5a11f50d828e3d26897"
  },
  {
    "url": "assets/js/16.73c157a9.js",
    "revision": "10d6eab96416ad2d7b6d079452f3edce"
  },
  {
    "url": "assets/js/2.fd4b0860.js",
    "revision": "11c8b5d7df6796051aa39bf51342f829"
  },
  {
    "url": "assets/js/3.6971ce3d.js",
    "revision": "7d16fe26a04c5d052d858396673894ae"
  },
  {
    "url": "assets/js/5.622b5b61.js",
    "revision": "4d15903f7682860d8c49223beee8706c"
  },
  {
    "url": "assets/js/6.4650274b.js",
    "revision": "4156e9f7be782afe4985b5878636e51c"
  },
  {
    "url": "assets/js/7.4163ddc4.js",
    "revision": "3b749e755d0c165ac273eb717d5baad8"
  },
  {
    "url": "assets/js/8.cb2959b2.js",
    "revision": "8c0cae9ac88f4840153140936aeb75cc"
  },
  {
    "url": "assets/js/9.ae696ddd.js",
    "revision": "cba08149ae435536254498f48c34ee02"
  },
  {
    "url": "assets/js/app.2a10e080.js",
    "revision": "d966baf6a4061e3e2dd84c672b03d748"
  },
  {
    "url": "getting-started.html",
    "revision": "6e435253546aa98b65433eb760b0c682"
  },
  {
    "url": "index.html",
    "revision": "9a6679b1a637af8a519aaa93e556b1cf"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "53eb8d08c01dd9d82c8f8d26a1cd2462"
  },
  {
    "url": "rules/index.html",
    "revision": "3d2cc456925ae7219efb40f491efb57d"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "fe23ad5dba33b9bdf5dca06b9e8c59e7"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "360b4fc428d53685ed587c68f1dbd81e"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "f993e5c63801c5d7c59a22eee65612f2"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "1b0d4312da2602777f0827e81479234b"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "afdaef30191a1f74504e73a39fa7c350"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "46c191896658ae83c0d973984a132fbb"
  },
  {
    "url": "rules/no-use.html",
    "revision": "121dd11ad23b5bf97ff24ec1bacf0270"
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
