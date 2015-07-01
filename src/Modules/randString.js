this.randString = function (len) {
    var res = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    _.repeat(len, function () {
        res += possible[_.random(0, possible.length).toFixed()];
    }, this);
    
    return res;
};
