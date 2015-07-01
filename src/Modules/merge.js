this.merge = function (toObj, fromObj/*, copyPrototype*/) {
    //var copyPrototype = (copyPrototype != undefined) ? copyPrototype : true;
    //TODO: refactor
    if (_.is.object(fromObj)) {
        _.each(fromObj, function (value, key) {
            toObj[key] = fromObj[key];
        });
    } else if (_.is.array(fromObj)) {
        _.each(fromObj, function (value) {
            toObj.push(value);
        });
    }

            //copyPrototype && this.each(fromObj, function (value, key) {
            //	if (this.isPrototypeProp(fromObj, key)) {
            //		toObj[key] = fromObj[key];
            //	}
            //}, this)
};