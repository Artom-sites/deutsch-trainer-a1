/**
 * Simple Notification Utility
 * Uses Browser Notification API
 */

export const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
        console.log('This browser does not support desktop notification');
        return false;
    }

    if (Notification.permission === 'granted') {
        return true;
    }

    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    return false;
};

export const sendNotification = (title, body) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: '/icon-192.png',
            badge: '/icon-192.png',
            vibrate: [200, 100, 200]
        });
    }
};

export const scheduleDailyReminder = () => {
    // In a real PWA/Service Worker, we would use Push API.
    // Since we don't have a backend server for Push, we'll simulate
    // by checking on app load if it's been a while.

    // For now, let's just trigger a "Welcome Back" if enabled
    if (Notification.permission === 'granted') {
        // Only if not seen today
        const lastSeen = localStorage.getItem('lastNotificationDate');
        const today = new Date().toDateString();

        if (lastSeen !== today) {
            // setTimeout(() => sendNotification("Час вчити німецьку! 🇩🇪", "Твої слова сумують за тобою!"), 5000);
            // localStorage.setItem('lastNotificationDate', today);
        }
    }
};

export const checkPermission = () => {
    return 'Notification' in window && Notification.permission === 'granted';
};

export default { requestNotificationPermission, sendNotification, checkPermission };
