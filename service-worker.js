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
    "revision": "2e4ab9ecc7a58f975b94d865d0c25e59"
  },
  {
    "url": "assets/css/0.styles.7ff1fe7e.css",
    "revision": "50079b2e08f1efefa9bae9e12d0cf475"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b43be48f.js",
    "revision": "4a70b7b6a6de21244db23e0c22a64b48"
  },
  {
    "url": "assets/js/11.eca108cc.js",
    "revision": "81861ca94b4d9c8cf936487c82c9022a"
  },
  {
    "url": "assets/js/12.f5d257a4.js",
    "revision": "45f606b5e92aa0b5509d26466a442ee8"
  },
  {
    "url": "assets/js/13.34ba23ad.js",
    "revision": "642344295da7c69ff121dac1750731f1"
  },
  {
    "url": "assets/js/14.f370b7b8.js",
    "revision": "b223dc88fd3b995d3f98c47f6a951a2e"
  },
  {
    "url": "assets/js/15.43ac0a2e.js",
    "revision": "fdee8fa748c8a82f650d781d256574c8"
  },
  {
    "url": "assets/js/16.dc41c57c.js",
    "revision": "f6334d6f7255f4b5e242f83477980d2a"
  },
  {
    "url": "assets/js/17.8d7f0b55.js",
    "revision": "3069fe54540c0a2c22ff3ebb13246c57"
  },
  {
    "url": "assets/js/18.8086017e.js",
    "revision": "8fb0a90feb3bd873b7780c31838689ec"
  },
  {
    "url": "assets/js/19.08f16967.js",
    "revision": "9e1e33626578a97e8bbf8cbc010c6d74"
  },
  {
    "url": "assets/js/2.44e1bc72.js",
    "revision": "2379fd7ebe1c56fa51d50d56e2f95493"
  },
  {
    "url": "assets/js/20.9552a75f.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.fd8229a5.js",
    "revision": "56cea63f6e5361afff1e1e8aa5a0ca7a"
  },
  {
    "url": "assets/js/4.dc62198e.js",
    "revision": "39d933a7d3b53959bbbcc99d83045ca3"
  },
  {
    "url": "assets/js/5.bf76870c.js",
    "revision": "fbb62989ad15f293cdc927bf7e441f30"
  },
  {
    "url": "assets/js/6.41220192.js",
    "revision": "97dbde38ba5b69fb98e5157f4d1b9807"
  },
  {
    "url": "assets/js/7.53981d09.js",
    "revision": "ccca8d5e3a33cc7cd9c2cb142ab50135"
  },
  {
    "url": "assets/js/9.c086268c.js",
    "revision": "a0780f3721ced157fb0f4b27da744daf"
  },
  {
    "url": "assets/js/app.7cb081c7.js",
    "revision": "7b38e9be03a22cfa125c2d9c7691b8ce"
  },
  {
    "url": "index.html",
    "revision": "876e184ce58af2be637cbdcd8f129042"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "90b4d64452162fcc92e01e9c763bf89c"
  },
  {
    "url": "rules/index.html",
    "revision": "cb2aac850f2d5fcf8330a94cb294f908"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "7247d6c62b4d0e71041e0c39e995ccd2"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "34845b9332d21d2ddb01f2b78a51c6d1"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "f4f2eab3572a7b777424503a8300acdd"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "f7121ec29e6201d025dcdc0c25b3ff54"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "cec02a1c1f6ee456b6ceee8508a044b7"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "e6f2c9b361e21287fa0cfa46659dfaf7"
  },
  {
    "url": "rules/no-use.html",
    "revision": "cbd98e48f156376f3369ed19fdc02d2f"
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
