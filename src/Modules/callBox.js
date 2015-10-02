this.callBox = (function (_) {
    return function (fn, boxTime, context) {
        var lastDate = null;
        return function () {
            if (!lastDate || Date.now() - lastDate > boxTime) {
                lastDate = Date.now();
                return fn.apply(context, arguments);
            }
        };
    };
})(this);