this.callConstantly = (function (_) {
    return function (fn , count, context) {
        return function () {
            --count;
            var res;
            if (fn) {
                res = fn.apply(context || {} , arguments);
            }
            if (count == 0) fn = null;
            return res;
        };
    };
})(this);