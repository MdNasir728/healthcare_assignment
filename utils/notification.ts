export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) return;

  const permission = await Notification.requestPermission();

  return permission === "granted";
};



export const sendNotification = async (title: string, body: string) => {
  if (Notification.permission !== "granted") return;

  const registration = await navigator.serviceWorker.ready;

  registration.active?.postMessage({
    type: "SHOW_NOTIFICATION",
    title,
    body,
  });
};