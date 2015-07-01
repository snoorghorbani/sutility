this.runInFunc = function (fn) {
    if (this.is.not.function(fn)) this.warn(fn + 'is not function');
    return function () {
        fn();
    };
};
