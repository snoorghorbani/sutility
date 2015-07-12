;this.report = (function (_) {
    var Fn = function (object, depts, path) {
        var depts = depts || 0;
        var path = path || "";
        var temp = {};
        var nodes = []
        
        depts++;
        if (_.is.object(object)) {
            temp = {};
            for (var key in object) {
                var isArray = _.is.array(object[key]),
                    isObject = _.is.object(object[key]),
                    keyPath = (path)? path + '.' + key:key;
                temp.name = key;
                temp.path = keyPath;
                temp.depts = depts;
                temp.type = 'value';
                temp.isLastNode = !(isArray || isObject);
                if (_.is.object(object[key]))
                    temp['type'] = 'object';
                if (_.is.array(object[key]))
                    temp['type'] = 'array';
                
                nodes.push(_.cloneObj(temp));
                
                if (isObject)
                    nodes = nodes.concat(that.report(object[key], depts, keyPath));
                if (isArray)
                    nodes = nodes.concat(that.report(object[key][0], depts, keyPath));
            }
        }
        return nodes;
    }
    
    Fn.skeleton = function (obj) {
        return _.array.compact(_.map(Fn(obj), function (i) {
            return (i.isLastNode)? i.path:false;
        }));
    };
    
    return Fn;
}(this));