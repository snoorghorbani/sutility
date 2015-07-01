this.assign = (function (_) {
    var fn = function () { };
    
    fn.ifDefined = function (to, fnOrObj) {
        //TODO : handel fn
        return (fnOrObj !== undefined) ? that.safeAssign(to, fnOrObj) : to;
    };
    fn.ifNotDefined = function (varible, fnOrObj) {
        //TODO : handel fn
        return (varible === undefined) ? fnOrObj : varible;
    };
})(this);
