this.ready = (function () {
    var repos = [];
    return function (fn) {
        repos.push(fn);
        if (document.readyState == "interactive") {
            fn();
            return;
        }
        document.addEventListener('DOMContentLoaded', fn, true);
    };
})();
