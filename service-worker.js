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
    "revision": "108375b6018bf2e5a2abce267497f8bc"
  },
  {
    "url": "assets/css/0.styles.aa35d7d6.css",
    "revision": "c54c2a2777ad2b894c662de900bf2544"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.55a04143.js",
    "revision": "c139391eb62622324dcf1f0962dd7249"
  },
  {
    "url": "assets/js/11.b87a1b35.js",
    "revision": "49bf20a7df7b223dde14523a00b40d84"
  },
  {
    "url": "assets/js/12.4953f00d.js",
    "revision": "ba06955fa163b553fd0153f470607933"
  },
  {
    "url": "assets/js/13.2d6a9085.js",
    "revision": "66e1028fb2e5d09773c93b0d784b23eb"
  },
  {
    "url": "assets/js/14.4c3a5a82.js",
    "revision": "a6fb6a3517ebf995c70f11262b1dfa53"
  },
  {
    "url": "assets/js/15.8079fa94.js",
    "revision": "8706fbc0dadd3d50a92f5cf829351f09"
  },
  {
    "url": "assets/js/16.e29e4d8e.js",
    "revision": "7f2bbca3df4f1ca7a59e74e507891217"
  },
  {
    "url": "assets/js/17.f4699bac.js",
    "revision": "e80c725ef7d36105c04c4f54c05d37de"
  },
  {
    "url": "assets/js/18.65951d8f.js",
    "revision": "57b0b395ebc4039d9b86a4225f703eda"
  },
  {
    "url": "assets/js/19.b4539959.js",
    "revision": "30476eb0511235127df10690e3d02bc7"
  },
  {
    "url": "assets/js/2.12584d67.js",
    "revision": "0b554c5cd949b848b994540595afc8e2"
  },
  {
    "url": "assets/js/20.93a78386.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.7281c5d2.js",
    "revision": "b7fd193871b8f661e4efe204b5040986"
  },
  {
    "url": "assets/js/4.2d5c99a4.js",
    "revision": "2e21a83ae9d140438bebd14c7eb0bb9a"
  },
  {
    "url": "assets/js/5.b4f91653.js",
    "revision": "ac21bdaaf8d793a5205106c12586d5a5"
  },
  {
    "url": "assets/js/6.d3df68fe.js",
    "revision": "99497abb38baf0aec9a972461bd2f31c"
  },
  {
    "url": "assets/js/7.a27a41f0.js",
    "revision": "4f33b55731ff6ade1dd80833e9d99de7"
  },
  {
    "url": "assets/js/8.17034fc4.js",
    "revision": "bc7b2f76a3c45b4826f74602b0be5807"
  },
  {
    "url": "assets/js/app.fa81baa9.js",
    "revision": "284da4b72692800e01761d2e80c2f72d"
  },
  {
    "url": "index.html",
    "revision": "edfd227c95d758b10634cf2d21f2b244"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "71a3fdd6e87138e7a54a86aa075e161c"
  },
  {
    "url": "rules/index.html",
    "revision": "771446cc7f6ed9fa0d56c38bb9560320"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "77f4bf3ff4ed1f480cae36f0f90d2433"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "c55a6989b10e4e9d490dfcfe3e6dc12f"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "cafa67dd8a9e4a81936b020f37a7451e"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "15ed015575629eee71eb78e21b0d77e5"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "bae1a2c9b45c64d605b9afb0b7857206"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "5e909fdd501d68e8fad51e4e18f4557e"
  },
  {
    "url": "rules/no-use.html",
    "revision": "4898b33c46a092c5a6187f9e5677851f"
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
