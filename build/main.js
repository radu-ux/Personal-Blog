if("serviceWorker" in navigator) {
    console.log("Service Worker: Available");
    window.addEventListener("load", e => {
        navigator.serviceWorker
            .register("sw.js")
            .then(res => console.log("Service Worker: Register"))
            .catch(err => console.log(`Service Worker: Error ${err}`))
    });
}