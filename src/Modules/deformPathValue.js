this.deformPathValue = function (obj, fn, path, createIfNotDefined) {
    if (!obj) return undefined;

    if (obj[path] != null) return obj[path] = fn(obj[path]);

    var path = path.split('.');
    var _path = path.shift();
    var res = obj[_path];

    if (createIfNotDefined && path.length == 0)
        return obj[_path] = fn(obj);

    while (_path = path.shift()) {
        if (res[_path] && _.is.array(res[_path])) {
            return _.map(res[_path], function (item) {
                return _.deformPathValue(item, fn, path.join('.'), createIfNotDefined);
            });
        }
        else if (res[_path])
            res[_path] = fn(res[_path]);
        else if (createIfNotDefined && path.length == 0)
            return res[_path] = fn(res);
    }
    debugger;
};