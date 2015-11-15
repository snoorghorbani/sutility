//TOTHINK freezable or statable : 
//freeazable -> Defines an object that has a modifiable state and a read-only (frozen) state. 
//Classes that derive from Freezable provide detailed change notification, can be made immutable, and can clone themselves.
//https://msdn.microsoft.com/en-us/library/system.windows.freezable(v=vs.110).aspx
this.enableBackup = (function (_, undefined) {
    var o = {};
    o.__repository = {};
    
    o.backup = function (key) {
        key = _.assignIfNotDefined(key, 'last');
        
        this.__repository[key] = JSON.stringify(this);
        return this.__repository[key];
    };
    o.restore = function (key) {
        key = _.assignIfNotDefined(key, 'last');
        if (_.is.not.defined(this.__repository[key])) return;
        
        var json = JSON.parse(this.__repository[key]);
        return _.update(this, json);
    };
    
    return function (constructor_obj) {
        var constructor = _['if'].is.not['function'](constructor_obj, function () {
            return _.get.constructor(constructor_obj);
        });
        
        _.prototype.extend(constructor, o);
        
        return constructor;
    };
})(this);