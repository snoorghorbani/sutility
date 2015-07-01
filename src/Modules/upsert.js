this.upsert = function (container, item, indicator, updateAll) {
    if (DEBUG) {
        if (debugMode && _.is.not.array(container)) debugger;
    }
    var newItem = true;
    var selectedItems = _.each(container, function (v, i) {
        if (indicator(v)) {
            newItem = false;
            that.safeAssign(container[i], item);
        }
    });
    if (newItem) {
        container.push(item);
    }
};