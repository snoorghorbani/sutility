this.array = (function (_) {
    var fn = function () { };
    
    fn.compact = function (arr) {
        return _.filter(arr, _.i);
    };
    fn.union = function (arrays) {
        var temp = {};
        var res = [];
        //todo : performance
        _.each(arrays, function (arr) { temp[arr] = ''; });
        _.each(temp, function (value, key) { res.push(key) });
        return res;
    };
    fn.uniq = function (arr) {
    };
    var baseFlatten = function (array, isDeep, isStrict) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        
        while (++index < length) {
            var value = array[index];
            if (_.is.array(value) &&
                (isStrict || _.is.array(value) || _.is.arguments(value))) {
                if (isDeep) {
                    // Recursively flatten arrays (susceptible to call stack limits).
                    value = baseFlatten(value, isDeep, isStrict);
                }
                var valIndex = -1,
                    valLength = value.length;
                
                while (++valIndex < valLength) {
                    result[++resIndex] = value[valIndex];
                }
            } else if (!isStrict) {
                result[++resIndex] = value;
            }
        }
        return result;
    }
    fn.flattenDeep = function (array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, true) : [];
    }
    fn.remove = function (arr, i) {
        return _.filter(arr, function (j) { return i !== j })
    };
    
    fn.shift = function first(array, callback) {
        var n = 0,
            item;
        
        if (typeof callback === 'number') {
            n = callback;
        } else if (that.is['function'](callback)) {
            var index = 0;
            while (callback(array[index++])) {
                n++;
            }
        } else {
            n++;
        }
        
        item = array.slice(0, n);
        
        return (that.is.array(item) && item.length === 1 ? item[0] : item);
    };
    fn.reverse = function (ar) {
        if (DEBUG) {
            if (_.is.not.array(ar)) _.fail('is Not Array');
        }
        var res = [];
        for (var i = ar.length - 1, j = 0; i >= 0; i--, j++) {
            res[j] = ar[i];
        }
        return res;
            //return map(ar, function (item) {
            //    var idx = d;
            //})
    };
    fn.concat = function (fa, sa) {
        if (DEBUG) {
            if (_.is.not.array(fa)) _.fail('is Not Array');
            if (_.is.not.array(sa)) _.fail('is Not Array');
        }
        
        return fa.concat(sa);
    };
    fn.indexOf = function (arr, idxOrIterator, context) {
        var res;
        
        if (_.is['function'](idxOrIterator)) {
            _.each(arr, function (item, idx) {
                if (idxOrIterator.call(context, item))
                    res = idx;
            });

        } else {
            res = arr.indexOf(idxOrIterator);
        } return res;
    };
    return fn;
})(this);
