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
    return fn;
})(this);
