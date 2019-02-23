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
    "revision": "a6a3cfa80c320e7f827000cdc1dcceee"
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
    "url": "assets/js/11.c8d1459c.js",
    "revision": "49bf20a7df7b223dde14523a00b40d84"
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
    "url": "assets/js/17.b954eb60.js",
    "revision": "e80c725ef7d36105c04c4f54c05d37de"
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
    "url": "assets/js/2.7966cf97.js",
    "revision": "7924787bfb5c579b497a3baae3569047"
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
    "url": "assets/js/4.823ce3f7.js",
    "revision": "2e21a83ae9d140438bebd14c7eb0bb9a"
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
    "url": "assets/js/8.17034fc4.js",
    "revision": "bc7b2f76a3c45b4826f74602b0be5807"
  },
  {
    "url": "assets/js/app.07e7f6e1.js",
    "revision": "06d033706057cbc51b88bf513e2f22a7"
  },
  {
    "url": "index.html",
    "revision": "ca3664c0b98fc8e606ad02272b86a651"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "baff364e9d9693c8c8527ae27f1ea188"
  },
  {
    "url": "rules/index.html",
    "revision": "a59cf653e950a0bd9dbdcd9106627f90"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "2de14e50e3480bd72495959215d67de9"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "e5908d975aedd74915f796b0acf5d18d"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "a51525b93ba8366dcdc6276e6158cddd"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "695d36aa753c2db9bc21c785130be696"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "47515e2622339206bdda5ee88488c54d"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "03ae147aceed92445aead24f30bce0fc"
  },
  {
    "url": "rules/no-use.html",
    "revision": "6e8e487c04ca6ff880381db5417a6874"
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
