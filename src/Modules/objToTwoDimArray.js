this.objToTwoDimArray = function (/*obj*/) {
    var args = _.argToArray(arguments);
    var obj = args[0];
    var res = [];
    _.each(obj, function (itemValue, itemKey) {
        var temp = [];
        temp[0] = [itemValue];
        temp[1] = [itemKey];
        res.push(temp);
    });
    return res;
};
