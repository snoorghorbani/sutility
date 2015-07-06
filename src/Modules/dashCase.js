this.dashCase = function (str) {
    return str.replace(/([A-Z])/g, function (match, group1) {
        return '-' + group1.toLowerCase();
    });
};
