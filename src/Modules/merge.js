this.merge = function (toObj, fromObj/*, copyPrototype*/) {
    //var copyPrototype = (copyPrototype != undefined) ? copyPrototype : true;
    //TODO: refactor
    var temp = _.cloneObj(toObj)
    if (_.is.object(fromObj)) {
        _.each(fromObj, function (value, key) {
            temp[key] = fromObj[key];
        });
    } else if (_.is.array(fromObj)) {
        _.each(fromObj, function (value) {
            temp.push(value);
        });
    }
    return temp;
            //copyPrototype && this.each(fromObj, function (value, key) {
            //	if (this.isPrototypeProp(fromObj, key)) {
            //		temp[key] = fromObj[key];
            //	}
            //}, this)
};