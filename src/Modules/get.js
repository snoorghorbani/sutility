this.get = (function () {
    var get = function () { };
    
    get.constructor = function (obj) {
        return obj.constructor;
    };
    
    return get;
})();