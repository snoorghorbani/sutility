this.rightCurry = (function (_) {
    return function (fn) {
        return function (/*right args*/) {
            var rightArgs = that.argToArray(arguments);
            return function (/*left args*/) {
                var args = _.array.concat(that.argToArray(arguments), rightArgs);
                return fn.apply(that, args);
            };
        };
    };
}(this))