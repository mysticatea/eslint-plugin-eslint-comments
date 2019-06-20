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
    "revision": "3191bb28b8d37b1ae1080dcf02a79d1f"
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
    "url": "assets/js/10.aa002ba8.js",
    "revision": "0257460ecefad6c87f6d0cf7afb61b8a"
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
    "url": "assets/js/2.4317d1ee.js",
    "revision": "52cfb185a0f1b2f91152e08348df4da9"
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
    "url": "assets/js/4.bd6c00eb.js",
    "revision": "fdbd863ac32c67753945b274cef1a7b0"
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
    "url": "assets/js/app.ae3e1c36.js",
    "revision": "739c994b1a699faf03ddd683452b73dd"
  },
  {
    "url": "index.html",
    "revision": "4288a47c2a30b937ea7174c34302709d"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "30a1f3115cdf9b600f3d678b354751e4"
  },
  {
    "url": "rules/index.html",
    "revision": "a0def2c53c1ff6670712d1ecb25e20d8"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "f7c2507ba9d3ca519f4d8891cbecc76a"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "ed4cdb96b5a4bed4a53465358cc925ec"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "03c1d4529af11facb2fba889e5e559fd"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "961c4d938a0b4e09962815120045d92e"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "0dcdd60d075e04da8bb2dc73d623c641"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "c61d8fb46b5e1c4fee676f4cfa471bc1"
  },
  {
    "url": "rules/no-use.html",
    "revision": "4f6e20b74f84a11e797a49098209a13f"
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
