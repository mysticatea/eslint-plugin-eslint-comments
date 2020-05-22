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
    "revision": "9c79dc728ccb66df451b334a3645c013"
  },
  {
    "url": "assets/css/0.styles.ca448e18.css",
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
    "url": "assets/js/10.ff26c30b.js",
    "revision": "224010647bf91d4e1660b7a91ad23887"
  },
  {
    "url": "assets/js/11.7787d359.js",
    "revision": "87673344f6ae850446a866006d18b7ae"
  },
  {
    "url": "assets/js/12.5ba422a3.js",
    "revision": "11faf442d351a1df7c5fa73d422c03d0"
  },
  {
    "url": "assets/js/13.89460a9c.js",
    "revision": "b4d533a376dae8a4ff1b210053478e81"
  },
  {
    "url": "assets/js/14.8d46df97.js",
    "revision": "4008a37241bb98304952f720d3ddba81"
  },
  {
    "url": "assets/js/15.1c36b3a7.js",
    "revision": "1c19cfc9df84183870add65aba59b69b"
  },
  {
    "url": "assets/js/16.08c317ab.js",
    "revision": "36706035d7c804d2013fa47050c62846"
  },
  {
    "url": "assets/js/17.9b3b77df.js",
    "revision": "c7a0d680b072c310aaa97e4f59793414"
  },
  {
    "url": "assets/js/18.8404a79b.js",
    "revision": "41a4ee6ce5057dfc2d637f7809e26d64"
  },
  {
    "url": "assets/js/19.92fd4a39.js",
    "revision": "71eab752ec59b64d0032162defa5d766"
  },
  {
    "url": "assets/js/2.550c386f.js",
    "revision": "f5eb13e0344737a5936e7e44902fcfbc"
  },
  {
    "url": "assets/js/20.fd7a3a7d.js",
    "revision": "7ba2bf9264a6301f6bfc0a76a128f592"
  },
  {
    "url": "assets/js/21.d0cb9e96.js",
    "revision": "7b4476aa0c7a651376922ef659257813"
  },
  {
    "url": "assets/js/22.d08ebf30.js",
    "revision": "eeb9d3a93d63dd172f02dfca67bf5a81"
  },
  {
    "url": "assets/js/23.854a1b74.js",
    "revision": "3a0f9ede72f8dce96ef010cc3b07f9ae"
  },
  {
    "url": "assets/js/24.0a4c1990.js",
    "revision": "8ad04cf73a972bac9f475ece41c7578d"
  },
  {
    "url": "assets/js/25.a9c201e3.js",
    "revision": "023df00ac51b615c69c7db2fee98201a"
  },
  {
    "url": "assets/js/26.47f6bab8.js",
    "revision": "374927cadb5716d16effa714aad2b63f"
  },
  {
    "url": "assets/js/27.7d3818f1.js",
    "revision": "0e5d3dacc67180c12b0bc9089fe0e232"
  },
  {
    "url": "assets/js/28.1f07ce0a.js",
    "revision": "da1ba1b17ec444c02963506631170207"
  },
  {
    "url": "assets/js/29.fa954606.js",
    "revision": "164cd8e49fb5035e15e4054798591e20"
  },
  {
    "url": "assets/js/3.3b283130.js",
    "revision": "557c7e8efda5cef532c408456fb6a2da"
  },
  {
    "url": "assets/js/30.32817bc3.js",
    "revision": "27c76428f7250ba3834c9ced2e5f702e"
  },
  {
    "url": "assets/js/32.b8db2072.js",
    "revision": "9ec8ff44286e7d118b30bbde63d7ce7c"
  },
  {
    "url": "assets/js/33.5fa654d8.js",
    "revision": "f1ca5154cdf8dde42efcedb2b3a8b791"
  },
  {
    "url": "assets/js/4.5477e75b.js",
    "revision": "8b3b42b64736a0a8b891e93d3fb129ce"
  },
  {
    "url": "assets/js/5.d1296cf0.js",
    "revision": "2c0d24d1abeabe658c9c9a5e5a0798c9"
  },
  {
    "url": "assets/js/6.61062684.js",
    "revision": "f368c0deddc8825326d41c919314c922"
  },
  {
    "url": "assets/js/7.19bf297e.js",
    "revision": "2809885bb95995a9c7c54e25fd5311c6"
  },
  {
    "url": "assets/js/9.e71c10f3.js",
    "revision": "c87314e3e2e672a81fce114d684df6aa"
  },
  {
    "url": "assets/js/app.dc298f8e.js",
    "revision": "acbba5c8673b5a53f2ea28883f0e5b8d"
  },
  {
    "url": "index.html",
    "revision": "943cbacaa48feb268f0f19f3badb34ed"
  },
  {
    "url": "rules/disable-enable-pair.html",
    "revision": "8db6929c6638df8180ade90324c52d23"
  },
  {
    "url": "rules/index.html",
    "revision": "43cf75b6620ee7664bf76bebd6cce28d"
  },
  {
    "url": "rules/no-aggregating-enable.html",
    "revision": "9031725748a598ec910019ac160a52f5"
  },
  {
    "url": "rules/no-duplicate-disable.html",
    "revision": "97787b94d5adc3d2b2f4db71ae7d3077"
  },
  {
    "url": "rules/no-restricted-disable.html",
    "revision": "b18ec5e970fca7e06273103ff9d9c89c"
  },
  {
    "url": "rules/no-unlimited-disable.html",
    "revision": "90055b97969e0505998fa5083ffbcad4"
  },
  {
    "url": "rules/no-unused-disable.html",
    "revision": "06ab5f18f9b077c86b3a15994f4806a5"
  },
  {
    "url": "rules/no-unused-enable.html",
    "revision": "3e35302054216a6ca65a43109b8709d0"
  },
  {
    "url": "rules/no-use.html",
    "revision": "44f13cf1d1d1f4a6036bf0e5e299c3de"
  },
  {
    "url": "rules/require-description.html",
    "revision": "55021edc332164343a0dd3ba73e9f162"
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
