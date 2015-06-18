this.array = (function (_) {
    var fn = function () { };
    
    fn.compact = function (arr) {
        return _.filter(arr, _.i);
    };
    fn.union = function (arrays) {
        var temp = {};
                //todo : performance
                //return _.each(arrays, function (arr) { temp[i] = ''; });
    };
    fn.uniq = function (arr) {
    };
    fn.remove = function (arr, i) {
        return _.filter(arr, function (j) { return i !== j })
    };
    return fn;
})(this);