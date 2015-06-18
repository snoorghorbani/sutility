this.className = (function (_, undefined) {
    var className = function (selectorOrDom, className) { };
    
    className.add = function (selectorOrDom, className) {
        var nodes = _.select(selectorOrDom);
        
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                //ToDo
                DOMTokenList.prototype.add.apply(nodes[i].classList, _.spliteAndTrim(className));
                continue;
            }
            if (nodes[i].className.indexOf(className) === -1) {
                nodes[i].className = nodes[i].className + ' ' + className;
            }
        }
    };
    className.remove = function (selectorOrDom, className) {
        var nodes = _.select(selectorOrDom);
        
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
                continue;
            }
            
            var reg = new RegExp(className, 'g');
            nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
        }
    };
    className.toggle = function () { };
    className.change = function (selectorOrDom, className, replaceWith) {
        var nodes = _.select(selectorOrDom);
        _.removeClass(nodes, className);
        _.addClass(nodes, replaceWith);
    };
    
    return className;
})(this);