var filter = this.filter = function (obj, condFn) {
    var res = [];
    //if (is.object(obj)) var res = {};
    
    _.each(obj, function (item) {
        if (condFn(item))
            res.push && res.push(item);
    });
    
    return res;
};
