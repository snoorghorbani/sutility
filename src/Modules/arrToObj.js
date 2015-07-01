this.arrToObj = function (/*arr , key , removeKey*/) {
    var args = _.argToArray(arguments);
    var arr = args.shift();
    var key = args.shift();
    var removeKey = args.shift();
    
    var res = {};
    _.each(arr, function (item) {
        var temp = item[key];
        if (removeKey) delete item[key];
        
        res[temp] = item;
    });
    return res;
};
