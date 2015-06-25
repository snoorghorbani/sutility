this.callVoucher = (function (_) {
    return function (fn , millisecond, context) {
        setTimeout(function () {
            fn = null;
        }, millisecond);
        return function () {
            if (fn)
                return fn.apply(context || {} , arguments);
        };
    };
})(this);