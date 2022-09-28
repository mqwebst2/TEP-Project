// import { registerSW } from 'virtual:pwa-register';

// const updateSW = registerSW({
//   onNeedRefresh() {
//     const refresh = window.confirm(
//       'New content is available! Please refresh to load new page content.',
//     );

//     if (refresh === true) {
//       updateSW();
//     } else {
//       console.log('Page Refresh Needed');
//     }
//   },
//   onOfflineReady() {
//     const offline = window.confirm(
//       'Please confirm to make the content available offline.',
//     );

//     if (offline === true) {
//       updateSW();
//     } else {
//       console.log('Offline Ready');
//     }
//   },
//   onRegistered() {
//     console.log('Registered');
//   },
//   onRegisterError(e) {
//     console.log('Register Error');
//     console.error(e);
//   },
// });

window.addEventListener(
  'scroll',
  () => {
    const tlProgress = document.getElementById('tl-progress-bar__indicator');
    const tlProgressRect = tlProgress.getBoundingClientRect();

    const tlTransition = document.getElementById('tl-progress-bar__transition');
    const tlTransitionRect = tlTransition.getBoundingClientRect();

    if (tlProgressRect.bottom >= tlTransitionRect.top) {
      document.body.style.setProperty(
        '--scroll',
        tlProgressRect.bottom / tlTransitionRect.top - 0.92,
      );
    } else {
      document.body.style.setProperty('--scroll', 0);
    }
  },
  false,
);
