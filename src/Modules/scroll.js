this.scroll = (function () {
    var Fn = function () { };
    Fn.to = function (selectorOrDom, to, duration) {
        var node = _.selectFirst(selectorOrDom);
        if (duration < 0) return;
        var difference = to - window.pageYOffset;
        var perTick = difference / duration * 10;
        
        setTimeout(function () {
            var y = window.pageYOffset + perTick;
            
            window.scrollTo(0, y)
            if (node.scrollTop === to) return;
            _.scroll.to(node, to, duration - 10);
        }, 10);
    }
    
    return Fn;
}());
