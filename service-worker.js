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
    "revision": "74ad0edb6d8858e9db21e8409bde29e4"
  },
  {
    "url": "assets/css/0.styles.03707b29.css",
    "revision": "49ae2ef586e8786c851f128429382d0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6af82cc0.js",
    "revision": "9e00e73edfcdfb3d9eba7053955e7e7f"
  },
  {
    "url": "assets/js/11.bfc5ea29.js",
    "revision": "7a6d5bb333b3e267a49b2bc2969c065c"
  },
  {
    "url": "assets/js/12.c9292048.js",
    "revision": "1527217adf7c106cbedc41521e2865a6"
  },
  {
    "url": "assets/js/13.e95cb6d0.js",
    "revision": "7ed071c9b87bb9a8472e7609f15b0894"
  },
  {
    "url": "assets/js/14.6bf3e805.js",
    "revision": "700757501971562adcb2162d6592be98"
  },
  {
    "url": "assets/js/15.5599d5fa.js",
    "revision": "4af6ba09202fda29a7f0ebafc7cd3df0"
  },
  {
    "url": "assets/js/16.f34e3f9b.js",
    "revision": "0bb07b31f8d4e531ff03d7fb7a3c96f4"
  },
  {
    "url": "assets/js/17.140c44c5.js",
    "revision": "a698a8bcc75c6267e9795e52f88afdab"
  },
  {
    "url": "assets/js/18.d496a9c5.js",
    "revision": "8d24deb4b294138e8d1726131da8f172"
  },
  {
    "url": "assets/js/19.76cbeb15.js",
    "revision": "b351b3570d116706b30d7b651c38afc8"
  },
  {
    "url": "assets/js/2.dad7401c.js",
    "revision": "8c7e1a1cfea19bafae5c4f98e36fe4b4"
  },
  {
    "url": "assets/js/20.9552a75f.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.81648165.js",
    "revision": "2691254148e5b99cab5a46e3b221da07"
  },
  {
    "url": "assets/js/4.eb79aaa8.js",
    "revision": "1ffc76539a53c40a66b7a9fda3b5b7b3"
  },
  {
    "url": "assets/js/5.2f091f1a.js",
    "revision": "1a50aba6145365df03fe42810ce057fa"
  },
  {
    "url": "assets/js/6.21f81908.js",
    "revision": "a1b60996f97dc213b585a12e2944abb3"
  },
  {
    "url": "assets/js/7.fd916c8b.js",
    "revision": "758d9340cd50bfe42ee8dcbec70203a2"
  },
  {
    "url": "assets/js/8.0ad31012.js",
    "revision": "1e35abc3b65166e59e0997d18fe8339e"
  },
  {
    "url": "assets/js/app.40a32e7d.js",
    "revision": "bbd4152454801d1e86e916b5e3150cc8"
  },
  {
    "url": "index.html",
    "revision": "a5b6024e21a1e6d64096487e45a98dc5"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "430e9e1e39953b07bb961cf21147fc84"
  },
  {
    "url": "rules/index.html",
    "revision": "e4724aff586f89ca63cb3da2a04fbb3f"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "6983a61744a57bd80978c8e901bb1412"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "0d6bdf8663cf94442769a00a7e7ed60f"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "b262c53c711f9ab2ccfdb5977e74c820"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "1df88921742800ca18a4e72440e6ff7c"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "80fd1b98b72babf7b01ec4c1513b8ac1"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "484440f8703a10fb25becca0986f5a99"
  },
  {
    "url": "rules/no-use.html",
    "revision": "5442a7ef79f3475a51e17c4a6d30bc55"
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
