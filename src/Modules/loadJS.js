this.loadJS = (function (_) {
    var loadedFiles = {};
    return function (path, callback) {
        if (loadedFiles[path]) {
            if (loadedFiles[path].state) {
                setTimeout(function () {
                    callback(path, path);
                }, 1);
            } else {
                loadedFiles[path].callbacks.push(callback);
            }
        } else {
            loadedFiles[path] = {
                state: false,
                callbacks: []
            };
            loadedFiles[path].callbacks.push(callback);
            
            var script = document.createElement('script')
            script.setAttribute("type", "text/javascript")
            script.onload = function (e) {
                var n = e.explicitOriginalTarget || e.path[0];
                var filePath = n.getAttribute('src');
                filePath = filePath.substring(1, filePath.length);
                
                loadedFiles[path].state = true;
                for (var i = 0, fn; fn = loadedFiles[path].callbacks[i]; i++) {
                    fn(filePath, path);
                }
            };
            script.setAttribute("src", '/' + path);
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
})(this);
