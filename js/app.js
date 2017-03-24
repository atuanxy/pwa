if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './'})
        .then(function (registration) {
            console.log(registration);
			alert("serviceWorker registration success");
        })
        .catch(function (e) {
            console.error(e);
			alert("serviceWorker registration failed!");
        })
} else {
    console.log('Service Worker is not supported in this browser.');
	alert('Service Worker is not supported in this browser.');
}


