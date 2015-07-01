//TODO :: do with categorize
this.idMode = function (ar, iden) {
    var res = {};
    for (var i = 0, item; item = ar[i]; i++) {
        if (item[iden]) {
            res[item[iden]] = item;
            res[item[iden]].active = '';
        }
    }
    return res;
};
