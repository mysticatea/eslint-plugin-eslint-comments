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
    "revision": "f6a11985489571b1f938d15cfe4cfedd"
  },
  {
    "url": "assets/css/0.styles.e3cd73a2.css",
    "revision": "0fd799e4dde3c513112ba84d0a39dfbb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0909329.js",
    "revision": "6836e6fc207d8c05828a881dbd5c126e"
  },
  {
    "url": "assets/js/11.fa76c67f.js",
    "revision": "7a6d5bb333b3e267a49b2bc2969c065c"
  },
  {
    "url": "assets/js/12.ff4becf3.js",
    "revision": "1527217adf7c106cbedc41521e2865a6"
  },
  {
    "url": "assets/js/13.3c97ab99.js",
    "revision": "7ed071c9b87bb9a8472e7609f15b0894"
  },
  {
    "url": "assets/js/14.8263aab3.js",
    "revision": "700757501971562adcb2162d6592be98"
  },
  {
    "url": "assets/js/15.f088811f.js",
    "revision": "d018115803b8592c9580d90cd0f46415"
  },
  {
    "url": "assets/js/16.10c23b79.js",
    "revision": "0bb07b31f8d4e531ff03d7fb7a3c96f4"
  },
  {
    "url": "assets/js/17.465d8d9b.js",
    "revision": "a698a8bcc75c6267e9795e52f88afdab"
  },
  {
    "url": "assets/js/18.b3aaa3c5.js",
    "revision": "8d24deb4b294138e8d1726131da8f172"
  },
  {
    "url": "assets/js/19.d177e519.js",
    "revision": "b351b3570d116706b30d7b651c38afc8"
  },
  {
    "url": "assets/js/2.60703dc9.js",
    "revision": "c22741f748e3323c539b060447dd8ae4"
  },
  {
    "url": "assets/js/20.93a78386.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.b9b95728.js",
    "revision": "c1734d0ff1ed808e67640ce276f3d81b"
  },
  {
    "url": "assets/js/4.f5d348d5.js",
    "revision": "1ffc76539a53c40a66b7a9fda3b5b7b3"
  },
  {
    "url": "assets/js/5.dfe73b3f.js",
    "revision": "602d83d34f9249990846ab2d1e63bc20"
  },
  {
    "url": "assets/js/6.9de455c5.js",
    "revision": "ddc76df738d43e692cd061434dc18f99"
  },
  {
    "url": "assets/js/7.2ff064a2.js",
    "revision": "758d9340cd50bfe42ee8dcbec70203a2"
  },
  {
    "url": "assets/js/8.8b56c068.js",
    "revision": "1e35abc3b65166e59e0997d18fe8339e"
  },
  {
    "url": "assets/js/app.5999dcac.js",
    "revision": "cbf5e7bfc9fdb16383a9e6cfdc1dbf87"
  },
  {
    "url": "index.html",
    "revision": "d5ab292c6cc0a7b7c2fa5599fbef3a57"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "965cd35e10c4f6c35365ed3451f75160"
  },
  {
    "url": "rules/index.html",
    "revision": "20729fd1be3087f1479e66fc89ced2db"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "9556ac78320359093c1485f35e859fc8"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "315eca675e6334d6e69cbcbbdf5be381"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "4368f81b1d9b9944eb9e44fa62dde3a1"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "6c7f4912dbd100eedf16ada7fb5f55fd"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "d61d7291e26f5c6c6eb18ff6cb2cc40d"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "62ccfab0a00f27107d3001f34980a0cc"
  },
  {
    "url": "rules/no-use.html",
    "revision": "4f31be38674dd2977ede637d6033bf6f"
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
