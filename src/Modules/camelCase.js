this.camelCase = function (str) {
    if (DEBUG) {
        if (!str) debugger;
    }
    return str.replace(/[\W|\_](.)/g, function (match, group) {
        return group && group.toUpperCase();
    });
};