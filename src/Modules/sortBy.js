this.sortBy = function (obj, typeOrOperator, path) {
    if (_.is.function(typeOrOperator))
        return obj.sort(typeOrOperator);
    else {
        if (typeOrOperator == 'string')
            return obj.sort(function (a, b) {
                var textA = _.getValue(a, path).toUpperCase();
                var textB = _.getValue(b, path).toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        else if (typeOrOperator == 'number')
            return obj.sort(function (a, b) {
                return (_.getValue(a, path) > _.getValue(b, path)) ? 1 : -1;
            });
    }
};

//var that = this;
//var res = null;
//var isObject = this.is.object(obj);

//var _obj;
//if (this.is.array(obj)) {
//    _obj = this.cloneArray(obj);
//} else if (is.object(obj)) {
//    _obj = this.cloneObj(obj);

//    this.each(_obj, function (v, k) {
//        v['__key'] = k;
//    });

//    _obj = this.objToArr(obj);
//}

//if (this.is.function(typeOrOperator))
//    res = _obj.sort(typeOrOperator);
//else {
//    if (typeOrOperator == 'string')
//        res = _obj.sort(function (a, b) {
//            var textA = that.getValue(a, path).toUpperCase();
//            var textB = that.getValue(b, path).toUpperCase();
//            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//        });
//    else if (typeOrOperator == 'number')
//        res = _obj.sort(function (a, b) {
//            return (that.getValue(a, path) > that.getValue(b, path)) ? 1 : -1;
//        });
//}

//return (is.object) ? this.arrToObj(res, '__key', true) : res;
