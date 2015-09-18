this.dashCase = function (str) {
    return str.replace(/([A-Z])|([\W|\_])/g, function (match) {
        return (/[\w]/.test(match)) ?
            (match === '_') ? '-' : '-' + match.toLowerCase() :
            '-';
    });
};