this.callWithDelay = (function (_ , undefined) {
    return function (fn, delay, context) {
        var checker, args;
        var lastCalledTime = Date.now();
        return function () {
            args = arguments;
            lastCalledTime = Date.now();
            checker = (checker) ? checker : setInterval(function () {
                if (Date.now() - lastCalledTime < delay) return;

                clearInterval(checker);
                checker = undefined;
                return fn.apply(context || _, args || []);
            }, delay);
        };
    };
})(this);