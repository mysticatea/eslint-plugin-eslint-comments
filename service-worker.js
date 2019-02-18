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
    "revision": "d6baee9dd9a8ee8046d3df4cd34678e5"
  },
  {
    "url": "assets/css/0.styles.9a8cb94a.css",
    "revision": "3d42b2287e6986b520559610afe8fe90"
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
    "url": "assets/js/5.4a9bcdc7.js",
    "revision": "ac21bdaaf8d793a5205106c12586d5a5"
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
    "url": "assets/js/app.aff0fd77.js",
    "revision": "8b33f6b0a14e1848b725d5aa28ac206f"
  },
  {
    "url": "index.html",
    "revision": "e29e932e32280be5e38aa1fce9567ba8"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "9b3342597d854fa83ad317f8e636fa6f"
  },
  {
    "url": "rules/index.html",
    "revision": "430ddef8348d0aeab533323abbc5ef84"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "1e1130e2ce8514ef576bb32399ebc163"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "20a8c2393e7ce4233c3b4828d3866960"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "d7c35638c636a5740f108cf25c52157e"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "818044529abd8a8b7a07edd08466d49c"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "4731b2995792b683522a36f424032e11"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "8a419d2e04b3f6d6b173d6d494122b72"
  },
  {
    "url": "rules/no-use.html",
    "revision": "77ae79990b8b12ac0ba64fc4f5f8afd9"
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
