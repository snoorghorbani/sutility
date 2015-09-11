this.dispatcher = (function (_) {
    var eventList = {};

    var fn = function (domOrSelector, state, fn) {
        if (!eventList[state]) {
            eventList[state] = [];
            listener(state);
        };
        var tempHandler = {
            fn: fn,
            domOrSelector: domOrSelector
        }
        var isSet = false;
        for (var i = 0, temp; temp = eventList[state][i]; i++) {
            if (_.is.equal(tempHandler, temp)) {
                isSet = true;
            }
        }
        if (!isSet || true) {
            eventList[state].push(tempHandler);
        }
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