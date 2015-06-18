this.css = (function (_) {
    var toPX = function () { };
    var toNumber = function () { };
    var fn = function (selectorOrDom, style) {
        var nodes = this.select(selectorOrDom);
        for (var i = 0, node; node = nodes[i]; i++)
            for (var k in style)
                node.style[k] = style[k];
    };
    fn.computedValue = function (selectorOrDom, prop, numberOnly) {
        if (window.getComputedStyle) {
            var nodes = _.selectFirst(selectorOrDom);
            var value = window.getComputedStyle(nodes, null).getPropertyValue(prop);
            if (numberOnly)
                value = _.regex.matchFirst(value);
            return value;
        }
        _.fail('add shim for "window.getComputedStyle" in _.css.computedValue');
    };
    
    return fn;
})(this);