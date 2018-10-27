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
    "revision": "75fce4d7e8ed72679852549b412f0bab"
  },
  {
    "url": "assets/css/1.styles.7d69b922.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.4c2a44c3.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.adc1d0f7.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/4.styles.c6929c83.css",
    "revision": "a2044e084a3acb7943b52ff8fda69b27"
  },
  {
    "url": "assets/css/5.styles.f34341de.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.668c30d9.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7d69b922.js",
    "revision": "5053e5515507fda6b02c33a1497ce4a5"
  },
  {
    "url": "assets/js/10.ccde7d01.js",
    "revision": "984a9c27797f8b59eb2359219a97c6a9"
  },
  {
    "url": "assets/js/11.cb5efc68.js",
    "revision": "923bcf615e9a55644ff49daf5b7fd8e3"
  },
  {
    "url": "assets/js/12.e258ddf5.js",
    "revision": "af89558c5ae56b57646e395f433bdd15"
  },
  {
    "url": "assets/js/13.04fe4b83.js",
    "revision": "7a2aa1026af15ba05fe5c191a805d4db"
  },
  {
    "url": "assets/js/14.80305443.js",
    "revision": "ac77c50f7e0df61363c659a465ed330d"
  },
  {
    "url": "assets/js/15.75644ad4.js",
    "revision": "b677e4577b51782a8f1850c320cec583"
  },
  {
    "url": "assets/js/16.a2fd1cc9.js",
    "revision": "50d3cf5b33caa8382e9248c6648bb117"
  },
  {
    "url": "assets/js/2.4c2a44c3.js",
    "revision": "42b24561383128845ed0f69d08f11702"
  },
  {
    "url": "assets/js/3.adc1d0f7.js",
    "revision": "357c6f8c633d21d59ddeefe9ee329299"
  },
  {
    "url": "assets/js/5.f34341de.js",
    "revision": "b4be0db92c20bbf2a1fa7417ede371e6"
  },
  {
    "url": "assets/js/6.1df65da8.js",
    "revision": "f1e49d4ddd1d920eeb45510fcc640844"
  },
  {
    "url": "assets/js/7.bd0bf68b.js",
    "revision": "e1079ae8e7a98543fe64d77dd88f531a"
  },
  {
    "url": "assets/js/8.78cecf24.js",
    "revision": "96e018d181c6a32ebedb26bfd9d086a5"
  },
  {
    "url": "assets/js/9.c58d05f7.js",
    "revision": "0ac20d8edd4d8e3dbc523733ce58cb45"
  },
  {
    "url": "assets/js/app.668c30d9.js",
    "revision": "87edda4dd208690174d759d18fa9cf30"
  },
  {
    "url": "getting-started.html",
    "revision": "f6938aa6cdb6aba3da47437623f0ced2"
  },
  {
    "url": "index.html",
    "revision": "8e0d284ff64b3d8b9a4e3f5fad3dd9d5"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "98403a48d491782b344094f4e8412f50"
  },
  {
    "url": "rules/index.html",
    "revision": "2002fb8fc3d08ec10c9780e64cec6384"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "da29196bd57a494f98def26c30469ab0"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "68e133d49073dcef23d85de5b01069c6"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "e70c654b5d4235a1b64e7d3a878465b0"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c7b9ea66ad377775f38378cbd484b1fb"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "31ace712cda1511747063ff3b05abd51"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "5f0e3d23bb854ccdaf0e4d4a68c5390a"
  },
  {
    "url": "rules/no-use.html",
    "revision": "ed1b85da8cdfe1c885feba1f5bb17a6f"
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
