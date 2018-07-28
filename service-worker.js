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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9574d3a5c73b613abb749cb22304b8e4"
  },
  {
    "url": "assets/css/0.styles.bc516859.css",
    "revision": "bc95948adbf39f53250fcb15f8a3cf4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9c49d9c6.js",
    "revision": "328652666a12451561a7c74860996699"
  },
  {
    "url": "assets/js/11.1e70ea98.js",
    "revision": "b4257d51a9ac7fc59861f575cc2b0bad"
  },
  {
    "url": "assets/js/12.37a570c1.js",
    "revision": "618b1db3adfdfbee36868ecffc4a4dcb"
  },
  {
    "url": "assets/js/13.0894664c.js",
    "revision": "e0ed848a6c4c9e12a095df343b282da3"
  },
  {
    "url": "assets/js/14.fa70f813.js",
    "revision": "26ad94ef4aa8060a1232a7a7097e8073"
  },
  {
    "url": "assets/js/15.2b40ccb7.js",
    "revision": "02739e7eba3e707a1693aa1c05bf36bc"
  },
  {
    "url": "assets/js/16.6cd532cf.js",
    "revision": "48defe70a4827a602663639caa6e2327"
  },
  {
    "url": "assets/js/17.bd6f0786.js",
    "revision": "a5208e92c4ecbadd90e9919a7530c946"
  },
  {
    "url": "assets/js/2.9888a274.js",
    "revision": "4e25e1fead27de665cd7ba181cc79db7"
  },
  {
    "url": "assets/js/3.5ed8b98d.js",
    "revision": "23a96d13375984418f5fa331633130e2"
  },
  {
    "url": "assets/js/4.36b6a8fb.js",
    "revision": "59245146c27b91d165028c8ee911723a"
  },
  {
    "url": "assets/js/5.6273e4d8.js",
    "revision": "d49b44884b1de3c768c1f0a1931539a7"
  },
  {
    "url": "assets/js/6.6f8e74dd.js",
    "revision": "80329ef7309e87eb78616d792a9b00a1"
  },
  {
    "url": "assets/js/7.e0e75787.js",
    "revision": "731b54c257998e9623d79cfd95f5f241"
  },
  {
    "url": "assets/js/8.d30beedd.js",
    "revision": "82438422621f905502357b34ccb4ce0c"
  },
  {
    "url": "assets/js/9.1cbdf076.js",
    "revision": "0f1cad45cb7272e0781cf97fba9553a9"
  },
  {
    "url": "assets/js/app.77f97ad8.js",
    "revision": "6b065e7cca8c8f3a3dc1fda369d87d34"
  },
  {
    "url": "getting-started.html",
    "revision": "0a31637af7246a07cad36cb886ba0cfa"
  },
  {
    "url": "index.html",
    "revision": "db17e76e7aac8bc4ae5872d60fe4012e"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "c0420ff22f382117a1bc5317720c6452"
  },
  {
    "url": "rules/index.html",
    "revision": "4d0bc5dcf8be7d60644e55a0224c4a2d"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "dfc5394f2f80761dc8b8ff8ab97ef31a"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "346994844b3c566df100e9da7e0e8733"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "d593b4c2cab6736f841ea373194fb266"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "ab12434d5a8178bb5be86652449fe92b"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "65ec4042307c723585aecee6fabf9d60"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "527397accf3e24431b18e6f3b40e3b60"
  },
  {
    "url": "rules/no-use.html",
    "revision": "6bf7a856c6f942607dee1d075a10b9b1"
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
