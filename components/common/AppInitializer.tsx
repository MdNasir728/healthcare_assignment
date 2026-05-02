"use client";

import { useEffect } from "react";
import { requestFCMToken, onForegroundMessage } from "@/lib/fcm";

export default function AppInitializer() {
  useEffect(() => {
    const init = async () => {
      try {
        /* ✅STEP 1: Register SW FIRST */
        if ("serviceWorker" in navigator) {
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );

          console.log("✅ SW registered:", registration);

          /*  STEP 2: Wait until active */
          await navigator.serviceWorker.ready;

          /*  STEP 3: Get Token */
          await requestFCMToken();
        }

        /*  STEP 4: Foreground listener */
        onForegroundMessage((payload) => {
          console.log("🔥 Foreground Notification:", payload);

          alert(
            `${payload.notification?.title}\n${payload.notification?.body}`
          );
        });

      } catch (error) {
        console.error("❌ App Init Error:", error);
      }
    };

    init();
  }, []);

  return null;
}