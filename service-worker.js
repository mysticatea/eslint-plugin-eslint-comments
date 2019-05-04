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
    "revision": "9e750961d1eaf0d8b7eef73af5366c25"
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
    "url": "assets/js/10.73964226.js",
    "revision": "9ec6310ada752795420bb52d16f9aef9"
  },
  {
    "url": "assets/js/11.722fa53c.js",
    "revision": "eee20b3916b690bc6120f4bc335baebf"
  },
  {
    "url": "assets/js/12.16b3c138.js",
    "revision": "e028e649a2dd1ea9319f75897817415f"
  },
  {
    "url": "assets/js/13.7e642f7b.js",
    "revision": "de679696433d5e2fc05403649f01a5b8"
  },
  {
    "url": "assets/js/14.68ea7085.js",
    "revision": "eb922878bf145fce0cffa8966ae8dd34"
  },
  {
    "url": "assets/js/15.58ed32c4.js",
    "revision": "07a8f3896f0dfba2d7b1cc2131624591"
  },
  {
    "url": "assets/js/16.081fc46e.js",
    "revision": "997de6dab6f9abaab331dd6d4d82b2c4"
  },
  {
    "url": "assets/js/17.7af21d54.js",
    "revision": "75e8a7cdd2f218ab866fb3f1396d5df2"
  },
  {
    "url": "assets/js/18.7746334b.js",
    "revision": "c66d47e202a69729df8b9c6a5b4357b5"
  },
  {
    "url": "assets/js/19.bdac3bde.js",
    "revision": "1d64dbe46b0b86f9335c409d209f89ef"
  },
  {
    "url": "assets/js/2.70920d17.js",
    "revision": "472c4c7919f95bddcd50fd0928fe4f9c"
  },
  {
    "url": "assets/js/20.9552a75f.js",
    "revision": "9e447464df2b5f6f9a3aae5055b00f76"
  },
  {
    "url": "assets/js/3.f7c9e00e.js",
    "revision": "2c5c2a8a17471d2ae8a2d2388659a041"
  },
  {
    "url": "assets/js/4.7f6366e4.js",
    "revision": "791408aa9bbae0367900666c52acfb27"
  },
  {
    "url": "assets/js/5.c2e0e7bf.js",
    "revision": "d94842acc7c2db37fb7af66950e49b4b"
  },
  {
    "url": "assets/js/6.ca3257c0.js",
    "revision": "b06eaf2d8755a2fa6302886a98cdc0d8"
  },
  {
    "url": "assets/js/7.973347a9.js",
    "revision": "a231c685028bf86f9520465044bc6ad0"
  },
  {
    "url": "assets/js/9.3571b557.js",
    "revision": "1ff4add2c56d64d88169f8f0a9f7e6ce"
  },
  {
    "url": "assets/js/app.086164cb.js",
    "revision": "a7f4c1693b8d7b77de65c76a111bd4cd"
  },
  {
    "url": "index.html",
    "revision": "1c116d75d4b063cc4b130f237de17579"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "f082b1ee4ecc4ab5c42aa63866fdf808"
  },
  {
    "url": "rules/index.html",
    "revision": "6a30d6be039cdc8c818c3e371a25a426"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "b942a6e931a82f26dc6b29ab989cb428"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "42008aa97bec24de2097c894b8361ae3"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "b0ade8ffc5a888e69be6cb97e90ce82d"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "c8d13246602c1860a83affc42acf0285"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "99285624941d7deeeede7b8cc2cc578d"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "ffe3d99205d7375817df8e7e452b6f10"
  },
  {
    "url": "rules/no-use.html",
    "revision": "0c8d931cf9f07fe6a4d38022a54e7681"
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
