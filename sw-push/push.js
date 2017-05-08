
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js", {scope: './'}).catch(function (error) {
      console.log("Service Worker Error :^(", error);
    });

    navigator.serviceWorker.ready.then(function (reg) {
      reg.pushManager.getSubscription().then(function(subscription) {
        if (!subscription) {
          subscribe(reg);
           alert("subscribe");
        } else {
          console.log("remain endpoint:", subscription.endpoint);
          subscription.unsubscribe();
          console.log("update our server to remove subscription");
        }
      })
	  .catch(function(err) {
        console.log('Error during getSubscription()', err);
      });
    })
	.catch(function(err) {
        console.log('Error during serviceWorker.ready', err);
    });


  // navigator.serviceWorker.register("./sw.js", {scope: './'}).then(function(registration) {
  //   // registration worked
  //   console.log('Registration succeeded.');
  //   registration.unregister().then(function(boolean) {
  //     // if boolean = true, unregister is successful
  //     console.log('Registration succeeded flag:', boolean);
  //   }).catch(function(unerror) {
  //   // registration failed
  //   console.log('unRegistration failed with ' + unerror);
  // });
  // }).catch(function(error) {
  //   // registration failed
  //   console.log('Registration failed with ' + error);
  // });

    function subscribe(reg) {
        reg.pushManager.subscribe({userVisibleOnly: true}).then(function (pushSubscription) {
        sub = pushSubscription;
        alert("pushSubscription");
        console.log("Subscribed! Endpoint:", sub.endpoint);
      });
    }
  }
  