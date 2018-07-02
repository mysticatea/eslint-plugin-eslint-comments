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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e15c56a40bc7f7ecbb7215d22c236c58"
  },
  {
    "url": "assets/css/0.styles.0587639b.css",
    "revision": "fc3241cb5e404a253a3076112217783a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9b8f0df0.js",
    "revision": "c1716d021c3be33de18329d8ba57c5c6"
  },
  {
    "url": "assets/js/10.441f9f18.js",
    "revision": "91cd6c22d0b3d8ef435dcb04d1f4803b"
  },
  {
    "url": "assets/js/11.8d4885ec.js",
    "revision": "127b323618ff2d07d50fe52e0b3263bd"
  },
  {
    "url": "assets/js/12.72300c9c.js",
    "revision": "e5d00537d220098bf466f4a0d91b6056"
  },
  {
    "url": "assets/js/13.7a543eb5.js",
    "revision": "f2ff56f83236db42a03337b2bbfea871"
  },
  {
    "url": "assets/js/15.4dac3119.js",
    "revision": "b57c8149982bcf14eebfebcd2a35b8b3"
  },
  {
    "url": "assets/js/2.6a0c3952.js",
    "revision": "e07a19b1dda52f531a179681a5903bb1"
  },
  {
    "url": "assets/js/3.8bd516a9.js",
    "revision": "ab6a5e7c56f3d861a2f398d31701dcbb"
  },
  {
    "url": "assets/js/4.3898906f.js",
    "revision": "fe0978179abf7b48e4d20053cc44e3ac"
  },
  {
    "url": "assets/js/5.684fdc19.js",
    "revision": "5cd48d4df817044a771921c558ac277c"
  },
  {
    "url": "assets/js/6.62d7a39e.js",
    "revision": "cf81597604a295c363ca849bdd1c2543"
  },
  {
    "url": "assets/js/7.7ef58489.js",
    "revision": "d0510f0a02c591fb27438772632aefd6"
  },
  {
    "url": "assets/js/8.e6cd2bf5.js",
    "revision": "fdc261f6aaa70375f17f1430cb6b50bb"
  },
  {
    "url": "assets/js/9.66742c97.js",
    "revision": "3d3dea63deeb124cfc5ee6390a0f2887"
  },
  {
    "url": "assets/js/app.c32e3004.js",
    "revision": "03f36ddc4bd967ad8a66555b78faa656"
  },
  {
    "url": "getting-started.html",
    "revision": "f431b11a8b82fdcf728bcdd5f0fd6450"
  },
  {
    "url": "index.html",
    "revision": "4a9df7f97c6583689b2d34419bf214aa"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "04a43152d65d71741f72c12d4b7a60e6"
  },
  {
    "url": "rules/index.html",
    "revision": "eedb4e05a80815024ff4e608fe21e1da"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "545d0e6ca75932991a9ef7a152307d0f"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "3a59ada7f7526359a40e12527a0dad71"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "941697d5e04465ab63b026c7e89f400b"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "49e52348496e027db7b175c0c4c54863"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "92978196b09600e56e11ee59501fd85e"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "728f7211336de7d6c42b79853dbc6785"
  },
  {
    "url": "rules/no-use.html",
    "revision": "21e0f3db0e18831c3a7568df6e771f54"
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
