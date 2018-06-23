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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d8bb83edfb06450081ac30c73e2b322e"
  },
  {
    "url": "assets/css/0.styles.d38a46de.css",
    "revision": "d2c28a49b501924ba763d9b4ae7aa19b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.949cb84c.js",
    "revision": "fe0a102fc3572b3df8f5b27c0291a049"
  },
  {
    "url": "assets/js/10.fdb4cb19.js",
    "revision": "91cd6c22d0b3d8ef435dcb04d1f4803b"
  },
  {
    "url": "assets/js/11.63d17498.js",
    "revision": "4e12e816e5c49cf892077efeaa8dff5b"
  },
  {
    "url": "assets/js/12.2d9c08f0.js",
    "revision": "29ef5f0954c41b5b603589e24a35f3a8"
  },
  {
    "url": "assets/js/13.f418ae81.js",
    "revision": "9b0e2d7f7eeedd0f052c2eea8d09876b"
  },
  {
    "url": "assets/js/15.6451bff7.js",
    "revision": "8fa0b4b01f5700c0c05aeccbe7b6b9d9"
  },
  {
    "url": "assets/js/2.dd3af76b.js",
    "revision": "2a91cdbbab4125df7c69e632d983cf43"
  },
  {
    "url": "assets/js/3.01a27590.js",
    "revision": "5a36f92c6a5c87f64c8270016a4dc9ee"
  },
  {
    "url": "assets/js/4.242dca68.js",
    "revision": "dca46979bd80ebb40f06671c2c771cb1"
  },
  {
    "url": "assets/js/5.9d0c0e87.js",
    "revision": "5279e95280589a9af396a3781a080eb3"
  },
  {
    "url": "assets/js/6.e3088150.js",
    "revision": "cf81597604a295c363ca849bdd1c2543"
  },
  {
    "url": "assets/js/7.9ad5bb70.js",
    "revision": "94384d939713fb1ccd546fa1bacb1d55"
  },
  {
    "url": "assets/js/8.10b063fc.js",
    "revision": "00bba7b41ff1e9eb05509576769d9e16"
  },
  {
    "url": "assets/js/9.ffca7f60.js",
    "revision": "7c22034d6381fb5315907fd412e4e77a"
  },
  {
    "url": "assets/js/app.0ae3c995.js",
    "revision": "aea13b9607d8030b5b22cabd9b279947"
  },
  {
    "url": "getting-started.html",
    "revision": "107011ac8197ecc422a886d6247bd778"
  },
  {
    "url": "index.html",
    "revision": "65c9172375c05690e28625729a1de3b1"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "cd74925071974072071f9bf68cfa3180"
  },
  {
    "url": "rules/index.html",
    "revision": "71fa3f13ce7fa1cddcea83e19913c852"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "6ac4118344307f41e3d8623032a10916"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "4ae9c9614abcec702b66ab229b33ee4e"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "19ae2d8af6018df24dc18753a948fcdb"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "fd0a2d661ee7f4f096c54e2ba2634ad2"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "938dd120f8f4c5b3dd4ed16f673c4531"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "af1fc62f9288702f002c9ecabff6c44d"
  },
  {
    "url": "rules/no-use.html",
    "revision": "3e11ec6267022bccdf5fa406c4957e39"
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
