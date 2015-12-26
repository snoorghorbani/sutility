this.ready = (function (_) {
    return function (fn) {
        if (document.detachEvent) {
            if (document.readyState == "complete")
                fn();
            else
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        fn();
                        document.detachEvent("onreadystatechange", arguments.callee);
                    }
                });
        } else {
            if (document.readyState == "interactive" || document.readyState == "complete")
                fn();
            else
                document.addEventListener('DOMContentLoaded', fn, true);
        }
    };
})(this);