this.complement = function (fn) {
    return function () {
        return !fn.apply(null, this.argToArray(arguments));
    };
};
