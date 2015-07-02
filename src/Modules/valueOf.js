﻿this.valueOf = function (objOrArr, pathOrIndex) {
    var tempobjOrArr;
    
    if (_.is.array(objOrArr)) {
        return objOrArr[pathOrIndex];
    } else {
        tempobjOrArr = objOrArr;
        var routes = pathOrIndex.split('.');
        for (var i = 0, route; route = routes[i]; i++) {
            if (!tempobjOrArr[route]) {
                _.warn(['dont have ', route, 'property'].join(' '));
                return null;
            }
            if (_.is.array(tempobjOrArr[route])) {
                var res = {};
                var partialRoutes = routes.splice(i + 1);
                for (var j = 0, item; item = tempobjOrArr[route][j]; j++) {
                    res[j] = _.getValue2(item, partialRoutes.join('.'));
                }
                return res;
            } else {
                tempobjOrArr = tempobjOrArr[route];
            }
        }

    }
    return tempobjOrArr;
};