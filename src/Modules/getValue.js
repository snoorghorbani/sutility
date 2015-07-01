this.getValue = function (obj, path) {
    if (DEBUG) {
        if (!obj) return undefined;
        if (!obj) return this.warn('UTILITY getValue function first parameter not defined');
    }
    
    if (obj[path] !== null) return obj[path];
    
    path = path.split('.');
    var i = 0;
    var res = obj[path[i++]];
    while (i < path.length) {
        res = res[path[i++]];
    }
    return (i == path.length) ? res : null;
};
