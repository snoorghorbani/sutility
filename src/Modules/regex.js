this.regex = (function (_) {
    var type = {
        number: /\d+/g
    };
    var fn = _.fn;
    
    fn.match = function (str) {
        return str.match(type.number);
    };
    fn.matchFirst = function (str) {
        return str.match(type.number)[0];
    };
    fn.type = type;
    return fn;
})(this);
