this.merge = function (toObj, fromObj/*, copyPrototype*/) {
    //var copyPrototype = (copyPrototype != undefined) ? copyPrototype : true;
    //TODO: refactor
    if (DEBUG) {
        if (_.is.not.object(fromObj)) {
            debuggerl
        }
    }
    
    var temp = _.cloneObj(toObj)
    _.each(fromObj, function (value, key) {
        temp[key] = fromObj[key];
    });
    
    return temp;
};