this.cloneObj = function (obj, prototype) {
    prototype = _.assignIfNotDefined(prototype, true);
    var temp = _.object();
    for (var key in obj) {
        if (prototype || obj.hasOwnProperty(key)) {
            if (_.is.scalar(obj[key])) {
                temp[key] = obj[key];
            }
            else {
                temp[key] = _.clone(obj[key]);
            }
        }
    }

    return temp;
};