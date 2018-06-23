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
    "revision": "6b7dd8bf2cf44c18bf83bdf80a49b56c"
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
    "url": "assets/js/1.905c2d59.js",
    "revision": "3dd17ed2a4411102c5e688f0689c87ae"
  },
  {
    "url": "assets/js/10.35df16fb.js",
    "revision": "1a18e729876a81e8e82968f28fd49f2b"
  },
  {
    "url": "assets/js/11.49ced118.js",
    "revision": "4d34da18c26652cd8a5cd1c2e2fe8025"
  },
  {
    "url": "assets/js/12.0d219c89.js",
    "revision": "e96e1813dc0fbe8df21b4a01f300744c"
  },
  {
    "url": "assets/js/13.36cea28e.js",
    "revision": "4d77f3ee573da0af7db8f330237a96df"
  },
  {
    "url": "assets/js/15.83251832.js",
    "revision": "d498a06bd444edd8e814c35254de75d2"
  },
  {
    "url": "assets/js/16.54b15f11.js",
    "revision": "35d9893046a720d7332a316435e9b729"
  },
  {
    "url": "assets/js/2.7c067848.js",
    "revision": "90bd331e933fcb45d53d4413268598ac"
  },
  {
    "url": "assets/js/3.a135acea.js",
    "revision": "a47f8ff0bf0035cb9b7fd1db58c90c77"
  },
  {
    "url": "assets/js/4.70e9c9a2.js",
    "revision": "7bab2588af504a653e2ecbbce4afa908"
  },
  {
    "url": "assets/js/5.c7527bb8.js",
    "revision": "37344eb8c8229fbc7cad2f7f2d94729d"
  },
  {
    "url": "assets/js/6.ddfb5085.js",
    "revision": "83710e27ac46c451442e04aa1e2a40e9"
  },
  {
    "url": "assets/js/7.c1af1869.js",
    "revision": "d5a83072c333491939eb00544fddd73a"
  },
  {
    "url": "assets/js/8.ab1bb0cf.js",
    "revision": "7783bb5623d4779ad151412286afedae"
  },
  {
    "url": "assets/js/9.3701b839.js",
    "revision": "ae1050849d1fc0fa5dc837dcc3ccc44d"
  },
  {
    "url": "assets/js/app.c761f2df.js",
    "revision": "4546a7d54c425fa7fe11890a70d2215e"
  },
  {
    "url": "getting-started.html",
    "revision": "eac429b354b7246ac84910e81b8daa0f"
  },
  {
    "url": "index.html",
    "revision": "fbfb0399f6dcc5ed847500b82e49510f"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "b60845b5773746fce3eabb339c5c8caf"
  },
  {
    "url": "rules/index.html",
    "revision": "cf143b2f3aab9f9a4a9877f19292f95e"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "2e9d95ffeb088899a6e6c67422ebfe8b"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "ee02097eb58ac3fd0f0d9b26b6d2371e"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "934cf839852d6b80789bac4885511a1a"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "8b5dc1aaca2d9d1abc8616676cec90ee"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "257020a52e1e95f8b7b8af215f6c7cc9"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "4e0800a0325ab5c7b379272d274088fb"
  },
  {
    "url": "rules/no-use.html",
    "revision": "52c7508deab2c464be464feba1cba6d2"
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
