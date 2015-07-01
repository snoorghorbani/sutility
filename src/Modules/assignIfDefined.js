this.assignIfDefined = function (to, fnOrObj) {
    //TODO : handel fn
    return (fnOrObj !== undefined) ? that.safeAssign(to, fnOrObj) : to;
};