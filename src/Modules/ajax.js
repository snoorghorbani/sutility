this.ajax = function (options, callback) {
    var xhttp = this.getXHR();
    options.url = options.url || location.href;
    options.data = options.data || null;
    callback = callback || _.fn();
    
    options.type = options.type || 'json';
    var url = options.url;
    if (options.type == 'jsonp') {
        window.jsonCallback = callback;
        var $url = url.replace('callback=?', 'callback=jsonCallback');
        var script = document.createElement('script');
        script.src = $url;
        document.body.appendChild(script);
    }
    xhttp.open('GET', options.url, true);
    xhttp.send(options.data);
    xhttp.onreadystatechange = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            callback(xhttp.responseText);
        }
    };
};