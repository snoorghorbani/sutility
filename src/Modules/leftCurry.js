this.leftCurry = function (fn, context) {
    context = context || that;
    return function (/*left args*/) {
        var leftArgs = that.argToArray(arguments);
        return function (/*right args*/) {
            var args = that.concat(leftArgs, that.argToArray(arguments));
            return fn.apply(context, args);
        };
    };
};