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
    "revision": "2e6acd11143646ad18ec657701b4b9b3"
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
    "url": "assets/js/app.fbd2405e.js",
    "revision": "6e789b3eb1d91e3898e3a3b527611e12"
  },
  {
    "url": "getting-started.html",
    "revision": "cb5f9c0948b686667755420e44922cab"
  },
  {
    "url": "index.html",
    "revision": "644195f4d6d51c00f554fdd1ee15654a"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "cd25e3f4d84116e53cd3f5e4e3eff552"
  },
  {
    "url": "rules/index.html",
    "revision": "d22193a0d33c72afc68e26ff4b7ca5af"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "0e53ce5d6144d5779cd96366ee315b17"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "7ff7ef0b79ce8cfd10e256e378fb2903"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "715d18b560b83c4760a2b33a01ea6fcb"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "fd168c71f9f8e5b6da971a1d372c3bd2"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "4856c45bf81ce0fa8b5993ecdf24792a"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "ddc0068c846f72e07b93733ab32daf93"
  },
  {
    "url": "rules/no-use.html",
    "revision": "532caf525951b26ed6628f6b173905ed"
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
