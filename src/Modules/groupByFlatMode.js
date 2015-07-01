this.groupByFlatMode = function (/*obj, props*/) {
    var that = this;
    var args = _.argToArray(arguments);
    var obj = args.shift();
    var props = args.shift();
    var res = {};
    
    this.each(obj, function (item) {
        var flag = '';
        that.each(props, function (prop) {
            flag += '_' + item[prop];
        });
        
        res[flag] = res[flag] || [];
        res[flag].push(item);
    });
    
    return res;
};
