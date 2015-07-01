this.clone = function (arOrObj) {
    if (arOrObj.concat)
        return arOrObj.concat();
    
    var temp = {};
    for (var key in arOrObj)
        temp[key] = arOrObj[key];
    return temp;
};
