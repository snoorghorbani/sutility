this.callWithDelay = (function (_) {
    return function (fn, delay, context) {
        var initializedDate = Date.now();
        return function () {
            if (Date.now() - initializedDate > delay)
                return fn.apply(context, arguments);
        };
    };
})(this);