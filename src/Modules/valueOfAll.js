this.valueOfAll = function (arrayOfObject, key) {
    var res = [];
    _.each(arrayOfObject, function (item) {
        item[key] && res.push(item[key]);
    });
    return res;
};
