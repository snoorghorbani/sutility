this.callIgnore = (function (_) {
    return function (fn, counter, context) {
        return function () {
            if (--counter == 0)
                return fn.apply(context, arguments);
        };
    };
})(this);