this.categorize = function (obj, key) {
    var res = {};
    _.each(obj, function (item) {
        var temp = item[key].toString();
        res[temp] = res[temp] || [];
        res[temp].push(item);
    });
    return res;
};
