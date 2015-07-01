this.contain = function (obj, value) {
    //TODO
    for (var i = 0; i < obj.length; i++)
        if (obj[i] == value)
            return true;
    
    //this.each(obj, this.exec(this.equal, fv, sv))
    return false;
};
