this.groupBy = function (obj, prop, fn) {
    fn = fn || this.return;
    var res = {};
    _.each(obj, function (item) {
        var flag = item.data[prop];
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};