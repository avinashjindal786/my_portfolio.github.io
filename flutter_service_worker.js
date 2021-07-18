'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d1caeb015d593ac4cd96a2b29cdd528f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "63d573d8609cdd20c38c21d67eff6888",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "397192b5292e87d0f09bbe39aa2987a6",
".git/logs/refs/heads/master": "397192b5292e87d0f09bbe39aa2987a6",
".git/logs/refs/remotes/origin/master": "a1eb013310ccb099f425f08814e8148d",
".git/objects/00/2a6094cbde3e89acb1793c16ae5b0f48503cd6": "33c2cb012da62be54f43c5746cc8eeb7",
".git/objects/06/e3d6d4cc49833bb0d06e7e558b9e6c7da83384": "c3b836dd7ebd98e3c92ead475cea77d2",
".git/objects/0d/081aa695acd75f2592663efb60fe9115b44713": "71b75d096ccffa2746994d6ed7a0a6a4",
".git/objects/0f/4c5d25640357ff5f76e8624f7ecb8ec6cda007": "d72a1922480d3e77ada9623711f9c703",
".git/objects/10/3cd1b63dd473a5918440b8802fb396ac8113c3": "052df00f323e233aa1857e7e6d9cd182",
".git/objects/12/7b40cc5d7e61ed5c298c4bdb11c665c8171bc7": "7c5a9cb17c25f8aa79e7427b7e91ead0",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/25/791ec9d53994540bc7957e7bea4f4efcb2454d": "d64086237aee75b068d63343cbb0f11c",
".git/objects/2b/f88ca7d08be7c52462486a414e0c151a63056c": "7404c41eb08e5a32b3b882c7810b5e99",
".git/objects/2f/42cee4da7baae1b4fca77630cee750fa9a58a4": "3804af2b6ee042c811ccc8025f88aac6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/de24a3b160f2bc2d5f6361b74850f69c452bb0": "1b472171dc4aead2b01618443f602723",
".git/objects/35/7d66ac76bd7add80f5de9b85ef049b4d66ecfc": "7ac2713d763dd2fd3281d43625bf2c0b",
".git/objects/36/616cc601ae63231d62dc15d589730771238cc3": "040cfb6696e40304c0d4265d34ce3585",
".git/objects/47/2fadc37319438a40b557bb45db1fd4e106ecaa": "2a4a6c32535a1e48a2f5797726d17715",
".git/objects/48/5f98d9774bd3a48fac692573cc090faa742fcd": "f2967b3b3e4149a397fd3bd9e454d942",
".git/objects/4c/560a3c7c92deb544d6aa4057a07d47975adffb": "20682d917c4c3f0f1a7b7e63ddee2cdd",
".git/objects/4e/d6803d564530b99f56bf2006373f89fb7f4643": "d7a5b750c1dd94a3b8c64f60c3ef61da",
".git/objects/53/f2df7c7711eefd5dbf88d3b7f16cfa0cc3f00a": "81d8e03c9f26d63fd6b64346a2fc2b9b",
".git/objects/5a/e8233374ef1d971ea408f27c11dcc8a319d5d3": "e3410364ad3f935f76681f440344d0ed",
".git/objects/61/a277db127a5ef6f24e3eb40528fd99889a79be": "9c13910f8c1217c0d211f4f4c0e10f7a",
".git/objects/67/0e71e39b76bda5f87694212cef4146708fcc3e": "1409bc432df158cfcf4072a9c714d9d7",
".git/objects/68/662c05746fad807cce6b9a8ffd3e841ba12a3c": "943f0cef019b82771624d8f46a36e142",
".git/objects/6d/edba474e12a549c8a0f9fefa2859fef7ca4c9b": "4b975ebeda37a1ba8bfe0350c4fb6563",
".git/objects/76/ecf1b75f5a4fb7dda8d02c65e62a4355e2936b": "6194dc83f16237b7d51a86aba6b91048",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ae49e0a536b6246dd21c39c129dddf09f6d700": "1cf103674e744e573382a0e6f8f85d75",
".git/objects/7f/253762b80f1cfbda01eec6700ddb66caca6f30": "6a656cc41490f05f491df44854d66c49",
".git/objects/82/174994f24b882e58d1a2e575ef9b5bce3a2233": "bc372a85a853984c2535165bf4812541",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/88/93caaec86181427afe24d7d6d89b3a6ecbeabd": "803252a929180ead3826e4dd3024aa3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/b599bfd4a57a9f9ac3f9575e35c42623177729": "3bc58235e68bf4256751d6c0723b1546",
".git/objects/90/702b2c1ad97bc534f33fad996b7f07bbaf2758": "a6f0efdd9118fbec3216d70a99ba89e5",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f83a5d19bf2e94d394b7f4566d909c469a4bc9": "d5340a3defe8ce49ea6163c1532aaa5c",
".git/objects/a8/83050437e25c2ba7b553267fd14272f538ead7": "750da9f81c10fe2846634e6c2ba1f12f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/ef0f61aad3e024acf685604b09dce6534d2a4e": "7a9e09c3dc9b20c0b8030024461506d3",
".git/objects/b5/7a9906ae39b9c76532e5a6538203945e599e45": "025822b08b07458331ac8f7952183c60",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ed7247f0cd995dffc03e3f139c724fb8a1f763": "b4f10853940b2ceedd983dde4ef29398",
".git/objects/bf/650d6cb2a63f8822d166a3a72b1ae4487640b0": "87b4f7838f067c1bf46e788654cff87d",
".git/objects/c5/b79aa591f84770c1c5adc199d65220b7f3cb16": "932f39b4cab9c5d715cd5bf9e3e5416e",
".git/objects/c5/b80c12a27327b976e631101f521dcfc7b3bacd": "37ba3be4a0e8be757df739275fd1fd47",
".git/objects/c8/5abb4812f8dd9693e2ae2f27ea40a16b9031ae": "f42af76ddbddfc059ff216321ad73f6f",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/b5ca28138219adc62f4294b6f1811fe57a0252": "d9131bfc3d9d4e9a279960c79ca85042",
".git/objects/cd/73d7b127948e98be7115c22fc6f35653041fe8": "8a033ecc3c348611308bcb4b50d1253a",
".git/objects/d0/29f634208a27719a4d6539e818d07596ba30b5": "71120e1d31850c4bd5a66f0268bec905",
".git/objects/d1/d206740f78e54bceb9ec7a03eadb1a85828687": "23e233e8cbc717bd740adb5c201f1ebd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/de/3d203665f16fff01089c03be8e6b5899d42fb4": "1188a2eacf7cc31984e43b19f873931d",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e0/b5dd355cebdd0ccc4ac13bc07889f9f8b1797b": "a929ca9960a2a3af58c90e9b6cda5984",
".git/objects/e3/40cc47a406832300bd7e97852e4dcab49a94a1": "05258ee76c6d35e8592cc7eff35a17f4",
".git/objects/e4/d7d139e9e5fceae36ee1217230c1f941a4e139": "02599758257cd32c42c9824c3ffc35d5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c2d94e589d7eb2bec390439d56dbfb14ef1a7c": "e57790e0edc834e5529964c592f76e0b",
".git/objects/e8/0ff295c433233b2ec6bf7c22e8c2fee965ccec": "1f0598891ac8823c9592a5debee06280",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/e1ccc4289c7432208c38bbc4dab1d19db1efbf": "e2a617db85bec1f1e75d29ce3f837680",
".git/objects/f6/5876ced16cf1e1f8ed06f851a7665d8efbe61d": "f400b2fa0d18cb3dd1b7a57ee9a2c3ec",
".git/refs/heads/master": "ab0974ee8458f0608a1479d5e4f646b7",
".git/refs/remotes/origin/master": "ab0974ee8458f0608a1479d5e4f646b7",
"assets/AssetManifest.json": "90dfee88aeaa93ce1613eb66cad8e804",
"assets/assets/1.png": "0c87c7db38808bcc86ad392bfaae5dbf",
"assets/assets/10.jpeg": "583fd3faf0a40a968d3b80b36327b58a",
"assets/assets/11.gif": "cd8791dcff7180166e68f8b137278bcc",
"assets/assets/12-PM-1--unscreen%2520(1).gif": "a226d6264e121e2bae51260b526f773b",
"assets/assets/13.png": "c7373522ab8b934143e81e8ebee95d5b",
"assets/assets/15%2520(1).png": "b6e9e417b499db80cd1ea2a0d42b8c32",
"assets/assets/15%2520(2).png": "425d1fecf9faf7b21b5e745386d6d8bc",
"assets/assets/15%2520(3).png": "5038bc2398b966367e3ddf770fc6bd36",
"assets/assets/15%2520(4).png": "edcdbd86bd4a77a0aadd193542bf369f",
"assets/assets/15%2520(5).png": "6613d09521716f66591fb0bcbe41e139",
"assets/assets/15%2520(6).png": "98c3978575060c3f8059ff70bfedee11",
"assets/assets/15%2520(7).png": "c559645b0415e2f3951a75c5b96bd06e",
"assets/assets/15(8).png": "a3087c9c553bf8dd2723afea617b52fe",
"assets/assets/2.jpg": "cafd0bcdaa5d285d74b4c031ecca5141",
"assets/assets/3.png": "b3cc5ce579c1f5a3139ded55fb7d2726",
"assets/assets/4.png": "36a6830d09df60c8c1fe6992f41aa4d3",
"assets/assets/5.png": "b17c13faed1d90eb74a560de622110d8",
"assets/assets/560f55657336f-unscreen.gif": "06c76fa999c6caa863ab43c56784bef5",
"assets/assets/6.png": "891b80d11d73a94d4916e5871d78d934",
"assets/assets/7.png": "f5487e2939acdf8796c3e35ec5a7d7e6",
"assets/assets/8.jpeg": "4c32f1b90ff5d5c56d5a83d97a303fe8",
"assets/assets/8.png": "932441a1233fdcac43b8553d874692cc",
"assets/assets/9.jpeg": "d6bb51be7f62b98ab1f8e5d5a5e5982e",
"assets/assets/de4a9060d587b1e7d18d2048c1eec0-unscreen%2520(1).gif": "4b0b01347ecf237bec5e6c25beb0923c",
"assets/assets/download-removebg-preview.png": "a1a689632fbe9daf1318689035daeec0",
"assets/assets/FullColor_1280x1024_72dpi-removebg-preview.png": "2048ad75c16d01a48641435adae18c1c",
"assets/assets/FullColor_1280x1024_72dpi.png": "8023aaf6f4f4833fa7c86d1fee72c9ba",
"assets/assets/FullColor_1280x1024_72dpi__1_-removebg-preview%2520(1).png": "716a6cfba9dad5eb6a62addfb72abf5a",
"assets/assets/Screenshot%25202021-07-13%2520223001.png": "b6544b05156b362b08c89f5b89bb5df8",
"assets/assets/Screenshot.png": "686fd12b6c9cdb9b4a13f39141b6dbef",
"assets/assets/Screenshot2.png": "c2f1a5f3a220d1cd46ad286912131979",
"assets/assets/Screenshot3.png": "d932a74454ee3381d6cd2d2139882835",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/text-1625501730234.png": "81b35687fe469ca57138a1360c500a45",
"assets/FontManifest.json": "7bf2fe05d863ebf0ea67777f50f01067",
"assets/fonts/icomoon2.ttf": "a404fe5f1a519cde4852ae6e7303339d",
"assets/fonts/icomoon3.ttf": "0dcde5b1006103416b6b1c003cb3ef77",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "06aa0be3067811cceb6129e75d568348",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "a70d618da0d0f28ff70746ea1a08354a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81c0f012617af37413585f05fb58f46e",
"/": "81c0f012617af37413585f05fb58f46e",
"main.dart.js": "bb7574d9a38a7ebd7d295b474683984c",
"manifest.json": "9d57f8553865d9b6839d3dee7bcd4b06",
"version.json": "aaafa928a4f8616604eca12d830fe765"
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
