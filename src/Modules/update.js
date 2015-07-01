this.update = function (toObj, fromObj, copyPrototype) {
    if (_.is.object(fromObj)) {
        _.each(toObj, function (value, key) {
            if (fromObj[key] !== undefined) toObj[key] = fromObj[key];
        });
    }
    return toObj;
};