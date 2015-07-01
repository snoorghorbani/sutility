this.safeClear = function (objOrArr) {
    //if (this.not(this.is.array, objOrArr)) this.warn('safeClear function accept array for argument');
    if (_.is.array(objOrArr)) {
        Array.prototype.splice.apply(objOrArr, [0, objOrArr.length].concat([]));
    } else {
        for (var i in objOrArr) {
            if (objOrArr.hasOwnProperty(i)) {
                delete objOrArr[i];
            }
        }
    }
};