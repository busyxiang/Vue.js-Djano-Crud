self.addEventListener('push', function (e) {
    console.log(e.data.text());
    var json = e.data.json();

    var options = {
        data: {
            timestamp: json.notification_datetime,
        }
    };
    e.waitUntil(
        self.registration.showNotification(json.title, options)
    );
});