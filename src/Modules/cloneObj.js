this.cloneObj = function (obj, prototype) {
    prototype = _.assignIfNotDefined(prototype, true);
    var temp = _.object();
    for (var key in obj) {
        if (prototype || obj.hasOwnProperty(key))
            temp[key] = obj[key];
    }
    
    return temp;
};
