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
    "revision": "6026c2c30f0ea3fd8eb1b5a5bbf74a98"
  },
  {
    "url": "assets/css/1.styles.fe88f108.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/2.styles.d44dc1b8.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/3.styles.ea8f8406.css",
    "revision": "675b0d60718c53b771704a923c4b5aa5"
  },
  {
    "url": "assets/css/4.styles.1de69386.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/5.styles.bc82e9ca.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.3175bd28.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.fe88f108.js",
    "revision": "bfdb8e37bba1fd0cc1fc4a2c42cb4a16"
  },
  {
    "url": "assets/js/10.f27d607b.js",
    "revision": "3ed108618a45d45a0314655d3a2c5a47"
  },
  {
    "url": "assets/js/11.a42a9f0b.js",
    "revision": "5bab643824e0a2e24066a5e1f042dc47"
  },
  {
    "url": "assets/js/12.8e8d4947.js",
    "revision": "6366cd57bb49681ceb83917010c87173"
  },
  {
    "url": "assets/js/13.33df8e8b.js",
    "revision": "6f48091ccf4fe30a4377c6462b25f351"
  },
  {
    "url": "assets/js/14.6dd5cb5c.js",
    "revision": "47e1c86776e41231bd7c35434654d4c9"
  },
  {
    "url": "assets/js/15.13396cf2.js",
    "revision": "a13bc509b53aa55a12026b3d743e8e90"
  },
  {
    "url": "assets/js/16.811b15d7.js",
    "revision": "bf9a596a7de445f11f3a120bfa5a3a3d"
  },
  {
    "url": "assets/js/2.d44dc1b8.js",
    "revision": "8819b8e67e04bf02d41c07738fbd44da"
  },
  {
    "url": "assets/js/4.1de69386.js",
    "revision": "f356fe7f9759a813a38cdfd327a46fb3"
  },
  {
    "url": "assets/js/5.bc82e9ca.js",
    "revision": "c7266a0e12953b8a62a482c2afdae06b"
  },
  {
    "url": "assets/js/6.85bc6715.js",
    "revision": "7acc381b4a76b87f19a480d03c831a8e"
  },
  {
    "url": "assets/js/7.7a520dcf.js",
    "revision": "444e8472c63791891657ad4a925a214b"
  },
  {
    "url": "assets/js/8.14084682.js",
    "revision": "d15943843832ddf4557bee775a372c82"
  },
  {
    "url": "assets/js/9.1ca2cf84.js",
    "revision": "5b10d088f4c64c054f82d1837eda899f"
  },
  {
    "url": "assets/js/app.3175bd28.js",
    "revision": "3e2b2794d98b1a0403e2d48c9c5106c7"
  },
  {
    "url": "getting-started.html",
    "revision": "70ea751b13694ce8ff6b87fabccfdade"
  },
  {
    "url": "index.html",
    "revision": "a90d9eaee99aaa2a2137844d878e98d3"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "e722f7244d49d0cb009a641794c88450"
  },
  {
    "url": "rules/index.html",
    "revision": "b1b3e88887416a37639af036499d96f7"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "8cd6691217cb34d18cd89800c59e2529"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "c57d829e1e2299fee139cbdd808c2124"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "9d1241e8ae479e7d779b3cbe42c99975"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "30ed3f6bd30ab37a2fe0b70e37512e74"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "982cf43f3bdeddbfdad44c0705ecd586"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "9ac49c5032cf32999016ea48c8ba73be"
  },
  {
    "url": "rules/no-use.html",
    "revision": "7fab654cc0838660eee3db317d0f4898"
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
