this.publisher = (function (that, undefined) {
    var o = {};
    o.subscribers = {
        any: []
    };
    o.subscribe = function (fn, types) {
        types = types || 'any';
        var typesList = _.spliteAndTrim(types);

        for (var i = 0, type; type = typesList[i]; i++) {
            if (_.is.not.defined(this.subscribers[type]))
                this.subscribers[type] = [];
            this.subscribers[type].push(fn);
        }
    };
    o.unsubscribe = function (fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);

    };
    o.publish = function (type, publication) {
        publication = _.assignIfNotDefined(publication, {});
        this.visitSubscribers('publish', publication, type);
    };
    o.visitSubscribers = function (action, arg, type) {
        if (!this.subscribers[type]) {
            console.log(type + " topic dont have subscriber!");
            return;
        }

        var pubType = type || 'any',
            subscribers = this.subscribers[pubType];
        // var max = subscribers.length;
        for (var i = 0, sub; sub = subscribers[i]; i++) {
            if (action === 'publish') {
                sub(arg);
            } else if (action === 'unsubscribe') {
                if (sub == arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    };
    return function (obj) {
        obj = obj || {};
        var i;
        for (i in o) {
            if (o.hasOwnProperty(i) && _.is.function(o[i])) {
                obj[i] = o[i];
            }
        }
        obj.subscribers = { any: [] };
        return obj;
    };
})(this);