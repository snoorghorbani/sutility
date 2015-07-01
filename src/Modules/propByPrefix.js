this.propByPrefix = function (obj, prefix, removePrefixFromKey) {
    removePrefixFromKey = _.assignIfNotDefined(removePrefixFromKey, false);
    var properties = {};
    for (var key in obj) {
        if (key.search(prefix) === 0) {
            //TODO : think about camelCase
            var propName = (removePrefixFromKey) ? _.camelCase(key.substr(prefix.length)) : key;
            properties[propName] = obj[key];
        }
    }
    return properties;
};