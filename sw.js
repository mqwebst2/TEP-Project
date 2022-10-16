import { precacheAndRoute } from 'workbox-precaching';
import {
  offlineFallback,
  staticResourceCache,
  imageCache,
} from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';

setDefaultHandler(new NetworkOnly());

precacheAndRoute(['./index.html'], self.__WB_MANIFEST);

staticResourceCache(['./js/*.js', './style.css']);

imageCache();

offlineFallback({
  pageFallback: './404.html',
});

// If Service Worker needs to be updated do so automatically
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
