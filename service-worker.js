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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a851644ed872c9581997377f2966a7f"
  },
  {
    "url": "assets/css/0.styles.8d51287e.css",
    "revision": "568665ce1cb73122203444d455119fc0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1e2a5cd1.js",
    "revision": "30300bc5fe135912b2d968e9ef2acfad"
  },
  {
    "url": "assets/js/10.4735d70d.js",
    "revision": "a94a7705755511496c261b278544458c"
  },
  {
    "url": "assets/js/11.a262f4c3.js",
    "revision": "da894f362a5f0bb6702097ea7658bcac"
  },
  {
    "url": "assets/js/12.e5c740e2.js",
    "revision": "675abd632af3a0fa3d51d9f66b7e9096"
  },
  {
    "url": "assets/js/13.b2e006b4.js",
    "revision": "64f243bee36fa310b6d8519bcf127ee6"
  },
  {
    "url": "assets/js/15.746c1e7a.js",
    "revision": "47dd7d2af32e7b7591d99b305f184dce"
  },
  {
    "url": "assets/js/16.bf6b3eba.js",
    "revision": "553a5b5c0dba2c00a37f95353c2deb97"
  },
  {
    "url": "assets/js/2.be9227dc.js",
    "revision": "f972f4a3508015bd613c9b77080c270e"
  },
  {
    "url": "assets/js/3.7a401c49.js",
    "revision": "b2bd79da3f6522b52d17aa50a866c96e"
  },
  {
    "url": "assets/js/4.2d6f6882.js",
    "revision": "3a06861a8560b4afac58ecec8518d189"
  },
  {
    "url": "assets/js/5.136ac470.js",
    "revision": "3707bf05e3d4159a45508c22f820e9cb"
  },
  {
    "url": "assets/js/6.dc030051.js",
    "revision": "49a0569080962ba4bd172049de4becc3"
  },
  {
    "url": "assets/js/7.04a908bd.js",
    "revision": "2c34c0deb974a822eab5d7068eaf34c0"
  },
  {
    "url": "assets/js/8.929e4136.js",
    "revision": "16dfeff3eba70c38b3208b73b19c52ea"
  },
  {
    "url": "assets/js/9.eb0e5ebd.js",
    "revision": "3285a911e86a7578d80c0aede5b92164"
  },
  {
    "url": "assets/js/app.05aab3e5.js",
    "revision": "9417e0f273e510569b8395bda7c1cb20"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6ffa0f6cfc8f755f180c9da4cd43e1fb"
  },
  {
    "url": "index.html",
    "revision": "bb63f9965058d18a355c2722c6d7bcb7"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "aaa3486f604e1373dba98b086f35240e"
  },
  {
    "url": "rules/index.html",
    "revision": "712e83bb53c1b96739356382ea8bf7e4"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "8dbac623d991bebe6ed86676183ba56c"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "04f202eca479f0927fffebdb317ef824"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "30f0f6c026a5ed0497133ab93f8973a6"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "af8eb2b61234a290e9334b485ad2d98d"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d197392b01f808fc7a78429c08cc5b2e"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "075c9872ee71fd03ed30104f7cd82f41"
  },
  {
    "url": "rules/no-use.html",
    "revision": "9dfa2d64f5085542d0213766168645bb"
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
