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
    "revision": "7a04013196d1bd43a036fd96850ba4c7"
  },
  {
    "url": "assets/css/0.styles.3783a7e6.css",
    "revision": "0fd799e4dde3c513112ba84d0a39dfbb"
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
    "url": "assets/js/15.40bb7859.js",
    "revision": "d018115803b8592c9580d90cd0f46415"
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
    "url": "assets/js/app.bb58708e.js",
    "revision": "8607439ac5546739a519bee6be11cb05"
  },
  {
    "url": "index.html",
    "revision": "b1ac1b0ae04837eba8069680002fb457"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "dd0a62f26758f3430d5e9d1504768352"
  },
  {
    "url": "rules/index.html",
    "revision": "447ba60d2be06fc4760d896632f63353"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "0c039f1b28b49d7c610d4b61952b0f2f"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "6a82ef0f57cd97856d6e2c625d60c37b"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "ee3ad8c2d30d62965921f00ee252c752"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "cbd2e1bff20f8e3d73729de9093a639c"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "e0a4da724ba7f6c3f6a60205d4ee86f8"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "d91538925f4bdc4feb79bb6cfc4ae74e"
  },
  {
    "url": "rules/no-use.html",
    "revision": "710c5d019f442f2ea1ed833c0ba5a3a3"
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
