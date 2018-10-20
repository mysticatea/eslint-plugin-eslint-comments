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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7de7da1fe8a1edf14f1c87d0c4e49c4b"
  },
  {
    "url": "assets/css/1.styles.45cc87d3.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/16.styles.4855dca6.css",
    "revision": "63e0883c36b0a4b82325eb866397f31f"
  },
  {
    "url": "assets/css/17.styles.d96b4db4.css",
    "revision": "bf53b56c8cdce50985f6089ef543418b"
  },
  {
    "url": "assets/css/2.styles.58232dbf.css",
    "revision": "fc6a891b74fc2369d3c64e9b91be05d1"
  },
  {
    "url": "assets/css/3.styles.5a9ed036.css",
    "revision": "e122033cf33eef0c28bb31c218cfdd42"
  },
  {
    "url": "assets/css/styles.fa74affa.css",
    "revision": "87c74cffa5fe0f689b3f4bd7b90f64bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.45cc87d3.js",
    "revision": "5ba2a364f4d52eadfac8dbbbfac3a169"
  },
  {
    "url": "assets/js/10.a0927b56.js",
    "revision": "72f5a88dae3531527d202b898695ee0f"
  },
  {
    "url": "assets/js/11.06d7f063.js",
    "revision": "0ef9c8670b43aa8eb2dac3fff3319772"
  },
  {
    "url": "assets/js/12.322b8453.js",
    "revision": "6388a78a0d44db092d5c73ccdeeed5ab"
  },
  {
    "url": "assets/js/13.fc53d2b7.js",
    "revision": "c882337ec45f26c86f706fc172fa133c"
  },
  {
    "url": "assets/js/14.318468a7.js",
    "revision": "3728d2568d0d5d3cfd2eb460b1562d8c"
  },
  {
    "url": "assets/js/15.b898c35f.js",
    "revision": "34730528aed1c0b7ac7fde8f44973494"
  },
  {
    "url": "assets/js/16.4855dca6.js",
    "revision": "51059f5a75e700221ebfbcbf223de0d6"
  },
  {
    "url": "assets/js/2.58232dbf.js",
    "revision": "a0484a34318362f7a7923d054def4c58"
  },
  {
    "url": "assets/js/3.5a9ed036.js",
    "revision": "bc89f0f2aa9d5d94cdd035468c20ce35"
  },
  {
    "url": "assets/js/4.beae7cfb.js",
    "revision": "b1ad03e0cb2485b1cea49f3fa59668ed"
  },
  {
    "url": "assets/js/5.11e4b87c.js",
    "revision": "88e567f3cc48fc5c6a834e0043398535"
  },
  {
    "url": "assets/js/6.965e93bf.js",
    "revision": "d9dd835a080ba6df4ee6f93c4ae19ccb"
  },
  {
    "url": "assets/js/7.bf7b57bf.js",
    "revision": "e0e62df2a1b8a1fe2be26eba6895c05f"
  },
  {
    "url": "assets/js/8.582da5b1.js",
    "revision": "ce00f4cc8ac96eaf47de0daafd97a215"
  },
  {
    "url": "assets/js/9.a87b5397.js",
    "revision": "23915f0e97e49e5d0ff6ccbc92d5d49e"
  },
  {
    "url": "assets/js/app.fa74affa.js",
    "revision": "cd9ea5895ad48e2616a9bb6a0438b857"
  },
  {
    "url": "getting-started.html",
    "revision": "ffbe0b265e7c48998d6f843c0b033d67"
  },
  {
    "url": "index.html",
    "revision": "ea2f5cd07257a179da425f8d81bd47e5"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "d48fe77b4621b06fcfb4c1822a65351c"
  },
  {
    "url": "rules/index.html",
    "revision": "17e1b09270ce855e690d901b5bab30d4"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "1eb4f2a2b8c60102fddffe590d7b9586"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "adf56ded4778f4fd6cd099f1d78b0454"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "b4cad528728de74b8f36058ab8f041bf"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "820ad561f4d06692551e47124b3e7561"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "ac7062a4a6f5676816c6dbea5008098b"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "ac961ecf8a2e7af6925c1710118b3572"
  },
  {
    "url": "rules/no-use.html",
    "revision": "138e70ee523ca2458fc4b77e1df85f25"
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
