//todo : move to DOM namespace
this.select = function (selectorOrDom, parent) {
    parent = parent || document.body;
    var nodes = '';
    if (this.is.string(selectorOrDom))
        nodes = parent.querySelectorAll(selectorOrDom);
    else
        nodes = selectorOrDom;
    if (this.is.nodeList(nodes)) nodes = this.argToArray(nodes);
    else if (this.is.HTMLCollection(nodes)) nodes = this.argToArray(nodes);
    else if (!this.is.array(nodes)) nodes = [nodes];
    
    return nodes;
};
this.selectFirst = function (selectorOrDom, parent) {
    return _.valueOf(_.select(selectorOrDom, parent), 0);
};
