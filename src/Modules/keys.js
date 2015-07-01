this.keys = function (/*obj*/) {
    var args = _.argToArray(arguments);
    var obj = args[0];
    var res = [];
    _.each(obj, function (value, key) {
        res.push(key);
    });
    return res;
};