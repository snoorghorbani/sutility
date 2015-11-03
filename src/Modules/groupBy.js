this.groupBy = function (obj, prop, fn) {
    fn = fn || _.i;
    var res = {};
    _.each(obj, function (item) {
        var flag = item[prop];
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};