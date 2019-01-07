var env = (function () {
    var flags = {}, ua = navigator.userAgent, el = document.createElement('div'), video = document.createElement('video'), audio = document.createElement('audio'), root = document.documentElement, i;

    function flag(names) {
        names = names.split(' ');
        for (i = 0; i < names.length; i++)
            flags[names[i]] = true;
    }

    function classnames() {
        var names = [], name;
        for (name in flags) {
            if (flags.hasOwnProperty(name)) {
                names.push(name);
            }
        }
        root.className = "";
        root.className += (root.className ? ' ' : '') + names.join(' ');
    }

    if (ua.indexOf('WebKit/') > -1) {
        flag('webkit');
    }
    if (ua.indexOf(' Trident/') > -1) {
        flag('msie');
    }
    if (flags.msie) {
        if (parseInt(ua.substr(ua.indexOf('MSIE ') + 5, 2), 10) < 9) {
            flag('msielt9');
        }
        if (parseInt(ua.substr(ua.indexOf('MSIE ') + 5, 2), 10) < 10) {
            flag('msielt10');
        }
    }
    if (ua.indexOf("BB10") > -1) {
        flag("blackberry10")
    }
    if (ua.indexOf('Firefox') > -1) {
        flag('firefox');
    }
    if (ua.indexOf('(iPad') > -1) {
        flag('ios ipad');
    }
    if (ua.indexOf('(iPhone') > -1 || ua.indexOf('(iPod') > -1) {
        flag('ios iphone');
    }
    if (flags.ios && ua.indexOf('OS 7_') > -1) {
        flag('ios7');
    }
    if (flags.ios && ua.indexOf('OS 8_') > -1) {
        flag('ios8');
    }
    if (ua.indexOf('Chrome/') > -1 || ua.indexOf('CriOS/') > -1) {
        flag('chrome');
    }
    if (!flags.chrome && ua.indexOf('Safari/') > -1) {
        flag('safari');
    }
    if (ua.indexOf('Android ') > -1) {
        flag('android');
    }
    if (ua.indexOf('Windows Phone ') > -1) {
        flag('winphone');
    }
    if (!flags.ios && !flags.android && !flags.winphone && !flags.blackberry10) {
        flag('desktop no-touch');
    }
    el.setAttribute('ontouchstart', 'return;');
    if (typeof el.ontouchstart === 'function') {
        flag('touch');
    }
    if (navigator.msPointerEnabled && navigator.msMaxTouchPoints > 1) {
        flag('touch');
    }
    if (navigator.standalone) {
        flag('standalone');
    }
    if (navigator.devicePixelRatio && navigator.devicePixelRatio >= 2) {
        flag('retina');
    }
    if (document.documentElement.webkitRequestFullscreen || document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.msRequestFullscreen) {
        flag('fullscreen');
    }
    if (screen.width > 1280) {
        flag('hd');
    }
    if (screen.width < 768) {
        flag('narrow');
    }
    classnames();
    return flags;
})();