this.clone = function (arOrObj) {
    return (arOrObj.concat)
        ? arOrObj.concat()
        : _.cloneObj(arOrObj);
};