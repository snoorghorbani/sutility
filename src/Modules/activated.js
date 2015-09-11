this.activated = function (parentOrSelector, selector, classname, callback) {
    classname = classname || 'active';
    var parents = _.select(parentOrSelector);
    _.each(parents, function (parent) {
        var nodes = _.select(selector, parent);
        _.each(nodes, function (node) {
            _.event(node, 'click', function () {
                _.className.remove(nodes, classname);
                _.className.add(node, classname);
                callback && callback(this);
            });
        });
    });
};
