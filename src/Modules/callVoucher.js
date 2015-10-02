this.callVoucher = (function (_) {
    return function (fn , time, context) {
        setTimeout(function () {
            fn = null;
        }, time);
        return function () {
            return (fn)? fn.apply(context || {} , arguments):undefined;
        };
    };
})(this);