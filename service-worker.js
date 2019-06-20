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
    "revision": "95d5856c6a72c3aca977e12f49312483"
  },
  {
    "url": "assets/css/0.styles.f3baf6dd.css",
    "revision": "9b267983351a230befadaa464aa21ec2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f461b62.js",
    "revision": "08f550406912983e919d7d8c8be95a7c"
  },
  {
    "url": "assets/js/11.25255237.js",
    "revision": "5083753b0893ef9eb812289f0e8c7d3e"
  },
  {
    "url": "assets/js/12.1b5da5ed.js",
    "revision": "c07374db6009bc66449bbb07a486d2f6"
  },
  {
    "url": "assets/js/13.c3423153.js",
    "revision": "1e7a08d2c68743f4c6bb5ecb3412b43b"
  },
  {
    "url": "assets/js/14.6dfb8295.js",
    "revision": "8bfa41f66f9201a8575d5058032b40a5"
  },
  {
    "url": "assets/js/15.7fc96e2a.js",
    "revision": "7d2fac678d03bb87e15c9b94aa75b607"
  },
  {
    "url": "assets/js/16.db416c4d.js",
    "revision": "bca82808ad26fd027bd9b9399e75cc92"
  },
  {
    "url": "assets/js/17.839ce828.js",
    "revision": "e88b9ce2e14fe3b43d5d9d83c1f9e0c8"
  },
  {
    "url": "assets/js/18.ceda644b.js",
    "revision": "c54713e46a63cca3172b56d934593827"
  },
  {
    "url": "assets/js/19.84694c55.js",
    "revision": "6222c2e83ef234e8f5e03de0ff94c24f"
  },
  {
    "url": "assets/js/2.2cf29bc1.js",
    "revision": "f3ae89b4f35849b5706d47f922e99584"
  },
  {
    "url": "assets/js/20.9504868a.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.cd6bafb2.js",
    "revision": "4ce11cd39bfc95a228d8477693b41102"
  },
  {
    "url": "assets/js/4.227b2b0f.js",
    "revision": "e55487692c7ad5bf0db191e8ee14dc8f"
  },
  {
    "url": "assets/js/5.982fd448.js",
    "revision": "5c8b0a0921953f1bb57b01c75bfd34eb"
  },
  {
    "url": "assets/js/6.b4970043.js",
    "revision": "7454560892e7caaffcc78c6e4d95f341"
  },
  {
    "url": "assets/js/7.f59b4c10.js",
    "revision": "ccca8d5e3a33cc7cd9c2cb142ab50135"
  },
  {
    "url": "assets/js/9.ce6e71ef.js",
    "revision": "7141f2b19bd6ee07003fe4b519801ec8"
  },
  {
    "url": "assets/js/app.aec0c5d8.js",
    "revision": "e0be54e9b9e96174e088c60df260c18e"
  },
  {
    "url": "index.html",
    "revision": "3cf42345850f14779658657d0b7006b6"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "d5576e3fb0723949fcf879d4f2e3f538"
  },
  {
    "url": "rules/index.html",
    "revision": "2966fa29aad8ebb61bf9611b9f0c7803"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "392ad8da52a7966d9ca93c917cd74bb0"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "772035b905294a6634da34146fffd27a"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "fd4afd238b30c2424ae5e24eb2aebea9"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "6dc7f69d5ff51d5b739249f1d18ee1dd"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "ee30532dd67247c129728c321fd2eae5"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "d62d2c0692a8ce36105cc98336c0e560"
  },
  {
    "url": "rules/no-use.html",
    "revision": "2e6cc79aca98b287e7ce62386b41d2f1"
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
