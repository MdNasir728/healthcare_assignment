"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/utils/serviceWorker";
import { requestNotificationPermission } from "@/utils/notification";

export default function AppInitializer() {
  useEffect(() => {
    registerServiceWorker();
    requestNotificationPermission();
  }, []);

  return null;
}