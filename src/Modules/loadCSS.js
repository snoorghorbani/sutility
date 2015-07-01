this.loadCSS = (function (_) {
    var loadedFiles = {};
    return function (path, callback) {
        if (loadedFiles[path])
            return;
        var css = document.createElement('link')
        css.setAttribute("rel", "stylesheet")
        css.setAttribute("href", '/' + path);
        document.getElementsByTagName("head")[0].appendChild(css);
    }
})(this);
