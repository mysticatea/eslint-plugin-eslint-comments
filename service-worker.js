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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa037da3f1a9ddbfd73a89ecb94422e4"
  },
  {
    "url": "assets/css/0.styles.0587639b.css",
    "revision": "fc3241cb5e404a253a3076112217783a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.615a4d2f.js",
    "revision": "206398d158a850f20856fa069585bf17"
  },
  {
    "url": "assets/js/10.c86fad14.js",
    "revision": "af0a3b709b4f60878b153632add89e32"
  },
  {
    "url": "assets/js/11.f7ee26d8.js",
    "revision": "26a52531899ff7ce0771ddaf122e4bf1"
  },
  {
    "url": "assets/js/12.6a6569db.js",
    "revision": "a9ebeac8100869ce8fb4e6a630b09308"
  },
  {
    "url": "assets/js/13.d0a557bc.js",
    "revision": "6f8564c9e4cb763689a342a2acb20ae6"
  },
  {
    "url": "assets/js/15.9850a3e5.js",
    "revision": "b70cf4ff6b01d3e9a512d694eeafeaff"
  },
  {
    "url": "assets/js/2.b3c7c0a9.js",
    "revision": "f0b2a18ba0b2f059ab09b8ca500df9d8"
  },
  {
    "url": "assets/js/3.80ff2dc5.js",
    "revision": "dd285118ecbee4fb1baf086bfeb5bfe0"
  },
  {
    "url": "assets/js/4.9eb2c992.js",
    "revision": "ca8c8cf5acc82acc35f6802fb8777ab7"
  },
  {
    "url": "assets/js/5.56cb457a.js",
    "revision": "eeeba4a4f1b7181be902f684c86745c0"
  },
  {
    "url": "assets/js/6.f5d69c51.js",
    "revision": "529e87d9a4f86db78ed4ed76516c53b5"
  },
  {
    "url": "assets/js/7.fe68dafb.js",
    "revision": "a60508cd8ff607127bb3201ce2d5c6bd"
  },
  {
    "url": "assets/js/8.3f3d105d.js",
    "revision": "5a3fb7f53a26e2e2f86652875cf01e0a"
  },
  {
    "url": "assets/js/9.6652428f.js",
    "revision": "738a617e15937afabe023d8728c52a2a"
  },
  {
    "url": "assets/js/app.5e764297.js",
    "revision": "177e0b9c516f1ad19a34af25587ce97d"
  },
  {
    "url": "getting-started.html",
    "revision": "67905939e1e07ef42af7d8b25ad7c756"
  },
  {
    "url": "index.html",
    "revision": "911a6b1304c9870108fbbd781e60e831"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "f96dd3dc357058926975e5097d428709"
  },
  {
    "url": "rules/index.html",
    "revision": "c445b7452f2783471af86cab6e3943af"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "4228ce715b476966c2dc87115edf6525"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "3fbde8ef99cb2e02ee927fc3863ac51e"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "7ec70e27e2e59c9ecd03c3e94137aaed"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "82802c84d4c36dbe61cf5dbce9bc3766"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "1cc429b786ebf5c89a995083b0fd058f"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "d98dca803e30fb6a3eae27f4650baff7"
  },
  {
    "url": "rules/no-use.html",
    "revision": "09217d6549756b905093304488a9885e"
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
