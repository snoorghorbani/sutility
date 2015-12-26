this.event = function (domOrSelector, state, fn) {
    var nodes = this.select(domOrSelector);
    //var oldMethod = (document.body.addEventListener == undefined);
    this.each(nodes, function (node) {
        //var state = (oldMethod) ? state : 'on' + state;

        //(node.addEventListener || node.attachEvent)(state, fn);
        node.addEventListener(state, fn);
    });
};