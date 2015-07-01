this.camelCase = function (str) {
    if (DEBUG) {
        if (!str) debugger;
    }
    return str.replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};
