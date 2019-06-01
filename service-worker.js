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
    "revision": "ad7a834653871fa0ca78a7623ce7a846"
  },
  {
    "url": "assets/css/0.styles.7fae28b9.css",
    "revision": "ab11f4cf2ff0c07b06a1fc516b2e6623"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.271e5dcc.js",
    "revision": "090cea77f70e4a3c8d11e3e7c9ad3800"
  },
  {
    "url": "assets/js/11.d1a5dc07.js",
    "revision": "4306739ead4e5af5b638c146ae5f3a03"
  },
  {
    "url": "assets/js/12.ee6d2c35.js",
    "revision": "c0fd3219c78d3e6dc79010200020f05f"
  },
  {
    "url": "assets/js/13.3e80ccbf.js",
    "revision": "3ca5f139a9d08e6ae8d6689afbef1722"
  },
  {
    "url": "assets/js/14.0e9af65f.js",
    "revision": "f2d2a2f1ef6eaf33da7d9a530cc959bd"
  },
  {
    "url": "assets/js/15.8941930f.js",
    "revision": "7d2fac678d03bb87e15c9b94aa75b607"
  },
  {
    "url": "assets/js/16.ac9f34b7.js",
    "revision": "5d1907b680efd25fba8e72f90a7b0960"
  },
  {
    "url": "assets/js/17.461ec0b0.js",
    "revision": "587a9fd3bbd878cda0f7e28d3bd87eba"
  },
  {
    "url": "assets/js/18.fd26091f.js",
    "revision": "1e880f72597bcd94ede8fadc3a709b45"
  },
  {
    "url": "assets/js/19.0740439a.js",
    "revision": "fa5be8f1d4abfc803bf8faf034496521"
  },
  {
    "url": "assets/js/2.212e7f4f.js",
    "revision": "54160e2e9f0590297d374d1d632ebccd"
  },
  {
    "url": "assets/js/20.9504868a.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.0a940b82.js",
    "revision": "af82236099902dcb3d9055cb9332f4ba"
  },
  {
    "url": "assets/js/4.d62d5ea6.js",
    "revision": "fdbd863ac32c67753945b274cef1a7b0"
  },
  {
    "url": "assets/js/5.93bbfbfb.js",
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
    "url": "assets/js/9.248dd9f9.js",
    "revision": "25f6410960edafcd4e9cccadea931974"
  },
  {
    "url": "assets/js/app.c4d2fbef.js",
    "revision": "1c3259016659ec4c95467f6eb0a0a608"
  },
  {
    "url": "index.html",
    "revision": "89ab08a00183f76fc6015228ad45f43c"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "97cd3d6427c17fcfbc0593f86a0258d0"
  },
  {
    "url": "rules/index.html",
    "revision": "89d4788c8db00f4359760ba45b098320"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "07b49bab219122b798d260e772b571d3"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "6e7b896a4591f11d42a66d5acdec8098"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "dfc74f4ca4131a06be4e57369065c9a3"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "5158a12e9ffd2495d5a53d7a2cfc11ca"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "a48305149b5573b6cb9275d3bdb84b03"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "f5af6f729de2f39c191d16673eaf9be4"
  },
  {
    "url": "rules/no-use.html",
    "revision": "1b6f274390555fb03f55ece18aca4fb7"
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
