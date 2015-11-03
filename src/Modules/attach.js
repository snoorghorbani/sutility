this.attach = (function (_) {
    var eventList = {};

    var fn = function (domOrSelector, state, fn) {
        if (!eventList[state]) {
            eventList[state] = [];
            listener(state);
        };
        var temp = {
            fn: fn,
            domOrSelector: domOrSelector
        }
        for (var i = 0, item; item = eventList[state][i]; i++)
            if (_.is.equal(temp, item))
                return i;
                
        eventList[state].push(temp);

        return eventList[state].length - 1;
    }

    var listener = function (state) {
        document.body.addEventListener(state, function (e) {
            var done = false;
            for (var i = 0, handler; handler = eventList[state][i]; i++) {
                var el = e.target;
                done = false;
                if (_.is.element(handler.domOrSelector)) {
                    do {
                        if (_.is.same(el, handler.domOrSelector)) {
                            handler.fn(e, el, handler.domOrSelector);
                            done = true;
                        } else {
                            el = el.parentNode;
                        }
                    } while (!done && el.tagName.toLowerCase() != 'body');
                } else if (_.is.string(handler.domOrSelector)) {
                    do {
                        if (_.is(el, handler.domOrSelector)) {
                            handler.fn(e, el, handler.domOrSelector);
                            done = true;
                        } else {
                            el = el.parentNode;
                        }
                    } while (!done && el.tagName.toLowerCase() != 'body');
                }
            }
        });
    };

    return fn;
})(this);