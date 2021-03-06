﻿this.activate = function (selector, classname, callback) {
    classname = classname || 'active';
    //var parents = _.select(parentOrSelector);
    _.attach(selector, 'click', function (e, el, itemsSelector) {
        _.className.remove(itemsSelector, classname);
        _.className.add(el, classname);
        callback && callback(e, el);
    });
    //_.each(parents, function (parent) {
    //    var nodes = _.select(selector, parent);
    //    _.each(nodes, function (node) {
    //    });
    //});
};
