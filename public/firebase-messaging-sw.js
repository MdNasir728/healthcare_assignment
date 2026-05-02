
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");


firebase.initializeApp({
  apiKey: 'AIzaSyA4i_9G2erQ0r7pDaRQrMuyvTKT01Q0VKs',
  authDomain: "healthcare-afb30.firebaseapp.com",
  projectId: "healthcare-afb30",
  storageBucket: "healthcare-afb30.firebasestorage.app",
  messagingSenderId: "638454064440",
  appId: "1:638454064440:web:83339758dde23a50240dcd",
});


const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background message:", payload);

  const title = payload.notification?.title || "New Notification";
  const options = {
    body: payload.notification?.body || "",
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    data: payload.data || {},
  };

  self.registration.showNotification(title, options);
});