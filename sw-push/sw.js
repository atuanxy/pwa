self.addEventListener("push", function (event) {
  console.log("call self.push");
  event.waitUntil(
    self.self.registration.showNotification("有新的推送消息", {
      body: "有新的推送消息啦,点击查看。"
    })
  );    
  console.log("PushEvent data:", event.data);
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var url = "https://www.uc.com";
  event.waitUntil(
    clients.matchAll({
      type: "window"
    })
      .then(function () {
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

self.addEventListener('install', function(event) {
  console.log("call self.install");
  // console.log("call self.skipWaiting:start");
  // self.skipWaiting();
  // console.log("call self.skipWaiting:end");
});

self.addEventListener('activate', function(event) {
  console.log("call self.activate");
// console.log("call self.clients.claim:");
//  event.waitUntil(self.clients.claim());
});