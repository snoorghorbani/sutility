this.chain = function (fn, callback, context) {
    return function () {
        var args = that.argToArray(arguments);
        var fnResault = that.exec(fn, context || null, args);
        
        var promise = (fnResault) ? fnResault.promise || fnResault.$promise : null;
        
        if (promise) promise.then(function () {
            return that.exec(callback, context || null, [fnResault]);
        });
        else if (fnResault && fnResault.then) {
            fnResault.then(function () {
                var args = that.argToArray(arguments);
                that.exec(callback, context || null, args);
            });
            return fnResault;
        }
        else
            return that.exec(callback, context || null, [fnResault]);
    };
};
