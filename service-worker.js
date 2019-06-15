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
    "revision": "af9623e0aa0ebb7a52ddf5c39bc90291"
  },
  {
    "url": "assets/css/0.styles.b8186b0e.css",
    "revision": "1eacac65bbcd6a2f2aa30ec42dfd68da"
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
    "url": "assets/js/app.fd7d1dde.js",
    "revision": "97ca22ae19d74ef7cda4759b179cf485"
  },
  {
    "url": "index.html",
    "revision": "6b5409338538a202b701333b99683595"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "30390e882d62e0d380b848d1eedbb7da"
  },
  {
    "url": "rules/index.html",
    "revision": "511edae6819504f8813daafcbda86b55"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "320d550562c52b37b55d44824bf65097"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "aebd102a4b98e9e9b4856051a8588185"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "4ce0881850de6d3dcd7207adf58276b0"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "8256783c0a8be6eb6392bc2e068afbdb"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "3e42cd3d6eecddcfe9926507805c25a0"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "bc6cb7dc817fe1b43015928782dbd1df"
  },
  {
    "url": "rules/no-use.html",
    "revision": "cf1adf07b53910a44f1db46cd21cea35"
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
