this.if = (function (_) {
    var _if = {};
    _if.is = {};
    _if.is.not = {};
    for (var i in _.is) (function (i) {
        if (i != 'not') {
            _if.is[i] = function (obj, fn) {
                if (_.is[i](obj)) {
                    return fn();
                }
            };
            _if.is.not[i] = function (obj, fn) {
                if (_.is.not[i](obj)) {
                    return fn();
                }
            };
        }
    })(i);
    return _if;
})(this);