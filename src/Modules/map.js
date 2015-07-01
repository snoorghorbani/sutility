this.map = function (obj, iterator, context) {
    var results = [];
    
    _.each(obj, function (value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
};
