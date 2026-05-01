export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/service-worker.js");
      console.log("Service Worker registered");
    } catch (error) {
      console.error("SW registration failed", error);
    }
  }
};