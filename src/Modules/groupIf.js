this.groupIf = function (obj, cond, fn) {
    fn = fn || _.return;
    var res = {};
    _.each(obj, function (item) {
        var flag = cond(item);
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};
