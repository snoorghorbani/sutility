this.constValue = function (d) {
    var v = d;
    return function self() { return v; };
};
