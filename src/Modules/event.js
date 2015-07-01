this.event = function (domOrSelector, state, fn) {
    var nodes = this.select(domOrSelector);
    this.each(nodes, function (node) {
        node.addEventListener(state, fn);
    });
};