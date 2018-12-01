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
    "revision": "93627f9f44bab5bb28d77ce0e748e8f8"
  },
  {
    "url": "assets/css/1.styles.0b4d291a.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.2871c5b7.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.ed5e1f31.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.af2d3ae7.css",
    "revision": "631a89de06304b9a4dcaa6b7af029f0c"
  },
  {
    "url": "assets/css/5.styles.cac87eac.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.fbbf5a1e.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0b4d291a.js",
    "revision": "411c7005df91eaa490687251dc8ea3fd"
  },
  {
    "url": "assets/js/10.df000b00.js",
    "revision": "38dd44a8117946b7b6deeed0ac40a6f7"
  },
  {
    "url": "assets/js/11.c6b11af1.js",
    "revision": "30a67afb29ca54a18f7d9deb8b0affd1"
  },
  {
    "url": "assets/js/12.9dc40729.js",
    "revision": "87de3806f00756c935a9af15d0a36b40"
  },
  {
    "url": "assets/js/13.fda1ea8b.js",
    "revision": "46b5318821e506ec24de2849d7264f78"
  },
  {
    "url": "assets/js/14.6dd5cb5c.js",
    "revision": "47e1c86776e41231bd7c35434654d4c9"
  },
  {
    "url": "assets/js/15.75644ad4.js",
    "revision": "b677e4577b51782a8f1850c320cec583"
  },
  {
    "url": "assets/js/16.4c643f49.js",
    "revision": "1e2eaaab4218b96e4a1a50f8efe5c43b"
  },
  {
    "url": "assets/js/2.2871c5b7.js",
    "revision": "770837d585bb271086e6183a32217e83"
  },
  {
    "url": "assets/js/3.ed5e1f31.js",
    "revision": "2efe72ecb52ae307336c0b3ac5f0ac4c"
  },
  {
    "url": "assets/js/5.cac87eac.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/6.78c4f71c.js",
    "revision": "a41f48b0aa8640e0c3c07a68473060e6"
  },
  {
    "url": "assets/js/7.7a520dcf.js",
    "revision": "444e8472c63791891657ad4a925a214b"
  },
  {
    "url": "assets/js/8.78cecf24.js",
    "revision": "96e018d181c6a32ebedb26bfd9d086a5"
  },
  {
    "url": "assets/js/9.3ffa6ffa.js",
    "revision": "db74440a8e10250731b46b9a2b34b49a"
  },
  {
    "url": "assets/js/app.fbbf5a1e.js",
    "revision": "2d930b0cdaf64f866d841a6d146336d5"
  },
  {
    "url": "getting-started.html",
    "revision": "8d049d6719595432e526d5f2174ef98d"
  },
  {
    "url": "index.html",
    "revision": "8d7ccd47d357d653630bcd3dcf4d29e1"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "f8914c1be53d07fb15ea7f46e800cd7d"
  },
  {
    "url": "rules/index.html",
    "revision": "27638dbe4abf7815b18109cc8688ac3d"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "22f66fd65df6acbcc26aeda2e21a92cf"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "e7b028f9ffd8f406f91e5ad714b33cb0"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "ab5fb41c81843b30f71c7b9490839fa6"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "ddd116b2565a63d10655548d3a901d11"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "4e7e3f1972fc048dc49174e6f3008070"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "298919ad9aa003b6e74ae6267c0d0a23"
  },
  {
    "url": "rules/no-use.html",
    "revision": "75eb5fba5928249a343a07b84e71f7fa"
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
