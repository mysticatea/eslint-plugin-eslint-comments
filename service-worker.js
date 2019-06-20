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
    "revision": "ba96e60c32b180d2fdcec5c91722c3fd"
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
    "url": "assets/js/app.b9c8a53a.js",
    "revision": "0a861fe6cf86bdcc139de38b7a58686a"
  },
  {
    "url": "index.html",
    "revision": "271024d8e02160f18105805fea3a0888"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "09ad049f707840902b9fbaff4d484caf"
  },
  {
    "url": "rules/index.html",
    "revision": "bd344e6894122106de0546e490a9792a"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "362def1b3612fc6dbb9e6ca2b8fab738"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "707be8234fc147fc34325b7f4bec801c"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "0fa0687b909475a2bd898226817ac723"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "1f7e022f2fb1a92efdd6cdc4baae7bb9"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "716d94f099226150064006e32c8612b7"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "d4c16dc8bf769a54055da4dc7bd06baf"
  },
  {
    "url": "rules/no-use.html",
    "revision": "602daec8dab0887553f356f136c9d629"
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
