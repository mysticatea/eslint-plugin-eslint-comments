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
    "revision": "ce40d4501f13aef1122f885210ec4c1e"
  },
  {
    "url": "assets/css/0.styles.75bf2031.css",
    "revision": "9b267983351a230befadaa464aa21ec2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6205c51b.js",
    "revision": "090cea77f70e4a3c8d11e3e7c9ad3800"
  },
  {
    "url": "assets/js/11.0b5c0971.js",
    "revision": "4306739ead4e5af5b638c146ae5f3a03"
  },
  {
    "url": "assets/js/12.ae97bb38.js",
    "revision": "c0fd3219c78d3e6dc79010200020f05f"
  },
  {
    "url": "assets/js/13.2287eb16.js",
    "revision": "3ca5f139a9d08e6ae8d6689afbef1722"
  },
  {
    "url": "assets/js/14.7c8af503.js",
    "revision": "f2d2a2f1ef6eaf33da7d9a530cc959bd"
  },
  {
    "url": "assets/js/15.7fc96e2a.js",
    "revision": "7d2fac678d03bb87e15c9b94aa75b607"
  },
  {
    "url": "assets/js/16.e9a7dde3.js",
    "revision": "5d1907b680efd25fba8e72f90a7b0960"
  },
  {
    "url": "assets/js/17.198230b0.js",
    "revision": "587a9fd3bbd878cda0f7e28d3bd87eba"
  },
  {
    "url": "assets/js/18.3e6b6807.js",
    "revision": "1e880f72597bcd94ede8fadc3a709b45"
  },
  {
    "url": "assets/js/19.94ddb1f8.js",
    "revision": "fa5be8f1d4abfc803bf8faf034496521"
  },
  {
    "url": "assets/js/2.883c2e58.js",
    "revision": "fe0a2e42b8734b6930dc6964d8a5201f"
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
    "url": "assets/js/6.5bcf946d.js",
    "revision": "2f3a6aee27b27aaaaa3439fcd5261f29"
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
    "url": "assets/js/app.eb9bc486.js",
    "revision": "dd4c32ea8bcb5957702c22cf0cf3e28c"
  },
  {
    "url": "index.html",
    "revision": "d40191226cc9eaa855c6dcceaab2d868"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "650fd8dae6394e4dd99a82b7871dd0b9"
  },
  {
    "url": "rules/index.html",
    "revision": "f0b10e5e5a7ca0c6003aa22a9be2675e"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "b6b311cc57b09f37cc64f824596703fd"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "5359611fb18c6124c3f05d22e895f592"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "3b65563c71bee3662bb79b42a3b25203"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c1d65b013deb8474b06098f6c05a55cc"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d778590bcb213fb8ddefb678049a9f45"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "33b47cf8ca5aab4e7cd621eb1f73ca43"
  },
  {
    "url": "rules/no-use.html",
    "revision": "e7a54e943707da6859afa944beabecec"
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
