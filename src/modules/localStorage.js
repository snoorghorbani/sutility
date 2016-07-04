this.localStorage = (function (_, undefined) {
    var fn = function () { };
    fn.save = function (key, obj, expiredTime) {
        localStorage.setItem(key, JSON.stringify({
            value: obj,
            expiredTime: expiredTime || 999999999,
            storeTime: Date.now()
        }));
    };
    fn.load = function (key) {
        var value = localStorage.getItem(key);

        value = JSON.parse(value);
        if (!value) return;

        value.isFresh = (value && (Date.now() - value.storeTime < value.expiredTime));

        if (!value.isFresh) localStorage.removeItem(key);

        return value;
    };

    return fn;
})(this);
