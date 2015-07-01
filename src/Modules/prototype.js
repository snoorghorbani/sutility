this.prototype = (function (_, undefined) {
    var prototype = function () { };
    
    prototype.extend = function (constructor_obj, prototypeObj) {
        var constructor = _.if.is.not.function(constructor_obj, function () {
            return _.get.constructor(constructor_obj);
        });
        for (var i in prototypeObj) {
            if (prototypeObj.hasOwnProperty(i)) {
                constructor_obj.prototype[i] = prototypeObj[i];
            }
        }
    };
    
    return prototype;
})(this);
