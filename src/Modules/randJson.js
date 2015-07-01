
this.randJson = function (len, props) {
    var res = [];
    _.repeat(len, function () {
        var item = {};
        _.each(props, function (prop) {
            if (prop.type == 'string') {
                item[prop.name] = _.randString(6);
            } else if (prop.type == 'number') {
                item[prop.name] = _.random(0, 9);
            }
        }, this);
        res.push(item);
    }, this);
    return res;
};