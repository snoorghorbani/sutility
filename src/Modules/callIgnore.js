this.callIgnore = (function (_) {
    return function (fn, counter, context , reset) {
        var _counter = counter;
        return function () {
            if (counter-- == 0) {
                counter = (reset) ? _counter : counter;
                return fn.apply(context, arguments);
            }
        };
    };
})(this);