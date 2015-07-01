this.extendFunc = function (fn, callBack) {
    var data = arguments[2];
    return function () {
        fn.call(this);
        callBack.call(this, data);
    };
};