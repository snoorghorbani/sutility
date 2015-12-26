//todo : move to DOM namespace
this.select = function (selectorOrDom, parent) {
    parent = parent || document;
    var nodes = '';
    if (that.is.string(selectorOrDom))
        nodes = parent.querySelectorAll(selectorOrDom);
    else
        nodes = selectorOrDom;
    if (that.is.nodeList(nodes)) nodes = that.argToArray(nodes);
    else if (that.is.HTMLCollection(nodes)) nodes = that.argToArray(nodes);
    else if (!that.is.array(nodes)) nodes = [nodes];
    
    return nodes;
};
this.selectFirst = function (selectorOrDom, parent) {
    return _.valueOf(_.select(selectorOrDom, parent), 0);
};
