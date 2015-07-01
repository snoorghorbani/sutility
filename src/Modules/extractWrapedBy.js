this.extractWrapedBy = function (str, wrapper) {
    var pattern = null;
    if (wrapper == '{}') {
        pattern = /\{(.*?)\}/g;
    } else if (wrapper == '()') {
        pattern = /\((.*?)\)/g;
    } else if (wrapper == '[]') {
        pattern = /\[(.*?)\]/g;
    } else {
        return;
    }
    var regex = new RegExp(pattern);
    var matched = str.match(regex);
    for (var i = 0; matched && i < matched.length; i++) {
        matched[i] = matched[i].substring(1, matched[i].length - 1);
    }
    return matched;
};