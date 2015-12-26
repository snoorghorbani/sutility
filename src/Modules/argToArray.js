
this.argToArray = function (arg) {
    if (_.is.not.ie())
        return Array.prototype.slice.call(arg);
    else {
        var array = [];
        for (var i = 0; i < arg.length; i++)
            array.push(arg[i]);
        return array;
    }
};
