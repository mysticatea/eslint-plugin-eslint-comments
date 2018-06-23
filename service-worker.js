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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "edc54a11b03e19496f782c0c5e3dbc2a"
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
    "url": "assets/js/1.a3e4289f.js",
    "revision": "a34581d2371da13f30bfc9b6a0dc7cf5"
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
    "revision": "8b2ea3a21eee463ee6a0cacb53e39e37"
  },
  {
    "url": "assets/js/15.746c1e7a.js",
    "revision": "14faec58c29367a4a7de50dd202f3d55"
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
    "url": "assets/js/app.2b9e2675.js",
    "revision": "8a9665cbceffcad280342d0a56e1185d"
  },
  {
    "url": "getting-started.html",
    "revision": "8ef3697422717ddbd8513bdbfafe1e8c"
  },
  {
    "url": "index.html",
    "revision": "c593ba3855e907307c13f67249d91a18"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "b1e2dbc7b3cefbdd08676a89bc17c0b2"
  },
  {
    "url": "rules/index.html",
    "revision": "f9c0a83f37d6c5d5721d3b7d92f15320"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "810a5d84934f7b512e1e40ec274085ab"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "24153a4c92cccc8fbf1ca13d8e94bf45"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "a9856483658385c2ff38126aa54de51a"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "195ad835ac5983f65f4e2c577082312c"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "3344450d59ede99a79913a42a4ddcdf0"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "35ef04c11e589764a1c808f976f531d8"
  },
  {
    "url": "rules/no-use.html",
    "revision": "43b84f85b832720f4b8ef82cff228836"
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
