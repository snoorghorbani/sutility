this.dictionary = (function (that, undefined) {
    var defaultValues = {};
    var Fn = function (_defaultValues) {
        //var initValue = that.extend({}, defaultValues);
        defaultValues = _defaultValues || {};
        _.extend(this, defaultValues);
    };
    Fn.prototype.default = function (obj) {
        that.extend(defaultValues, obj);
    };
    Fn.prototype.reset = function (k) {
        this[k] = defaultValues[k];
    };
    Fn.prototype.add = function (k, v) {
        this[k] = v;
    };
    Fn.prototype.remove = function (k) { };
    Fn.prototype.data = function () {
        return _.cloneObj(this, false);
    };
    
    return {
        'new': function (defaultValue) {
            return new Fn(defaultValue);
        },
        listen: function (fn) { },
    };
})(this);