;
;
this.math = (function () {
    var math = {};

    math.mod = function (a, b) {
        return a - (b * Math.floor(a / b));
    }

    return math;
})()
;
