this.partial = function (obj, keys) {
    if (DEBUG) {
        if (_.is.not.object(obj)) debugger;
        if (_.is.not.defined(keys)) debugger;
    }
    
    var res = {};
    
    if (_.is.not.array(keys))
        keys = _.report.skeleton(keys);
    
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
    }
    return res;
};