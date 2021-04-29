'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1ded6bc4f850a1c8b1450bd87dc3581e",
"assets/assets/audi/a3.jpg": "88a93b07fba8e2a46f82fa7b65cc9ffc",
"assets/assets/audi/a4.jpg": "8762ec9c74b21e156b76e6455e1bafac",
"assets/assets/audi/a5.jpg": "4bba9315e3be13e20bb2e630bc5824d0",
"assets/assets/audi/audibanner.jpg": "5555c9e5f0da6b3832ad1e76fae00b32",
"assets/assets/audi.jpg": "f4a6d569a6477823c9efd63ea517652b",
"assets/assets/audibanner.jpg": "5674ebef928532c2b9636763d8bc6da4",
"assets/assets/audibanner2.jpg": "e006b238b21e162aeba16715c901ea15",
"assets/assets/bmw/birserisi.jpg": "d976838858d0ec042f4112a82f80494f",
"assets/assets/bmw/bmwbanner.jpg": "b5e41dc5ba73cec105969445996762b7",
"assets/assets/bmw/ikiserisi.jpg": "06989c13b5a5d33edbd24c567baaeeaa",
"assets/assets/bmw/ucserisi.jpg": "86845dd77a0f824d83e43840246346df",
"assets/assets/bmw.jpg": "8898de5133e5bbd4b8448dbc6a270969",
"assets/assets/citroen/c3.jpg": "98c16457af35715d32f20c6df28e2f44",
"assets/assets/citroen/c4.jpg": "29ca82a1e26bfb62a6248d3e335faac5",
"assets/assets/citroen/c5.jpg": "f83d29d5e157bc1f70537a2276d4c026",
"assets/assets/citroen/citroenbanner.jpg": "ff0a2f9e82c4c25a37adf5bb488cf1b8",
"assets/assets/citroen.jpg": "992fd999ab7f0fe3e4fc8c1e7161b0f5",
"assets/assets/dacia/daciabanner.jpg": "949155e8cb894aadc1453b8f4725269e",
"assets/assets/dacia/daciaduster.jpg": "36e9c861cce0a31d6e0a3225ba1ffa04",
"assets/assets/dacia/dacialogan.jpg": "c74d0c87df7cc29cf3084c5f5c7f78d0",
"assets/assets/dacia/daciasandero.jpg": "1247ea7d4f7f9e1c65089db6cf4908df",
"assets/assets/dacia.png": "bfd8e0a6bffdcb3278452cf0c86a5279",
"assets/assets/fiat/doblo.jpg": "10e2e92c10eafda13f398c64e606b59f",
"assets/assets/fiat/egea.jpg": "3b1e4e983311758d5d4459a61ddc878c",
"assets/assets/fiat/fiatbanner.jpg": "7211ae417e0a555e12d4bdb9fdcc134c",
"assets/assets/fiat/punto.jpg": "d27a7c7156a68ad8af7289255e8ec62e",
"assets/assets/fiat.png": "3fd7e2c729baa66d6663c16161613f85",
"assets/assets/fonts/NotoSans-Bold.ttf": "98f0cacc6bb63b64b98aac7cac082d27",
"assets/assets/fonts/PatrickHand-Regular.ttf": "eeb4dad66cf2ff3ee47b7ac7906913a0",
"assets/assets/ford/edge.jpg": "5e6e7becd1b835fb3c91bcc2da9d3ebd",
"assets/assets/ford/fiesta.jpg": "1c36affc936976e406c3ae8e4c506ae9",
"assets/assets/ford/focus.jpg": "f979e5ac05dda2790d08155f39a0e6f9",
"assets/assets/ford/fordbanner.jpg": "1fcb7abbf898c209b0684918e2beea22",
"assets/assets/ford.png": "51fdbb6774bae1ff60203766ecb8d76a",
"assets/assets/honda/civic.jpg": "fac08e24ffc102cfa0099824bb8f9bbd",
"assets/assets/honda/crv.jpg": "3defd0eb8fa2a31d75604496bcfa6207",
"assets/assets/honda/hondabanner.jpg": "d48cc5bd2b86c798298931182188531f",
"assets/assets/honda/jazz.jpg": "60a7ce01fd687c1b1740ce349f74d6ed",
"assets/assets/honda.png": "8226c74a67bf59ea1615e30fffe9c1c3",
"assets/assets/hyundai/accentblue.png": "dd7799c6931686e7182a6da45c771090",
"assets/assets/hyundai/hyundaibanner.jpg": "0a492af2a143a6a07f06570d083f6401",
"assets/assets/hyundai/i10.jpg": "f4a1a370e77920ec80bce3d5cad96627",
"assets/assets/hyundai/i20.jpg": "eb46550f88bfe27216865a16e50d7f74",
"assets/assets/hyundai.png": "278a1e0640cdb6c8bc9820b1d6ff0528",
"assets/assets/jeep/compass.jpg": "7af51522e7426408359a8ee0d867f3b2",
"assets/assets/jeep/jeepbanner.jpg": "8f9b4b70967f51e89ca75cad23fb20be",
"assets/assets/jeep/renegade.jpg": "1d62bad2954e826ec0bd2878b44e2a0e",
"assets/assets/jeep/wrangler.jpg": "6840035d273ae82b563a1e49933d0668",
"assets/assets/jeep.png": "7f4a156cbb54e5a574927863fe9caf2a",
"assets/assets/kia/kiabanner.jpg": "4facff682e62879fdeff4f923d9d71ef",
"assets/assets/kia/rio.jpg": "3e2ae28376c2c5a06b56c24b90919bf5",
"assets/assets/kia/soul.jpg": "5060ca7a87ca355fd8497266fc6fd4d3",
"assets/assets/kia/stonic.jpg": "8123ede9072c9bd0d5e40627ef75f7d8",
"assets/assets/kia.jpg": "9c91cb2c8d176398a36f7eeaca28f889",
"assets/assets/mercedes/aserisi.jpg": "1f4ec9a21af598cb394084e77e047eb5",
"assets/assets/mercedes/bserisi.jpg": "cfe1f3d8d03ae7d43206af6e7e69f01e",
"assets/assets/mercedes/cserisi.jpg": "674327ad0ada9ada2e5f6ef808db1a88",
"assets/assets/mercedes/mercedesbanner.jpg": "c14e474dd1a7ac48ecbc09b7519ff51d",
"assets/assets/mercedes.png": "9c5302e463193c66a6fa65e8c0e76f28",
"assets/assets/mini/cooper.jpg": "514f28fd88313ac99c66973366ce2f52",
"assets/assets/mini/cooper_s.jpg": "32c93cd23557dcdff529e480312d791e",
"assets/assets/mini/minibanner.jpg": "83166f1cdb261b85285a917fbcb7f3e4",
"assets/assets/mini/one.jpg": "e55b94d3b54bb32c6aa5263e9dab9d84",
"assets/assets/mini.png": "557de17ac6dbab76936b9253260c924c",
"assets/assets/mitsubishi/l200.jpg": "2717de32319ad4444ef5aa103b79d79d",
"assets/assets/mitsubishi/lancer.jpg": "f819c2b8e7b53471625a93f77b61c625",
"assets/assets/mitsubishi/mitsubishibanner.jpg": "ad29a2ed9be5b4c7fe24c1b383d9675c",
"assets/assets/mitsubishi/spacestar.jpg": "1f5cd74a4443b101a2b46a9a9982c782",
"assets/assets/mitsubishi.jpg": "e24b32e3fbbaaae6873b0355c8159f5b",
"assets/assets/nissan/micra.jpg": "0945a3eb63eaee1879e291c75235c210",
"assets/assets/nissan/navara.jpg": "7ff4c899e0033460c9a420d45f8fb0cc",
"assets/assets/nissan/nissanbanner.jpg": "53be0df5d4adbb25411e4997a9b7d269",
"assets/assets/nissan/qashqai.jpg": "9bef8a47321f013e86ab69f034e5b212",
"assets/assets/nissan.jpg": "f8d17baba349db2c958bd2d075a8d32e",
"assets/assets/opel/astra.jpg": "594bb7f87027472952dfb8ec02b2f30b",
"assets/assets/opel/corsa.jpg": "c5dc60c32022eca800f6141d99da0e4c",
"assets/assets/opel/insignia.jpg": "1f24f1cd3c1565a0c7bd9cfeef4c91ad",
"assets/assets/opel/opelbanner.jpg": "f4c2af75733f091f2dcf6c11520a781e",
"assets/assets/opel.png": "0a47d30c123b616c67a6e6e85e5a09dc",
"assets/assets/peugeot/%25C3%25BCcy%25C3%25BCzbir.jpg": "406dd91d72c574cadabaeb4385927ac2",
"assets/assets/peugeot/ikiy%25C3%25BCzsekiz.jpg": "77c07783b2d48603d10122ca1c0f2f2a",
"assets/assets/peugeot/partner.jpg": "bdc85df702ca83990eab9b7e22193dec",
"assets/assets/peugeot/peugeot.jpg": "6ee4a6cc5da50e1f5029195a4704bff6",
"assets/assets/peugeot.png": "5a087e6ba77f29af3f2ac4e51ff232f2",
"assets/assets/renault/clio.jpg": "f6e96246817f32bcb7c22a94724de71d",
"assets/assets/renault/megane.jpg": "c618bdf0a835e93ac04f42f0865b156f",
"assets/assets/renault/renaultbanner.jpg": "7e5dd16724d06d873cdfca02ab53eb32",
"assets/assets/renault/talisman.jpg": "0a11b382a83c10ce0b0a8238f7dbaf39",
"assets/assets/renault.png": "e5f8d0ebd65047e6e30e45299b708c35",
"assets/assets/seat/ibiza.jpg": "c88fa700106469453802e54960725553",
"assets/assets/seat/leon.jpg": "970b679b85f75b0aab165dbad58e9d29",
"assets/assets/seat/seatbanner.jpg": "729354d5f55c22320238dae2aaffbddf",
"assets/assets/seat/tarraco.jpg": "474d21dd2be9f0313cb69586fd6a606f",
"assets/assets/seat.png": "2becf0d72cb9fa31bd429edbd0f9f813",
"assets/assets/skoda/fabia.jpg": "8469c4b22865e6045fc9a2bd14af2b21",
"assets/assets/skoda/octavia.jpg": "b93c1788e22479759edcb2112cfb81f0",
"assets/assets/skoda/skodabanner.jpg": "9668c9ccb62ad4d6f548a974d37f7466",
"assets/assets/skoda/superb.jpg": "16d8e07b33efdad747eae8c8062d8932",
"assets/assets/skoda.png": "b6e48588e4854c59d8a495bd6dbfc75f",
"assets/assets/suzuki/baleno.jpg": "4739dce4fa34962bcfa922d52bf9ec26",
"assets/assets/suzuki/suzukibanner.jpg": "70c8fc3cc125b246714e6d4a3fa91d2e",
"assets/assets/suzuki/swift.jpg": "957343e6dca681f77b272caa4e2ddd3d",
"assets/assets/suzuki/vitara.jpg": "7e4e5d99c7bd3612b725320ac187dff5",
"assets/assets/suzuki.png": "9dba8371bc17d2b1a1e430abae69d963",
"assets/assets/toyota/corolla.jpg": "ccb030e9a537d388b9b8605bec559e73",
"assets/assets/toyota/hilux.jpg": "cf47bdd6d97a23a68e3cb4e662e79275",
"assets/assets/toyota/toyotabanner.jpg": "fffb04a7637cc3f60f25d54f29cf6a7b",
"assets/assets/toyota/yaris.jpg": "aa203d0ec780c62d07092417ae881173",
"assets/assets/toyota.png": "530b1f1c0580d219f1b262c6e10a4744",
"assets/assets/volkswagen/golf.jpg": "f4ed1bba230a431abada3621c56272e4",
"assets/assets/volkswagen/passat.jpg": "e303bbdf63e0bd7b6e5d843ee903848f",
"assets/assets/volkswagen/polo.jpg": "1ba09dac0d4b2e8483a480522f6739a8",
"assets/assets/volkswagen/volkswagenbanner.jpg": "caeb238466cac83ebc2814e1085fc87e",
"assets/assets/volkswagen.png": "5d6a763ddd68151e9c9282fb1c10032c",
"assets/assets/volkswagen2.png": "632fa87504b2f895f4f526d1131c5cfe",
"assets/assets/volvo/sdoksan.jpg": "8196ac08f6a49ebb37204ac2ff6a553e",
"assets/assets/volvo/volvobanner.jpg": "11ee3a2702d02d2b0b3fcfe23bb848fc",
"assets/assets/volvo/xcaltmis.jpg": "351b51d52738d909c96dbd46bf78e7a7",
"assets/assets/volvo/xckirk.jpg": "6ec6d19e2df6f751ce8f7ab72c2dcf21",
"assets/assets/volvo.png": "e4dd1cca4596e0a618ad99a10c02beec",
"assets/FontManifest.json": "044dd8ab945fb37ac070660295f4c171",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b0c80fc02871acfded556eb5d7fdce43",
"/": "b0c80fc02871acfded556eb5d7fdce43",
"main.dart.js": "c8136512dd8482e29c9981f655fce9e2",
"manifest.json": "7929e8e058ead5b2a6ea15b3290a07fa",
"version.json": "ec09ee5bf99561fd4930bdcd0cb80600"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
