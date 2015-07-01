this.config = function (prop, obj) {
    for (var k in prop) {
        this[k] = obj && obj[k] || prop[k];
    }
};
