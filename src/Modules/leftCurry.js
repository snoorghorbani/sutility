this.leftCurry = function (fn, context) {
    context = context || that;
    return function (/*left args*/) {
        var leftArgs = _.argToArray(arguments);
        return function (/*right args*/) {
            var args = _.array.concat(leftArgs, _.argToArray(arguments));
            return fn.apply(context, args);
        };
    };
};