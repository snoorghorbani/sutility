this.filter = function (arr, obj_FnCondition) {
    if (DEBUG) {
        if (_.is.not.object(obj_FnCondition) && _.is.not['function'](obj_FnCondition)) debugger;
    }
    
    var res = [];
    var condFn = (_.is['function'](obj_FnCondition)) ? obj_FnCondition : _.rightCurry(_.is.closet)(obj_FnCondition);
    
    _.each(arr, function (item) {
        if (condFn(item))
            res.push(item);
    });
    return res;
};