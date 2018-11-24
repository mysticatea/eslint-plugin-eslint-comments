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
    "revision": "27fb04b776a6df4b25c28cfd61f579b9"
  },
  {
    "url": "assets/css/1.styles.580f4f2e.css",
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
    "url": "assets/css/styles.06ccfd4f.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.580f4f2e.js",
    "revision": "d4e44f910312110452bf3a86e72a8e90"
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
    "url": "assets/js/app.06ccfd4f.js",
    "revision": "182575bfed839e09e53a117457a1e4fe"
  },
  {
    "url": "getting-started.html",
    "revision": "457804663489b6b7a4aa011a7763c12e"
  },
  {
    "url": "index.html",
    "revision": "4fce489e678fed5eeeedc2e76239fea8"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "be02925845f7d8c3f90330eb6c92951c"
  },
  {
    "url": "rules/index.html",
    "revision": "c6d4994d34b6aae75dc539ea495ec0c1"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "bbf37cfa438e2217e3fd4dba752d5e19"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "26047b75f90f7e887088764c4c78f0a6"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "b7b5738327468e5ea61e8e8a6bbfb332"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "e5bdb6a0036dee5857c26d0198998f6a"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "c505670008bb6a3a75a6ff5eb4a54d18"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "81134af38699e6440be94ca95322a95e"
  },
  {
    "url": "rules/no-use.html",
    "revision": "4f4ab5c5956174d7aff240d7864bc522"
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
