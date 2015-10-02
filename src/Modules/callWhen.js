this.callWhen = function (nameOrFnCondition, callback, infiniteCall, checkTime) {
    checkTime = checkTime || 20;
    var conditionType = (_.is.function(nameOrFnCondition)) ? "fn" : "string";
    var intervalId = setInterval(function () {
        if (conditionType == "string" && !_.valueOf(nameOrFnCondition)) return;
        else if (conditionType == "fn" && !nameOrFnCondition()) return;

        !infiniteCall && clearInterval(intervalId);
        callback();
    }, checkTime);
};