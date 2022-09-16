import { precacheAndRoute } from 'workbox-precaching';
import {
  offlineFallback,
  staticResourceCache,
  imageCache,
} from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST, './index.html');

setDefaultHandler(new NetworkOnly());

offlineFallback({
  pageFallback: './index.html',
});

// If Service Worker needs to be updated do so automatically
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
