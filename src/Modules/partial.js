this.partial = function (obj, keys) {
    if (DEBUG) {
        if (_.is.not.object(obj)) debugger;
        if (_.is.not.array(keys)) debugger;
    }
    
    var res = {};
    for (var i = 0, key; key = keys[i]; i++) {
        var keyParts = key.split('.');
        var resultKey = keyParts.shift();
        var path = [keyParts.join('.')];
        if (DEBUG) {
            if (_.is.not.defined(obj[resultKey])) debugger;
        }
        if (_.is.not.contain(key, '\\.')) {
            res[key] = obj[key];
        } else if (_.is.contain(key, '\\.')) {
            res[resultKey] = _.assignIfNotDefined(res[resultKey] || {});
            res[resultKey] = _.merge(res[resultKey] , _.partial(obj[resultKey] , path));
        }
        //if ((_.is.not.object(obj[key]))) {
        //    res[key] = obj[key];
        //} else if (_.is.object(obj[key])) {
        //    res[key] = _.partial(obj[key] , _.keys(obj[key]))
        //}
    }
    return res;
};