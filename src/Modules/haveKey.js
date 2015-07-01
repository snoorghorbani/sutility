this.haveKey = function (obj, path) {
    if (DEBUG) {
        if (_.is.not.object(obj)) this.warn('is Not Object');
    }
    var tempObj = obj;
    var routes = path.split('.');
    for (var i = 0, route; route = routes[i]; i++) {
        if (!tempObj[route] && tempObj[route] !== 0) {
            _.warn(['dont have ', route, 'property'].join(' '));
            return false;
        }
        //if (i == len - 1)
        //    return (tempObj[route]) ? true : false;
        
        if (_.is.not.array(tempObj[route])) {
            tempObj = tempObj[route];
        }
    }
    return true;
};