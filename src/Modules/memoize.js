this.memoize = function (fn) {
    fn.cache || (fn.cache = {});
    return function () {
        var args = Array.prototype.slice.call(arguments),
            hash = "",
            i = args.length,
            currentArg = null;
        while (i--) {
            currentArg = args[i];
            hash += (currentArg === Object(currentArg))
                ? JSON.stringify(currentArg)
                : currentArg;
        }
        return (hash in fn.cache)
            ? fn.cache[hash]
            : fn.cache[hash] = fn.apply(this, args);
    };
}