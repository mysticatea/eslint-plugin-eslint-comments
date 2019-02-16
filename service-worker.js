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
    "revision": "9173bb226ea28a301bc43b56684c0e5e"
  },
  {
    "url": "assets/css/0.styles.91d10347.css",
    "revision": "003bb5f2bb1a56e57b4de8a8ca12a1a8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.849cc2cb.js",
    "revision": "a9b704c871a0436ef24a6c1f96aac056"
  },
  {
    "url": "assets/js/11.870f45ef.js",
    "revision": "ce1286a977c9df78e382502d4c59f3a5"
  },
  {
    "url": "assets/js/12.1c8723b5.js",
    "revision": "f69686288af992d2213ef5d48c3f22c4"
  },
  {
    "url": "assets/js/13.8cd141da.js",
    "revision": "dc467cf94eb63b6977b72c1ef41efd6e"
  },
  {
    "url": "assets/js/14.2a1fba07.js",
    "revision": "f2d2a2f1ef6eaf33da7d9a530cc959bd"
  },
  {
    "url": "assets/js/15.6eab8467.js",
    "revision": "83abb25369fb19a0534985bdace18ec2"
  },
  {
    "url": "assets/js/16.6aabc159.js",
    "revision": "fda6f9416852da1a37198419c5664422"
  },
  {
    "url": "assets/js/17.acfc2be8.js",
    "revision": "73ce13e40ddc87e100b1709b18fc2a36"
  },
  {
    "url": "assets/js/18.115c7851.js",
    "revision": "1e880f72597bcd94ede8fadc3a709b45"
  },
  {
    "url": "assets/js/19.ba995485.js",
    "revision": "6222c2e83ef234e8f5e03de0ff94c24f"
  },
  {
    "url": "assets/js/2.e48cb2f7.js",
    "revision": "cabe444dd9ceeeacc6bc891e3ffa8c4d"
  },
  {
    "url": "assets/js/20.93a78386.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.e2826bff.js",
    "revision": "01d1c362513a7fa8d961d1b82ed63bd6"
  },
  {
    "url": "assets/js/4.f28888f8.js",
    "revision": "c27f49eb29352ce4dcc2e94364306849"
  },
  {
    "url": "assets/js/5.681d1883.js",
    "revision": "5c2f40226f1510cfd05150c118e199d5"
  },
  {
    "url": "assets/js/6.09028c70.js",
    "revision": "5bd9782a1344d15e7376c3660846f623"
  },
  {
    "url": "assets/js/7.f9dddee2.js",
    "revision": "4f33b55731ff6ade1dd80833e9d99de7"
  },
  {
    "url": "assets/js/8.175dd6fa.js",
    "revision": "bc7b2f76a3c45b4826f74602b0be5807"
  },
  {
    "url": "assets/js/app.73961a27.js",
    "revision": "5146a6eb743fd1ba3832f19562333ccc"
  },
  {
    "url": "index.html",
    "revision": "f1204cb78cd82369c9b2444e8edb7bf3"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "825e7d3a1e06096bb263c6a357a626f4"
  },
  {
    "url": "rules/index.html",
    "revision": "f08353c981016d47eb39d36ea7971539"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "b3afac30ff10702c472278f666302cdb"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "7c5713d876130ffdc0745bff76241550"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "abcff6f0ca5bdb6455bfc1fd58ed62e6"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "fd1219ee89593dd29032d38ba34666b4"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "f9dfcb9f5a779969ec97b73f8380bb9a"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "f42cdd68ba27fc72635bebe845bc7d2f"
  },
  {
    "url": "rules/no-use.html",
    "revision": "db92f9f5514ca250b6ad361c056a44c0"
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
