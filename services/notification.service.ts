export const sendNotification = (title: string, body: string) => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      title,
      body,
    });
  } else {
    console.warn("No active service worker");
  }
};