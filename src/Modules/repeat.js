this.repeat = function (len, fn, context) {
    var res = [];
    for (var i = 0; i < len; i++) {
        res.push(fn.call(context));
    }
    return res;
};
