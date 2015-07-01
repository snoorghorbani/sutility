this.pipe = (function(_){
    var pipes = {};
    return function (id, delay) {
        var id = id;
        pipes[id] = pipes[id] || [];
        return function (fn) {
            pipes[id].push(fn);
            setInterval(function () {
                var fn = pipes[id].shift();
                fn && fn();
            }, delay || 1);
        };
    }
}(this));