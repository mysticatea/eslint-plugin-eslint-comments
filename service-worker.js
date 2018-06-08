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
    "revision": "003c51451c287665bcdfa9defd96bec3"
  },
  {
    "url": "assets/css/0.styles.d38a46de.css",
    "revision": "d2c28a49b501924ba763d9b4ae7aa19b"
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
    "url": "assets/js/10.4d8d8647.js",
    "revision": "1689292cddcad05e554c3b0c93428385"
  },
  {
    "url": "assets/js/11.5b564004.js",
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
    "url": "assets/js/app.517cc20b.js",
    "revision": "24752d3390b113b3bd0b1980b4d4a984"
  },
  {
    "url": "getting-started.html",
    "revision": "e110cd41754e9a0634acb05adaac8e31"
  },
  {
    "url": "index.html",
    "revision": "51684ed45bf31ee232e1014cd37f1133"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "46e75d9313d0e654e40d5a1c3a499a3e"
  },
  {
    "url": "rules/index.html",
    "revision": "c2b4320b1bcb6bc939cc383a05b1247d"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "505f5377412e4b67629bf959d56926fc"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "7b5e84a2fa7f6215d02e2c18882c4dca"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "5d30ae4aa0479cb4f2eb0fd3f470e28f"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c3d2fc55f58653fbb89fd5fdbcc8ecf5"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "bbffa2737bbb5e9bb0e38beac75218e5"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "c3a62ebf071010903ff49ecd232d686b"
  },
  {
    "url": "rules/no-use.html",
    "revision": "a11f9ab366cd5e59a5a2bcafd19dc68a"
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
