var filter = this.filter = function (obj, obj_FnCondition) {
    var res = [];
    var condFn = (_.is.function(obj_FnCondition)) ? obj_FnCondition : _.rightCurry(_.is.closet)(obj_FnCondition);
    
    _.each(obj, function (item) {
        if (condFn(item))
            res.push(item);
    });
    return res;
};
