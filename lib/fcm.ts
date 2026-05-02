import { getToken, MessagePayload, onMessage } from "firebase/messaging";
import { getFirebaseMessaging } from "./firebase";

export const requestFCMToken = async () => {
  try {
    const messaging = await getFirebaseMessaging();
    if (!messaging) return null;

    const permission = Notification.permission;

    if (permission !== "granted") {
      console.warn("❌ Notification permission not granted");
      return null;
    }

    const registration = await navigator.serviceWorker.ready;

    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (!token) {
      console.warn("❌ No FCM token received");
      return null;
    }

    console.log("✅ FCM Token:", token);

    return token;
  } catch (error) {
    console.error("❌ FCM Error:", error);
    return null;
  }
};

/* =========================
   FOREGROUND LISTENER
========================= */
export const onForegroundMessage = async (
  callback: (payload: MessagePayload) => void
) => {
  const messaging = await getFirebaseMessaging();
  if (!messaging) return;

  onMessage(messaging, (payload) => {
    console.log("🔥 Foreground message:", payload);
    callback(payload);
  });
};