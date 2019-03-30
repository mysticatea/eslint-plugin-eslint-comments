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
    "revision": "3783a7c565b41eefb7ae3f39da9f5be9"
  },
  {
    "url": "assets/css/0.styles.5c9d87ed.css",
    "revision": "65876f5a1a320756682f1eb573fa499a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c0b38da8.js",
    "revision": "6836e6fc207d8c05828a881dbd5c126e"
  },
  {
    "url": "assets/js/11.724aee4b.js",
    "revision": "7a6d5bb333b3e267a49b2bc2969c065c"
  },
  {
    "url": "assets/js/12.31545c34.js",
    "revision": "1527217adf7c106cbedc41521e2865a6"
  },
  {
    "url": "assets/js/13.a4daffd7.js",
    "revision": "7ed071c9b87bb9a8472e7609f15b0894"
  },
  {
    "url": "assets/js/14.32651bf9.js",
    "revision": "700757501971562adcb2162d6592be98"
  },
  {
    "url": "assets/js/15.1cebcde5.js",
    "revision": "4af6ba09202fda29a7f0ebafc7cd3df0"
  },
  {
    "url": "assets/js/16.de4d8803.js",
    "revision": "0bb07b31f8d4e531ff03d7fb7a3c96f4"
  },
  {
    "url": "assets/js/17.0cd1893a.js",
    "revision": "a698a8bcc75c6267e9795e52f88afdab"
  },
  {
    "url": "assets/js/18.f7fa6e53.js",
    "revision": "8d24deb4b294138e8d1726131da8f172"
  },
  {
    "url": "assets/js/19.a083557a.js",
    "revision": "b351b3570d116706b30d7b651c38afc8"
  },
  {
    "url": "assets/js/2.c8d63209.js",
    "revision": "a0e2ca73b0697b453c2f76c32f3e4387"
  },
  {
    "url": "assets/js/20.9552a75f.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.1e1346b2.js",
    "revision": "c1734d0ff1ed808e67640ce276f3d81b"
  },
  {
    "url": "assets/js/4.1ed5a87b.js",
    "revision": "1ffc76539a53c40a66b7a9fda3b5b7b3"
  },
  {
    "url": "assets/js/5.e9e9d000.js",
    "revision": "ee906d8c3dc530990cd3bf69d84e0f3d"
  },
  {
    "url": "assets/js/6.43ee3a92.js",
    "revision": "ddc76df738d43e692cd061434dc18f99"
  },
  {
    "url": "assets/js/7.49e6277d.js",
    "revision": "758d9340cd50bfe42ee8dcbec70203a2"
  },
  {
    "url": "assets/js/8.21f3e6a8.js",
    "revision": "1e35abc3b65166e59e0997d18fe8339e"
  },
  {
    "url": "assets/js/app.1a01c103.js",
    "revision": "49fdc28e059629bdf06609d015b235e0"
  },
  {
    "url": "index.html",
    "revision": "3b22890110424bc02ded195295f73679"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "e5bf1d0a12428bfb969645b528851b91"
  },
  {
    "url": "rules/index.html",
    "revision": "4b38b3703630f6f616ba65b69d462eae"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "643d1a6f3e5b0b7beaab01272dd61296"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "ff363501ce4445953b95de4c493c062a"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "18b5259db3588350df1335e335557273"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "6e5dc9861e9be089ae0ec6c67ed9df08"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d6902081981566b6e9ff9ddb4a5d42b2"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "4fde717477dd79a29a6e9637a79213f6"
  },
  {
    "url": "rules/no-use.html",
    "revision": "5779e61e6c04663717768cb6560442fc"
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
