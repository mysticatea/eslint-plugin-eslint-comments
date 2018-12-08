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
    "revision": "039f074ef23014d2e96fe6df45e0ec19"
  },
  {
    "url": "assets/css/1.styles.8ad10c24.css",
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
    "url": "assets/css/styles.262e63a2.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8ad10c24.js",
    "revision": "047cd50ed4458ea02bb9db838b78b9fb"
  },
  {
    "url": "assets/js/10.3196b0c6.js",
    "revision": "747682062e1e8b9963013666380ce5b3"
  },
  {
    "url": "assets/js/11.c6b11af1.js",
    "revision": "30a67afb29ca54a18f7d9deb8b0affd1"
  },
  {
    "url": "assets/js/12.86b8ecee.js",
    "revision": "17f9cac6496cce3b517967b4f8404da2"
  },
  {
    "url": "assets/js/13.c82a9129.js",
    "revision": "dbb957e919522cfb06b00d3c6cec3b8b"
  },
  {
    "url": "assets/js/14.a20e5366.js",
    "revision": "9b540496185b70e56a80951f5fa8a256"
  },
  {
    "url": "assets/js/15.f59b5780.js",
    "revision": "f663ebcf015b6a808ef432b1f74483dc"
  },
  {
    "url": "assets/js/16.f49bab2e.js",
    "revision": "673c7aea97cb3f46b30566d589776f13"
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
    "url": "assets/js/6.1df65da8.js",
    "revision": "f1e49d4ddd1d920eeb45510fcc640844"
  },
  {
    "url": "assets/js/7.57bd730f.js",
    "revision": "dff80afd44928c55a071b5bd738afbe8"
  },
  {
    "url": "assets/js/8.78cecf24.js",
    "revision": "96e018d181c6a32ebedb26bfd9d086a5"
  },
  {
    "url": "assets/js/9.200fdbf9.js",
    "revision": "c19aa6f394de5af843c98215c1b480e3"
  },
  {
    "url": "assets/js/app.262e63a2.js",
    "revision": "62cff2a1db7820b4a151a6d431508a6f"
  },
  {
    "url": "getting-started.html",
    "revision": "03f3ede5f5b0dc2f9f08e6ff99ad56bb"
  },
  {
    "url": "index.html",
    "revision": "351a2905b0c479564bec35d77dd56660"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "cad3b26f87764d04c20bc19f15634fca"
  },
  {
    "url": "rules/index.html",
    "revision": "e9329c17a0a8ba970de1cd089de6bb11"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "7e2196018632d5f1558bc7ccc41a97a2"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "16c1f3722b24154fa8d6e39377fe65a0"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "bfdba6ecbf5d06f05679bcd71ece6d21"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "8f7120620472553a8f11445e24290aff"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "1e1b440e579c832f35c436538d1ec6c2"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "398493f0f1216b31fc6c5f3d9014a06a"
  },
  {
    "url": "rules/no-use.html",
    "revision": "31e86a63ba79e3be29e28afe17da590e"
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
