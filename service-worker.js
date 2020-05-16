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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "56c9d942323dc61b1dd8733588615581"
  },
  {
    "url": "assets/css/0.styles.e74604ac.css",
    "revision": "e1225e0948b155719ee49b3ecbb1c3a3"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1ac7e9c3.js",
    "revision": "51fd394fbf05f6dc87f7ec17ef4aca5a"
  },
  {
    "url": "assets/js/11.3f994418.js",
    "revision": "034d1c8f7ca76bbb57f436666096194d"
  },
  {
    "url": "assets/js/12.6c6d28cc.js",
    "revision": "32af25275edde9145c5ef42ab6faf70f"
  },
  {
    "url": "assets/js/13.591f8d1d.js",
    "revision": "f831e96fdb30b8a8dabd560bdc39773f"
  },
  {
    "url": "assets/js/14.63cb6ddd.js",
    "revision": "df67f4c08fddfd221c26d2b706a2c932"
  },
  {
    "url": "assets/js/15.ece4b062.js",
    "revision": "8fb0e639f53df9eb24f26efe624bc4bf"
  },
  {
    "url": "assets/js/16.38b228b0.js",
    "revision": "75b3cbffb8d86e92eb4817cf7c5b1a94"
  },
  {
    "url": "assets/js/17.c22011a7.js",
    "revision": "57a8ecbdcf55a8b845acbf3d32f8c0ab"
  },
  {
    "url": "assets/js/18.cb3d6770.js",
    "revision": "5bdb09235b4fcb1d98908ec2e539c201"
  },
  {
    "url": "assets/js/19.d03cc743.js",
    "revision": "28f06855e46938d75516f3dc98d911c3"
  },
  {
    "url": "assets/js/2.986e07d3.js",
    "revision": "297a551c9e32a6cef75db4dc26c453ed"
  },
  {
    "url": "assets/js/20.a10a4123.js",
    "revision": "44fe7aa1f28052b53f6b6bf68c690008"
  },
  {
    "url": "assets/js/21.214ccc3b.js",
    "revision": "675629abb75e59c7d4e29e8348f3eb92"
  },
  {
    "url": "assets/js/22.2020e0a6.js",
    "revision": "25d537450483e575e95d018ae7e55ef6"
  },
  {
    "url": "assets/js/23.98f5ef40.js",
    "revision": "61b0aeb507faa96ab7832a49203277af"
  },
  {
    "url": "assets/js/24.9e7aeb75.js",
    "revision": "606163bcc3f3948daab63c4255c8e2ca"
  },
  {
    "url": "assets/js/25.0b55a9fe.js",
    "revision": "3124bacd210dce62867d0896b68b1ade"
  },
  {
    "url": "assets/js/26.28400171.js",
    "revision": "a1f848dccb1e9b041658d0bfbb166627"
  },
  {
    "url": "assets/js/27.07901b68.js",
    "revision": "7bc78d3a27202bc3f1ae6a4175dca44c"
  },
  {
    "url": "assets/js/28.f9a95e76.js",
    "revision": "8299062060dfd19cb03e425f28b2eb3f"
  },
  {
    "url": "assets/js/29.aa638098.js",
    "revision": "d7d10104c568aefcfd8d179f8211ac1c"
  },
  {
    "url": "assets/js/3.4f574a86.js",
    "revision": "5abfa4c751c512d215afacce48de659e"
  },
  {
    "url": "assets/js/31.4b020b00.js",
    "revision": "60a69bb5ee0bfa37e733735aecff4edd"
  },
  {
    "url": "assets/js/32.ab0fb32b.js",
    "revision": "98491f9ad06614a942c5f17e1776860d"
  },
  {
    "url": "assets/js/4.58571596.js",
    "revision": "de89f45672bd9880401c5338eea8d55a"
  },
  {
    "url": "assets/js/5.5ff01acc.js",
    "revision": "5c22395e4428d77af0f5c0158699a5be"
  },
  {
    "url": "assets/js/6.f62c195d.js",
    "revision": "7d8076957bee751bcd825a5c2203e308"
  },
  {
    "url": "assets/js/7.78052f0d.js",
    "revision": "5e38172002eca9d8e20e47e77a7fcc9b"
  },
  {
    "url": "assets/js/9.9131f08f.js",
    "revision": "b96b2dbb151b200a426980c6f555b193"
  },
  {
    "url": "assets/js/app.903d4b3e.js",
    "revision": "30b041f930ac195752919d1bc4ca1c45"
  },
  {
    "url": "index.html",
    "revision": "502f023b49fe47518e4f2664b923cc3f"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "219f19b8ce608c0e046b592496fecb3d"
  },
  {
    "url": "rules/index.html",
    "revision": "a1daa210a0fc173c2d6511358fa46c5b"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "a6eb291c03feb0ac1b2941d5305b5113"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "0e5d6c69090fd576c91205b1bc0b6696"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "fd32df1bbdcff9f49f9009b2f4c8e8f8"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "a3de782e698b24497631a0a6ca97dc15"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "21c327a84a2f64ccad260f88c118ef33"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "ddaab16ff81eb0675571864ae9667362"
  },
  {
    "url": "rules/no-use.html",
    "revision": "089ba205a79b6474d50c76606f8432f4"
  }
].concat(self.__precacheManifest || []);
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
