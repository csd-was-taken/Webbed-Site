function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('Mobi') !== -1);
}

window.onload = function() {
    if (isMobileDevice()) {
        alert("Just so you know, this site was designed for desktop. It probably isn't gonna look great on your phone, and some parts might just not work at all");
    }
}