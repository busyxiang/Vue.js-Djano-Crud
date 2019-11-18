const applicationServerPublicKey = 'BBr7qh5vrJKGAOX-osqPp0xBvQzWwP02sQSbnZYmwngl1qOTCKJkJTcPR_kpAt59QTTaKfPB45Nt1oNAjO9bmGQ';

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function registerSw() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('sw.js')
            .then(function (reg) {
                initialize(reg);
            })
            .catch(function (err) {
                console.log('Service Worker registration failed: ', err);
            });
    }
}

function initialize(reg) {
    if (Notification.permission === 'denied')
        return;

    reg.pushManager.getSubscription()
        .then(function (subscription) {
            if (subscription === null) {
                var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
                var options = {
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey,
                }

                reg.pushManager.subscribe(options);
            }
        })
}

function displayNotification(title, notification_datetime) {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function (reg) {
            var options = {
                timestamp: notification_datetime
            };

            reg.showNotification(title, options);
        });
    }
}

registerSw();