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
    "url": "11/07/2021/typescript/index.html",
    "revision": "c21fc200211eca9ce57f75602246b133"
  },
  {
    "url": "12/10/2020/meu-post-inicial/index.html",
    "revision": "db6752016ceef4e6a54cb8f298fd771e"
  },
  {
    "url": "12/10/2020/next/index.html",
    "revision": "9945798db3572e2e1a3b2cbe3736ffe2"
  },
  {
    "url": "12/10/2020/nuxt/index.html",
    "revision": "22cded3ec9bce5a20682e4a846004392"
  },
  {
    "url": "14/05/2021/nginx/index.html",
    "revision": "03a443a495bc4aba96e69e2817efe2bb"
  },
  {
    "url": "404.html",
    "revision": "89c85ca704d732df960de4462aac59cc"
  },
  {
    "url": "about/about-me/index.html",
    "revision": "be4603fc0e1b6815e83290165a90bfab"
  },
  {
    "url": "about/index.html",
    "revision": "425bef20c46abeb1027c74b68860f476"
  },
  {
    "url": "about/my-projects/index.html",
    "revision": "463524b4c6712b77a0b12bd01f6abe77"
  },
  {
    "url": "assets/css/0.styles.7b998721.css",
    "revision": "914674bdcaf2c8ea98efa92e63dd2806"
  },
  {
    "url": "assets/etc-hosts-nginx.png",
    "revision": "2ab2071696f47ea7265ef4a310a610f7"
  },
  {
    "url": "assets/favicons/android-chrome-192x192.png",
    "revision": "f6c4ee973cf7b85ff0d81b1b4e6ebf3f"
  },
  {
    "url": "assets/favicons/android-chrome-512x512.png",
    "revision": "713a805ab1c8b5693d7ad38a69a25bbe"
  },
  {
    "url": "assets/favicons/apple-touch-icon.png",
    "revision": "9caca9965c3ea6c20aa0c51e44e46150"
  },
  {
    "url": "assets/favicons/favicon-16x16.png",
    "revision": "224aeb4d7e8b109e422a23afbf482494"
  },
  {
    "url": "assets/favicons/favicon-32x32.png",
    "revision": "28a46e1ca7b8d06ac608e3320c3373fb"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/etc-hosts-nginx.2ab20716.png",
    "revision": "2ab2071696f47ea7265ef4a310a610f7"
  },
  {
    "url": "assets/img/info-cep.dcb847d1.png",
    "revision": "dcb847d1268fae47886cfd65bc346f95"
  },
  {
    "url": "assets/img/nginx-configured-server-block.6ab76085.png",
    "revision": "6ab76085c0d1bf3814c279257abcd11f"
  },
  {
    "url": "assets/img/nginx-new-project-running.0315a219.png",
    "revision": "0315a2197a9ff77877b63f11fff862a4"
  },
  {
    "url": "assets/img/nginx-running-localhost.f3536e91.png",
    "revision": "f3536e91023a01e720daa9b7888c1dba"
  },
  {
    "url": "assets/img/nginx-running.67ff9d80.png",
    "revision": "67ff9d8082bb048264d3e561fa2588f6"
  },
  {
    "url": "assets/img/nlw-01-web.20f425a5.png",
    "revision": "20f425a575819727bef6fadf466cb575"
  },
  {
    "url": "assets/img/nlw-02-web.7962303b.png",
    "revision": "7962303b64b4989b5a7cd2dc03dd06ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sorveteria-screenshot.7b0eed0f.png",
    "revision": "7b0eed0f439d03cf29a021d572ba6d1b"
  },
  {
    "url": "assets/img/structure.b850e192.png",
    "revision": "b850e192d6e941c39a4738cdef207f8a"
  },
  {
    "url": "assets/info-cep.png",
    "revision": "dcb847d1268fae47886cfd65bc346f95"
  },
  {
    "url": "assets/js/10.b23558e4.js",
    "revision": "5776a1591c7d769374df6ada832ec280"
  },
  {
    "url": "assets/js/11.277114f9.js",
    "revision": "dba65a679ffa84407a8b84a4466d02a8"
  },
  {
    "url": "assets/js/12.97d36b78.js",
    "revision": "ed649219972d8a5c49ac55425c01da8c"
  },
  {
    "url": "assets/js/13.8ac15e1e.js",
    "revision": "b811a64615f09a119b2e82fd182fee2e"
  },
  {
    "url": "assets/js/14.93c0d9ff.js",
    "revision": "e3259bae5c13e17cd299db3a8985803b"
  },
  {
    "url": "assets/js/15.38d6a33c.js",
    "revision": "01b9972c2f391be482f0efcf68239fab"
  },
  {
    "url": "assets/js/16.c1289e63.js",
    "revision": "ce5e3898403519de6c8eb37371650f54"
  },
  {
    "url": "assets/js/17.cf7034f0.js",
    "revision": "5d270722bab83e5114f2b4acad13df28"
  },
  {
    "url": "assets/js/18.6ec2bea2.js",
    "revision": "65dbe9d6d4ea4ee5b504ea923cb78d22"
  },
  {
    "url": "assets/js/19.1ae85aee.js",
    "revision": "cec5faab739460614d8b8ca9210f1dcc"
  },
  {
    "url": "assets/js/20.12cc50d0.js",
    "revision": "3f00bd584233341c43d8676b1d36589d"
  },
  {
    "url": "assets/js/3.7e5a5686.js",
    "revision": "09edc6d8082dc94e55efa6923759f323"
  },
  {
    "url": "assets/js/4.8062ccce.js",
    "revision": "d7f747fe44f2a2bc1f494f808e90a52b"
  },
  {
    "url": "assets/js/5.f2d87fdb.js",
    "revision": "504a151ca9af4cfdde6041d2e5b7547a"
  },
  {
    "url": "assets/js/6.5706e582.js",
    "revision": "e04d7ca2e5bbcfdd63455c500e2ecd0b"
  },
  {
    "url": "assets/js/7.c6978385.js",
    "revision": "91b682c501be530d1bfba209abd3fa9d"
  },
  {
    "url": "assets/js/8.161aa75c.js",
    "revision": "2e30b9adc2a71255130a4c0dbe86618c"
  },
  {
    "url": "assets/js/9.4e2457df.js",
    "revision": "c5b8db2721db3960fbbc0acc6b3e5e65"
  },
  {
    "url": "assets/js/app.ac655f02.js",
    "revision": "4c23eb61e12097d206591ab66b202771"
  },
  {
    "url": "assets/js/vuejs-paginate.47afc27a.js",
    "revision": "dcf91751c1ac391710daf8e6d65ec6fc"
  },
  {
    "url": "assets/mybloglogo.png",
    "revision": "589155f9ee132f1e9620661fbd3ce961"
  },
  {
    "url": "assets/mybloglogo.svg",
    "revision": "36ab7d52a3fe25fe952bfe013b217369"
  },
  {
    "url": "assets/nginx-configured-server-block.png",
    "revision": "6ab76085c0d1bf3814c279257abcd11f"
  },
  {
    "url": "assets/nginx-new-project-running.png",
    "revision": "0315a2197a9ff77877b63f11fff862a4"
  },
  {
    "url": "assets/nginx-running-localhost.png",
    "revision": "f3536e91023a01e720daa9b7888c1dba"
  },
  {
    "url": "assets/nginx-running.png",
    "revision": "67ff9d8082bb048264d3e561fa2588f6"
  },
  {
    "url": "assets/nlw-01-web.png",
    "revision": "20f425a575819727bef6fadf466cb575"
  },
  {
    "url": "assets/nlw-02-web.png",
    "revision": "7962303b64b4989b5a7cd2dc03dd06ae"
  },
  {
    "url": "assets/sorveteria-screenshot.png",
    "revision": "7b0eed0f439d03cf29a021d572ba6d1b"
  },
  {
    "url": "assets/structure.png",
    "revision": "b850e192d6e941c39a4738cdef207f8a"
  },
  {
    "url": "index.html",
    "revision": "cc414fa8aec9dfa284fb5338fdaa9e1c"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d811949a0fabc4d2592157b3846c2ca5"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "de894b46ec35b02230ecf92b991159e9"
  },
  {
    "url": "tag/index.html",
    "revision": "b356663866f97aac5a57dee34616818e"
  },
  {
    "url": "tag/Javascript/index.html",
    "revision": "490c9d4439406653bdfd8fbb495f826b"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "7ed56d65afcf59f82c9e49b38aa2dec8"
  },
  {
    "url": "tag/NextJS/index.html",
    "revision": "bdcd1d5c2f379acc0c785cbe826a505c"
  },
  {
    "url": "tag/NGINX/index.html",
    "revision": "30b7dfa81785745804d5cd0dd94b3999"
  },
  {
    "url": "tag/Nuxt/index.html",
    "revision": "ab4434c34b41dbe75d17fa5749a6afc8"
  },
  {
    "url": "tag/React/index.html",
    "revision": "9dca1590f897884a0d988edf1ed3aecc"
  },
  {
    "url": "tag/Servidores/index.html",
    "revision": "305a6908fde9301dd6884bb6db308412"
  },
  {
    "url": "tag/Typescript/index.html",
    "revision": "64707c2ebd3f348496feb4a2c8fd877d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "31ea4585b8bc9926ee752bc49e112799"
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
