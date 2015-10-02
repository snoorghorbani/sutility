this.rightCurry = (function (_) {
    return function (fn) {
        return function (/*right args*/) {
            var rightArgs = _.argToArray(arguments);
            return function (/*left args*/) {
                var args = _.array.concat(that.argToArray(arguments), rightArgs);
                return fn.apply(_, args);
            };
        };
    };
}(this))