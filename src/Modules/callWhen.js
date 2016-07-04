this.callWhen = function (nameOrFnCondition, callback, infiniteCall, checkTime) {
    var conditionType = (_.is['function'](nameOrFnCondition)) ? "fn" : "string";
    var intervalId = setInterval(function () {
        if (conditionType == "string" && !_.getValue(nameOrFnCondition)) return;
        else if (conditionType == "fn" && !nameOrFnCondition()) return;
        
        !infiniteCall && clearInterval(intervalId);
        callback();
    }, checkTime || 20);
};