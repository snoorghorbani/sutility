this.rightCurry = function (fn) {
    return function (/*right args*/) {
        var rightArgs = that.argToArray(arguments);
        return function (/*left args*/) {
            var args = that.concat(that.argToArray(arguments), rightArgs);
            return fn.apply(that, args);
        };
    };
};