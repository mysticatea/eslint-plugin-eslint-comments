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
    "revision": "66f656088b29e58553eed08fe0681000"
  },
  {
    "url": "assets/css/0.styles.91d10347.css",
    "revision": "003bb5f2bb1a56e57b4de8a8ca12a1a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a265e067.js",
    "revision": "c139391eb62622324dcf1f0962dd7249"
  },
  {
    "url": "assets/js/11.1de61c81.js",
    "revision": "50b81674b7d3c4c8841ff0b8a06b2f89"
  },
  {
    "url": "assets/js/12.a509985e.js",
    "revision": "ba06955fa163b553fd0153f470607933"
  },
  {
    "url": "assets/js/13.0a912cb9.js",
    "revision": "66e1028fb2e5d09773c93b0d784b23eb"
  },
  {
    "url": "assets/js/14.9745a257.js",
    "revision": "a6fb6a3517ebf995c70f11262b1dfa53"
  },
  {
    "url": "assets/js/15.11cac9f0.js",
    "revision": "8706fbc0dadd3d50a92f5cf829351f09"
  },
  {
    "url": "assets/js/16.3f02f77a.js",
    "revision": "7f2bbca3df4f1ca7a59e74e507891217"
  },
  {
    "url": "assets/js/17.8f1d6235.js",
    "revision": "e99e4152781ee3cf7b54a0850bcb4505"
  },
  {
    "url": "assets/js/18.10f08654.js",
    "revision": "57b0b395ebc4039d9b86a4225f703eda"
  },
  {
    "url": "assets/js/19.539bf6e5.js",
    "revision": "30476eb0511235127df10690e3d02bc7"
  },
  {
    "url": "assets/js/2.1718eea3.js",
    "revision": "cabe444dd9ceeeacc6bc891e3ffa8c4d"
  },
  {
    "url": "assets/js/20.93a78386.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.fabfccef.js",
    "revision": "e9762ee7ff7af846baebd50fe794c36b"
  },
  {
    "url": "assets/js/4.b14d429b.js",
    "revision": "c27f49eb29352ce4dcc2e94364306849"
  },
  {
    "url": "assets/js/5.b5541691.js",
    "revision": "63964a41c6a0c33fc6cf21f730a1635e"
  },
  {
    "url": "assets/js/6.d3df68fe.js",
    "revision": "99497abb38baf0aec9a972461bd2f31c"
  },
  {
    "url": "assets/js/7.fd1e6101.js",
    "revision": "4f33b55731ff6ade1dd80833e9d99de7"
  },
  {
    "url": "assets/js/8.175dd6fa.js",
    "revision": "bc7b2f76a3c45b4826f74602b0be5807"
  },
  {
    "url": "assets/js/app.65dd61b8.js",
    "revision": "6d6a9656669aebe2ae7d9c8f3462070b"
  },
  {
    "url": "index.html",
    "revision": "2e894246ce06e0db85185e990568a1d8"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "52fb35b30c57d9f39e40939275e54207"
  },
  {
    "url": "rules/index.html",
    "revision": "e5faaa605dce30f7f518babda710c10c"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "211b145f235fa73b0600a272d29c0684"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "265eb1448e6e86bc517aed0dcff19da2"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "6dafc9457da23e686fb7f3c7512c5e83"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "81e1f57642d01046bc40743ca93565b5"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "ccbd96b8eb132599cc49f72aadd682d7"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "24020656dcb309715a43b8c5c1006f14"
  },
  {
    "url": "rules/no-use.html",
    "revision": "31e87c30a98527564bd35071f611cf3d"
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
