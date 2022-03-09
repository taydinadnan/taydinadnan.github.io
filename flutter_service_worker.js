'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "0059ffbe71a7b887c7e2990ac9b490bd",
"/": "0059ffbe71a7b887c7e2990ac9b490bd",
"main.dart.js": "3d4b059f286147843c58e5c765bc63d4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "0e3f0babe1ff3f9e90cd0cd3c51b13ba",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/3b/411ee20c599a32c67e0ebf67e95dcab2659820": "a0f6d8c06c8f527e0743ba14c31e1afc",
".git/objects/d1/c70c50c3c03c6df92517f223d471f15c4fd250": "e94ffb902c0939d44b5c67f2ce9ddb27",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/925505851ab54b38487e446132d179ab678878": "6f22a67830150e80d7fadc6fd9b7d22d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/3740395fdb43b6a09872f7b3c145b8ebc731a1": "dec974b50dd69bff7d759b7bddd582d4",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f62aaa149c5552e5da6461af2ba85e52",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ed/3d865a4b018e6b5770db47b08c2b93ea720691": "3bcaaaa438c2cc046ead8cf7e6f4424d",
".git/objects/c6/f113a502674f67bb20706e1065d2c84d6e50c6": "42c813d01cfbb42c099676910bc41e3e",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/1f/a5c8789f781b0cd3ba8cb6f2d60da099a73385": "fd2f811a60bb51337ae829ac6ef888ab",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/b6023bc574fd6ff99623eec90c0474ae3eb566": "15f2c5840292298ab9f67e423d4d65e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/3f/56b91e0724eb57c4a6c2c888be68e4b1de7e6c": "3b6208ab5b15773a64193c369ed09e8c",
".git/objects/06/2e852d4a61465db8b8cdce76ca5d7b90fb4b4e": "cd40f776843bba1f2ea155cb8224d81a",
".git/objects/6c/7a436f800e1e1a2f496787ab7c857e0b3e9ca1": "323756a1fa2a6ef3c389a7f5d1791361",
".git/objects/99/893260dad2cc57127ce344f9602732cf2e43a5": "afb4381a52d1cde250b97d698a0bf2e7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a0703efdd61cf14c410dbeabb6b7454e4144c0": "cf8a15c9d307be6061b41c3db8559b27",
".git/objects/b0/faf5b867831c0f1f9919b43168a264699bfa01": "8dc7369a8759e51ceffcbabaaed01da5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/fa/d450f424bd43a4ea0c26471357363432663715": "57ef0f1c0560a499826d19a9c74edf9a",
".git/objects/c5/3ff9b51201836c26b6044c96211b2f69b8791e": "6ca06fd07c299096dc2a8c37e824983b",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/2c796b3e1be02ea38c2794a45883104abdbc4c": "a6c7199e1a5e932c3d950657624885d1",
".git/objects/1e/1c85a04fdfa07ac1cdf3c00a99f5e5268c3357": "58d3b899df914b6d2089579db902184b",
".git/objects/84/eaa1d47ab9cefeee49aba7d2dcf4b051cf8a2e": "04970e29e006a9d810263cfddc2044fe",
".git/objects/7a/5a3e183341b18f4b513ff2ca46f43935f881f4": "6ea629b2c7bb2ece519cb298ad52b725",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "2ebf1e5711319e1451d099d1408b87e4",
".git/logs/refs/heads/main": "d6329c379cfa27fa6a014f750c2e40a5",
".git/logs/refs/remotes/origin/main": "721fbbf4b7cdac87d8408fe1303e837e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "5fd2b7e7e549971290c8be6270bd249a",
".git/refs/remotes/origin/main": "5fd2b7e7e549971290c8be6270bd249a",
".git/index": "c78f790c5b1dfa09dc8ef008b062ae53",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "26bc3270bb29de58db6b0b38acb6ef38",
"assets/NOTICES": "cbb3de15026dba25f1c99bc82c81dee9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/wfh_1.png": "950332b3cc804250050aad066c0324be",
"assets/assets/images/DSC02919.jpg": "320e823fca17fa4bfc92d845f87a1e41",
"assets/assets/images/instagram.png": "0b6b3c8d2c74fc2e0be8f5d940ec1e14",
"assets/assets/images/download-google-computer-icons-github-firebase-angularjs-firebase-logo-jpg-triangle-transparent-png-2723102.png": "4ffaf2bb1513a6266e6f29a8a93a0f90",
"assets/assets/images/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/dart-packages-dart-programming-language-logo-metropolis-building-crystal-architecture-transparent-png-2824279.png": "1def88a0c7b93be4b8dd932be561e5b7",
"assets/assets/images/PngItem_1280311.png": "d19bbdb4c119b7d984414179907a58d1",
"assets/assets/images/adnan%2520riders.jpg": "cc899ae0fa056aebf2a11d362a9b10ba",
"assets/assets/images/github-icon-white-github-icon-black-background-symbol-logo-trademark-steering-wheel-transparent-png-842663.png": "d19bbdb4c119b7d984414179907a58d1",
"assets/assets/images/Model-Release-Pro.webp": "bb1a1cab9565eb12c5157cdac9a06e04",
"assets/assets/images/twitter.png": "49c5dfc52d5de40ebe944a39ac98f327",
"assets/assets/images/adnan%2520admin%2520web%2520panel.jpg": "e459df6a0b04382dc62ab187ff3b1ef8",
"assets/assets/images/linkedin.png": "59d2da8a4cc1affd8315f9551aa32892",
"assets/assets/images/adnan%2520SELLERS.jpg": "2e3fad12968c9f39d7ba6151afe81ea5",
"assets/assets/images/cryptoapp1-min.png": "2e0ab37460ed3fe2681c68a929446389",
"assets/assets/images/flutter-logo_drzj7u.png": "70135fb5474e65fa678024389564b59e",
"assets/assets/images/adnan%2520APP.jpg": "78b016f3dfb726a9191e69f1d6db4c1a",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
