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
    "revision": "49b725aee87ee73a9aa4562d03808697"
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
    "url": "assets/css/styles.c72baccc.css",
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
    "url": "assets/js/app.c72baccc.js",
    "revision": "5721174c93f94072f73dafa50ae54227"
  },
  {
    "url": "getting-started.html",
    "revision": "99db7475812a5552f6ef08beadf31950"
  },
  {
    "url": "index.html",
    "revision": "c11cb2c2246068f9dec21c414185f1a4"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "086b060b6055899eb194b2a8c0bef334"
  },
  {
    "url": "rules/index.html",
    "revision": "aae8649a6b4bb9cc6faa655f832d6a92"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "aee54fe025bba0b0a9e5a1a72febb5bb"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "afeb24e28bbe85dfc0ebeb09b49e2071"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "4c82d1765cacba939d16ac29f72092c1"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "3c91dcb263256dd033e56c893e607510"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "2a37633c1c412a5d205eacce00a79929"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "a7c0ca5d2adc6d6ea0a4af8d4573cdca"
  },
  {
    "url": "rules/no-use.html",
    "revision": "0a3ef1b564a82874fddb0eb458e8f386"
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
