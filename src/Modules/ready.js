this.ready = (function (_) {
    return function (fn) {
        if (document.readyState == "interactive" || document.readyState == "complete")
            fn();
        else
			document.addEventListener('DOMContentLoaded', fn, true);
    };
})(this);