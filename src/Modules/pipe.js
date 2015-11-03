            this.pipe = (function (_) {
                var pipes = {};
                var timers = {};
                var getTimer = function (id, delay) {
                    if (timers[i]) return;

                    setInterval(function () {
                        var fn = pipes[id].shift();
                        if (!fn) clearInterval(timers[id] = null);
                        fn();
                    }, delay || 1);
                }
                return function (id, delay) {
                    var id = id;
                    pipes[id] = pipes[id] || [];
                    return function (fn) {
                        pipes[id].push(fn);
                    };
                }
            }(this));
