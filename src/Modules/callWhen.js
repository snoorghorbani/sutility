this.callWhen = function (callback, nameOrFnCondition, infiniteCall, checkTime) {
    var conditionType = (_.is.function(nameOrFnCondition)) ? "fn" : "string";
    var intervalId = setInterval(function () {
        if (conditionType == "string" && !_.valueOf(nameOrFnCondition)) return;
        else if (conditionType == "fn" && !nameOrFnCondition()) return;
        
        !infiniteCall && clearInterval(intervalId);
        callback();
    }, checkTime || 20);
};