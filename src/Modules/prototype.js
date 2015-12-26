this.prototype = (function (_, undefined) {
    var fn = function () { };

    fn.extend = function (constructor_obj, prototypeObj) {
        var constructor = _['if'].is.not['function'](constructor_obj, function () {
            return _.get.constructor(constructor_obj);
        }, function () { return constructor_obj });
        for (var i in prototypeObj)
            if (prototypeObj.hasOwnProperty(i))
                constructor.prototype[i] = prototypeObj[i];
        return fn;
    };
    fn.getConstruntorFunction = function (prototype) {
        var fn = function () { };
        fn.prototype = prototype;
        return fn;
    }

    return fn;
})(this);