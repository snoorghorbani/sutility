this.groupByTreeMode = function (/*obj, props*/) {
    var that = this;
    var args = _.argToArray(arguments);
    var obj = args.shift();
    var props = args.shift();
    var prop = props.shift();
    var fn = args.shift();
    var res = {};
    
    var grouped = that.groupBy(obj, prop, fn);
    
    _.each(grouped, function (group, i) {
        if (props.length > 0) {
            grouped[i] = that.groupByTreeMode.call(that, group, _.cloneArray(props), fn);
        }
    });
    obj = grouped;
    return obj;
};
