self.addEventListener("install", () => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker Activated");
});

self.addEventListener("message", (event) => {
  const { title, body } = event.data;

  self.registration.showNotification(title, {
    body,
    icon: "/icons/icon-192.png",
  });
});