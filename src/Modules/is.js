this.is = (function (_, undefined) {
    var is = function (node, selector) {
        if (node.matches)
            return node.matches(selector);
        var nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
        return (nodes.indexOf(node) > -1) ? true : false;
    };
    
    is.object = function (_var) {
        return Object.prototype.toString.call(_var) === '[object Object]';
    };
    is.nodeList = function (obj) {
        return Object.prototype.toString.call(obj) === '[object NodeList]';
    };
    is.HTMLCollection = function (obj) {
        return Object.prototype.toString.call(obj) === '[object HTMLCollection]';
    };
    is.array = function (_var) {
        return Object.prototype.toString.call(_var) === '[object Array]';
    };
    is.number = function (_var) {
        return Object.prototype.toString.call(_var) === '[object Number]';
    };
    is.function = function (_var) {
        return Object.prototype.toString.call(_var) === '[object Function]';
    };
    is.string = function (_var) {
        return (Object.prototype.toString.call(_var) === '[object String]');//&& ((isEmpty));
    };
    is.undefined = function (_var) {
        return Object.prototype.toString.call(_var) === '[object Undefined]';
    };
    is.event = function (_var) {
        return !!Object.prototype.toString.call(_var).toLowerCase().search('event');
    };
    is.defined = function (_var) {
        return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
    };
    is.json = function () { };
    is.error = function () { };
    
    is.startWith = function () { };
    is.endWith = function () { };
    
    is.value = function (_var) {
        return (_var) ? true : false;
    };
                is.empty = function (o) {
                    if (_.is.object(0))
                        for (var i in o)
                            if (o.hasOwnProperty(i))
                                return false;
                    if (_.is.array(o))
                        return o.length === 0
                    return true;
                };
    is.truthy = function () { };
    is.scalar = function (_var) {
        //TODO : improve
        return is.defined(_var) && is.not.array(this.is.array) && is.not.object(_var) && is.not.function(_var);
    };
    is.prototypeProp = function (obj, prop) {
        return (obj[prop] && !obj.hasOwnProperty(prop));
    };
    is.equal = function (fv, sv) {
        if (!fv) that.warn('equal function :' + fv + ' is Not Object');
        if (!sv) that.warn('equal function :' + sv + ' is Not Object');
        
        return (JSON.stringify(fv) == JSON.stringify(sv)) ? true : false;
    };
    
    var not = {};
    var i;
    for (i in is) (function (i) {
        if (is.hasOwnProperty(i)) not[i] = function (o) {
            return !is[i](o);
        };
    })(i);
    is.not = not;
    
    var all = {};
    for (i in is) (function (i) {
        if (is.hasOwnProperty(i)) all[i] = function (o) {

        };
    })(i);
    is.all = all;
    
    var any = {};
    for (var j in is) (function (j) {
        if (is.hasOwnProperty(j)) any[j] = function (o) {

        };
    })(j);
    is.any = any;
    
    return is;
})(this);
this.if = (function (_) {
    var _if = {};
    _if.is = {};
    _if.is.not = {};
    for (var i in _.is) (function (i) {
        if (i != 'not') {
            _if.is[i] = function (obj, fn) {
                if (_.is[i](obj)) {
                    return fn();
                }
            };
            _if.is.not[i] = function (obj, fn) {
                if (_.is.not[i](obj)) {
                    return fn();
                }
            };
        }
    })(i);
    return _if;
})(this);