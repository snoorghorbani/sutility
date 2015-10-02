/**
 * sutility v0.0.79 - 2015-10-02
 * Functional Library
 *
 * Copyright (c) 2015 soushians noorghorbani <snoorghorbani@gmail.com>
 * Licensed MIT
 */
;(function(undefined){
    "use strict";
    var instance = null;
var DEBUG = true;
window.SUTILITY = (function () {

var U = function () {
var _ = this;
 var that = this;
this.activate = function ( selector, classname, callback) {
    classname = classname || 'active';
    //var parents = _.select(parentOrSelector);
    _.dispatcher(selector, 'click', function (e, el,itemsSelector) {
        _.className.remove(itemsSelector, classname);
        _.className.add(el, classname);
        callback && callback(el, e);
    });
    //_.each(parents, function (parent) {
    //    var nodes = _.select(selector, parent);
    //    _.each(nodes, function (node) {
    //    });
//});
};

this.activated = function (parentOrSelector, selector, classname, callback) {
    classname = classname || 'active';
    var parents = _.select(parentOrSelector);
    _.each(parents, function (parent) {
        var nodes = _.select(selector, parent);
        _.each(nodes, function (node) {
            _.event(node, 'click', function (e) {
                _.className.remove(nodes, classname);
                _.className.add(node, classname);
                callback && callback(this,e);
            });
        });
    });
};


this.argToArray = function (arg) {
    return Array.prototype.slice.call(arg);
};

this.arrToObj = function (/*arr , key , removeKey*/) {
    var args = _.argToArray(arguments);
    var arr = args.shift();
    var key = args.shift();
    var removeKey = args.shift();
    
    var res = {};
    _.each(arr, function (item) {
        var temp = item[key];
        if (removeKey) delete item[key];
        
        res[temp] = item;
    });
    return res;
};

this.array = (function (_) {
    var fn = function () { };
    
    fn.compact = function (arr) {
        return _.filter(arr, _.i);
    };
    fn.union = function (arrays) {
        var temp = {};
        var res = [];
        //todo : performance
        _.each(arrays, function (arr) { temp[arr] = ''; });
        _.each(temp, function (value, key) { res.push(key) });
        return res;
    };
    fn.uniq = function (arr) {
    };
    var baseFlatten = function (array, isDeep, isStrict) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        
        while (++index < length) {
            var value = array[index];
            if (_.is.array(value) &&
                (isStrict || _.is.array(value) || _.is.arguments(value))) {
                if (isDeep) {
                    // Recursively flatten arrays (susceptible to call stack limits).
                    value = baseFlatten(value, isDeep, isStrict);
                }
                var valIndex = -1,
                    valLength = value.length;
                
                while (++valIndex < valLength) {
                    result[++resIndex] = value[valIndex];
                }
            } else if (!isStrict) {
                result[++resIndex] = value;
            }
        }
        return result;
    }
    fn.flattenDeep = function (array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, true) : [];
    }
    fn.remove = function (arr, i) {
        return _.filter(arr, function (j) { return i !== j })
    };
    
    fn.shift = function first(array, callback) {
        var n = 0,
            item;
        
        if (typeof callback === 'number') {
            n = callback;
        } else if (that.is.function(callback)) {
            var index = 0;
            while (callback(array[index++])) {
                n++;
            }
        } else {
            n++;
        }
        
        item = array.slice(0, n);
        
        return (that.is.array(item) && item.length === 1 ? item[0] : item);
    };
    fn.reverse = function (ar) {
        if (DEBUG) {
            if (_.is.not.array(ar)) _.fail('is Not Array');
        }
        var res = [];
        for (var i = ar.length - 1, j = 0; i >= 0; i--, j++) {
            res[j] = ar[i];
        }
        return res;
            //return map(ar, function (item) {
            //    var idx = d;
            //})
    };
    fn.concat = function (fa, sa) {
        if (DEBUG) {
            if (_.is.not.array(fa)) _.fail('is Not Array');
            if (_.is.not.array(sa)) _.fail('is Not Array');
        }
        
        return fa.concat(sa);
    };
    fn.indexOf = function (arr, idxOrIterator, context) {
        var res;
        
        if (_.is.function(idxOrIterator)) {
            _.each(arr, function (item, idx) {
                if (idxOrIterator.call(context, item))
                    res = idx;
            });

        } else {
            res = arr.indexOf(idxOrIterator);
        } return res;
    };
    return fn;
})(this);

this.assign = (function (_) {
    var fn = function () { };
    
    fn.ifDefined = function (to, fnOrObj) {
        //TODO : handel fn
        return (fnOrObj !== undefined) ? that.safeAssign(to, fnOrObj) : to;
    };
    fn.ifNotDefined = function (varible, fnOrObj) {
        //TODO : handel fn
        return (varible === undefined) ? fnOrObj : varible;
    };
})(this);

this.assignIfDefined = function (to, fnOrObj) {
    //TODO : handel fn
    return (fnOrObj !== undefined) ? that.safeAssign(to, fnOrObj) : to;
};
this.assignIfNotDefined = function (varible, fnOrObj) {
    //TODO : handel fn
    return (varible === undefined) ? fnOrObj : varible;
};
this.attr = (function (_, undefined) {
    var attr = function () { };
    
    return attr;
})(this);

this.availableDim = function () {
    var inner = document.createElement('div');
    
    inner.style.position = 'fixed';
    inner.style.top = '0px';
    inner.style.right = '0px';
    inner.style.bottom = '0px';
    inner.style.left = '0px';
    document.body.appendChild(inner);
    
    var height = inner.offsetHeight;
    var width = inner.offsetWidth;
    inner.parentNode.removeChild(inner);
    return {
        height: height,
        width: width
    };
};

this.bind = function (el, obj, decorator) {
    decorator = decorator || this.i;
};

this.callBox = (function (_) {
    return function (fn, boxTime, context) {
        var lastDate = null;
        return function () {
            if (!lastDate || Date.now() - lastDate > boxTime) {
                lastDate = Date.now();
                return fn.apply(context, arguments);
            }
        };
    };
})(this);
this.callConstantly = (function (_) {
    return function (fn , count, context) {
        return function () {
            --count;
            var res;
            if (fn) {
                res = fn.apply(context || {} , arguments);
            }
            if (count == 0) fn = null;
            return res;
        };
    };
})(this);
this.callIgnore = (function (_) {
    return function (fn, counter, context) {
        return function () {
            if (--counter == 0)
                return fn.apply(context, arguments);
        };
    };
})(this);
this.callVoucher = (function (_) {
    return function (fn , millisecond, context) {
        setTimeout(function () {
            fn = null;
        }, millisecond);
        return function () {
            if (fn)
                return fn.apply(context || {} , arguments);
        };
    };
})(this);
this.callWhen = function (nameOrFnCondition, callback, infiniteCall, checkTime) {
    checkTime = checkTime || 20;
    var conditionType = (_.is.function(nameOrFnCondition)) ? "fn" : "string";
    var intervalId = setInterval(function () {
        if (conditionType == "string" && !_.valueOf(nameOrFnCondition)) return;
        else if (conditionType == "fn" && !nameOrFnCondition()) return;

        !infiniteCall && clearInterval(intervalId);
        callback();
    }, checkTime);
};
this.callWithDelay = (function (_) {
    return function (fn, delay, context) {
        var initializedDate = Date.now();
        return function () {
            if (Date.now() - initializedDate > delay)
                return fn.apply(context, arguments);
        };
    };
})(this);
this.camelCase = function (str) {
    if (DEBUG) {
        if (!str) debugger;
    }
    return str.replace(/[\W|\_](.)/g, function (match, group) {
        return group && group.toUpperCase();
    });
};
this.cancelBubble = function (e) {
    var evt = e ? e : window.event;
    if (evt.stopPropagation) evt.stopPropagation();
    if (evt.cancelBubble !== null) evt.cancelBubble = true;
};

this.canvas = (function (_) {
    var Fn = function () { };
    
    Fn.arc = function (ctx, x, y, r, f, t, b) {
        ctx.beginPath();
        ctx.arc(x, y, r, f, t, b);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    Fn.rect = function (ctx, x, y, w, h, fill, stroke) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.closePath();
        if (fill !== false) ctx.fill();
        if (stroke !== false) ctx.stroke();
    };
    Fn.text = function (ctx, text, x, y) {
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.fill();
        ctx.closePath();

    };
    Fn.line = function (ctx, startPoint, endPoint) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.closePath();
        ctx.stroke();
    };
    return Fn;
})(this)

this.catchall = (function (_) {
    var instatiate = null;
    var keys = {};
    var values = {};
    var defaultCatchAllConfig = {
        prefix: '/defaultPrefix',
        partialPrefix: '/defaultPrefix/defaultFilterresult',
        replace: ['/filter/', '/filter/filterresult/'],
    };
    var defaultKeyConfig = {
        multi: false,
        'default': null
    };
    var Fn = function (config) {
        this.config = _.update(_.cloneObj(defaultCatchAllConfig), config);
        return this;
    };
    
    Fn.prototype.key = function (name, config) {
        keys[name] = _.update(_.cloneObj(defaultKeyConfig), config);
        var pathName = decodeURIComponent(window.location.pathname);
        var catchAlls = pathName.replace(this.config.prefix, '');
        catchAlls = catchAlls.split('/');
        _.each(catchAlls, function (ca) {
            //if (ca.startsWith(name + '-')) {
            if (_.is.startWith(ca, name + '-')) {
                values[name] = _.assignIfNotDefined(values[name], []);
                if (ca.length > name.length + 1) {
                    values[name].push(ca);
                }
            }
        });
        
        Fn.prototype.add = _.assignIfNotDefined(Fn.prototype.add, {});
        Fn.prototype.add[name] = function (a, b) {
            var valueStr = name + '-' + a.toString() + ((b) ? '-' + b.toString() : '');
            
            if (keys[name].multi) {
                values[name] = values[name] || [];
                values[name].push(valueStr);
            } else {
                values[name] = [valueStr];
            }
        };
        
        Fn.prototype.remove = _.assignIfNotDefined(Fn.prototype.remove, {});
        Fn.prototype.remove[name] = function (a, b) {
            var valueStr = name + '-' + a.toString() + ((b) ? '-' + b.toString() : '');
            values[name] = _.filter(values[name], function (a) { return a.toLowerCase() !== valueStr.toLowerCase(); });
        };
        Fn.prototype.reset = _.assignIfNotDefined(Fn.prototype.reset, {});
        Fn.prototype.reset[name] = function () {
            var defaultValue = keys[name].default;
            var initByType = '';
            initByType = _.if.is.equal(keys[name].multi, 'multi', function () { return []; });
            values[name] = (defaultValue) ? defaultValue : initByType;
        };
    };
    Fn.prototype.partial = function () {
        var url = window.location.origin + this.config.partialPrefix;
        _.each(values, function (value, key) {
            _.each(value, function (str) {
                var fine = _.fine(str.split('-'), function (a) { return _.is.value(a); });
                if (fine) {
                    url += '/' + str;
                }
            });
        });
        return decodeURIComponent(url.toLowerCase());
    };
    Fn.prototype.build = function (f) {
        var url = window.location.origin + this.config.prefix;
        _.each(values, function (value, key) {
            _.each(value, function (str) {
                var fine = _.fine(str.split('-'), function (a) { return _.is.value(a); });
                if (fine) {
                    url += '/' + str;
                }
            });
        });
        return decodeURIComponent(url.toLowerCase());
    };
    
    return function (config) {
        return (instatiate) ? instatiate : instatiate = new Fn(config);
    };
})(this);
this.categorize = function (obj, key) {
    var res = {};
    _.each(obj, function (item) {
        var temp = item[key].toString();
        res[temp] = res[temp] || [];
        res[temp].push(item);
    });
    return res;
};

this.chain = function (fn, callback, context) {
    return function () {
        var args = that.argToArray(arguments);
        var fnResault = that.exec(fn, context || null, args);
        
        var promise = (fnResault) ? fnResault.promise || fnResault.$promise : null;
        
        if (promise) promise.then(function () {
            return that.exec(callback, context || null, [fnResault]);
        });
        else if (fnResault && fnResault.then) {
            fnResault.then(function () {
                var args = that.argToArray(arguments);
                that.exec(callback, context || null, args);
            });
            return fnResault;
        }
        else
            return that.exec(callback, context || null, [fnResault]);
    };
};

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
        //#region shim for ie
        if (_.is.ie()) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    var classNames = _.spliteAndTrim(className)
                    for (var j = 0; j < classNames.length; j++) {
                        DOMTokenList.prototype.remove.call(nodes[i].classList, classNames[j]);
                    }
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        }
            //#endregion
        else {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
                    continue;
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        }
        var nodes = _.select(selectorOrDom);
        //#region shim for ie
        if (_.is.ie()) {
            debugger;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    var classNames = _.spliteAndTrim(className)
                    for (var i = 0; i < classNames.length; i++) {
                        DOMTokenList.prototype.remove.apply(nodes[i].classList, classNames[i]);
                    }
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        };
        //#endregion
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
                continue;
            }

            var reg = new RegExp(className, 'g');
            nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
        }
    }
    className.toggle = function () { };
    className.change = function (selectorOrDom, className, replaceWith) {
        var nodes = _.select(selectorOrDom);
        _.className.remove(nodes, className);
        _.className.add(nodes, replaceWith);
    };
    className.contains = function (selectorOrDom, className) {
        var node = _.selectFirst(selectorOrDom);
        return node.classList.contains(className);
    };
    className.if = function (selectorOrDom, className, fn) {
        var nodes = _.select(selectorOrDom);
        for (var i = 0; i < nodes.length; i++)
            ((fn(nodes[i])) ? _.className.add : _.className.remove)(nodes[i], className);
    };
    return className;
})(this);
this.clone = function (arOrObj) {
    if (arOrObj.concat)
        return arOrObj.concat();
    
    var temp = {};
    for (var key in arOrObj)
        temp[key] = arOrObj[key];
    return temp;
};

this.cloneArray = function (ar) {
    return ar.concat();
            //return this.map(ar, function (d) { return d })
};

this.cloneObj = function (obj, prototype) {
    prototype = _.assignIfNotDefined(prototype, true);
    var temp = _.object();
    for (var key in obj) {
        if (prototype || obj.hasOwnProperty(key))
            temp[key] = obj[key];
    }
    
    return temp;
};

this.compare = function (value, condition, param) {
    switch (condition) {
        case 'eq':
            return value == param;
        case 'neq':
            return value != param;
        case 'grt':
            return value > param;
        case 'lst':
            return value < param;
        case 'ct':
            return value.toString().indexOf(param.toString()) > -1;
    }
};
this.compare.conditions = { 'equal': 'eq', 'neq': 'neq', 'grt': 'grt', 'lst': 'lst', 'ct': 'ct' };

this.compileString = function (str, varDef, fn) {
    var regex = /\{\{/;
    var result = [];
    var varStartIdx = str.search(regex);
    if (varStartIdx > -1) {
        result[result.length] = str.substring(0, varStartIdx);
        str = str.substring(varStartIdx);
        
        var varEndIdx = str.search(/\}\}/);
        //TODO :: window and scope check 
        var varKey = str.substring(2, varEndIdx);
        var varValue = varDef[varKey.trim()];
        if (this.is.object(varValue))
            varValue = fn.call(null, varValue);
        
        result[result.length] = varValue;
        
        str = str.substring(varEndIdx + 2);
        
        //recur
        result = result.concat(this.compileString(str, varDef, fn));
    } else {
        result[result.length] = str;
    }
    return result.join('');
};

this.complement = function (fn) {
    return function () {
        return !fn.apply(null, this.argToArray(arguments));
    };
};

this.config = function (prop, obj) {
    for (var k in prop) {
        this[k] = obj && obj[k] || prop[k];
    }
};

this.constValue = function (d) {
    var v = d;
    return function self() { return v; };
};

this.contain = function (obj, value) {
    //TODO
    for (var i = 0; i < obj.length; i++)
        if (obj[i] == value)
            return true;
    
    //this.each(obj, this.exec(this.equal, fv, sv))
    return false;
};

this.cookie = (function (_) {
                var Fn = function () { };

                Fn.set = function (key, value, exdays) {
                    if (_.is.object(value)) {
                        value = JSON.stringify(value);
                    }
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toUTCString();

                    document.cookie = _.compileString('{{key}}={{value}};{{expires}},', { key: key, value: value, expires: expires });
                    return document.cookie;
                };
                Fn.get = function (key) {
                    var name = key + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1);
                        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                    }
                    return "";
                };
                Fn.remove = function (key) {
                    Fn.set(key, '', 0);
                };

                return Fn;
            })(this);
this.countBy = function () { };


this.css = (function (_) {
    var toPX = function () { };
    var toNumber = function () { };
    var fn = function (selectorOrDom, style) {
        var nodes = this.select(selectorOrDom);
        for (var i = 0, node; node = nodes[i]; i++)
            for (var k in style)
                node.style[_.camelCase(k)] = style[k];
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
this.dashCase = function (str) {
    return str.replace(/([A-Z])|([\W|\_])/g, function (match) {
        return (/[\w]/.test(match)) ?
            (match === '_') ? '-' : '-' + match.toLowerCase() :
            '-';
    });
};
this.data = (function (_) {
            //_.scope = function () {
            //    var scope = function () { };
            //    return new scope();
            //};
            //var repository = {};
            //return {
            //    add: {},
            //    listen: {},
            //}
})(this);

this.dataset = (function (_, undefined) {
    var dataset = function () { };
    
    dataset.add = function () { };
    dataset.get = function (el, name) {
        return el.dataset[name];
    };
    
    return dataset;
})(this);

this.decorator = function () { };

this.dictionary = (function (that, undefined) {
    var defaultValues = {};
    var Fn = function (_defaultValues) {
        defaultValues = _defaultValues || {};
        _.extend(this, defaultValues);
    };
    Fn.prototype.default = function (obj) {
        that.extend(defaultValues, obj);
    };
    Fn.prototype.reset = function (k) {
        this[k] = defaultValues[k];
    };
    Fn.prototype.add = function (k, v) {
        this[k] = v;
    };
    Fn.prototype.remove = function (k) { };
    Fn.prototype.data = function () {
        return _.cloneObj(this, false);
    };
    
    return {
        'new': function (defaultValue) {
            return new Fn(defaultValue);
        },
        listen: function (fn) { },
    };
})(this);
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
this.each = function (obj, iterator, context, onProto) {
    onProto = this.assignIfNotDefined(onProto, false);
    if (!obj) return false;
    
    if (this.is.nodeList(obj)) this.each(this.argToArray(obj), iterator, context);
    
    //remove improve perfomancee
    //obj.forEach && obj.forEach(iterator, context);
    var key;
    if (this.is.array(obj) || this.is.function(obj))
        for (key in obj)
            if (obj.hasOwnProperty(key) || onProto)
                iterator.call(context, obj[key], key);
    if (this.is.object(obj))
        for (key in obj)
            if (obj.hasOwnProperty(key) || onProto)
                iterator.call(context, obj[key], key);
};

//TOTHINK freezable or statable : 
//freeazable -> Defines an object that has a modifiable state and a read-only (frozen) state. 
//Classes that derive from Freezable provide detailed change notification, can be made immutable, and can clone themselves.
//https://msdn.microsoft.com/en-us/library/system.windows.freezable(v=vs.110).aspx
this.enableBackup = (function (_, undefined) {
    var o = {};
    o.__repository = {};
    
    o.backup = function (key) {
        key = _.assignIfNotDefined(key, 'last');
        
        this.__repository[key] = JSON.stringify(this);
        return this.__repository[key];
    };
    o.restore = function (key) {
        key = _.assignIfNotDefined(key, 'last');
        if (_.is.not.defined(this.__repository[key])) return;
        
        var json = JSON.parse(this.__repository[key]);
        return _.update(this, json);
    };
    
    return function (constructor_obj) {
        var constructor = _.if.is.not.function(constructor_obj, function () {
            return _.get.constructor(constructor_obj);
        });
        
        _.prototype.extend(constructor, o);
        
        return constructor;
    };
})(this);
this.event = function (domOrSelector, state, fn) {
    var nodes = this.select(domOrSelector);
    this.each(nodes, function (node) {
        node.addEventListener(state, fn);
    });
};
this.eventBus = {
    topics: {},
    
    sub: function (topic, listener) {
        if (!this.topics[topic]) this.topics[topic] = [];
        
        this.topics[topic].push(listener);
    },
    unsub: function () { },
    pub: function (topic, data) {
        if (!this.topics[topic] || this.topics[topic].length < 1) return;
        
        this.topics[topic].forEach(function (listener) {
            listener(data || {});
        });
    }
};

this.exec = function (/*fn , context , arg*/) {
    var args = this.argToArray(arguments);
    var fn = args.shift();
    var context = args.shift();
    var arg = args.shift();
    
    if (DEBUG) {
        if (_.is.not.function(fn)) _.warn(fn + 'is not function');
    }
    
    return fn.apply(context || null, arg);
};

this.extend = function (toObj, fromObj, proroAssign) {
    if (DEBUG) {
        if (_.is.not.defined(toObj)) _.fail('destination object cant be null');
    }
    
    if (_.is.array(toObj)) {
        _.safeAssignArray(toObj, fromObj);
    } else if (_.is.object(toObj)) {
        _.safeClear(toObj);
        _.each(fromObj, function (value, key) {
            toObj[key] = value;
        }, this, proroAssign);
    } else { toObj = fromObj; }
    //}  else { this.warn('safeAssign dont have correct arguments') }
    return toObj;
};

//this.extend = function (toObj, fromObj, proroAssign) {
//    if (DEBUG) {
//        if (_.is.not.defined(toObj)) _.fail('destination object cant be null');
//    }
    
//    if (_.is.array(toObj)) {
//        _.safeAssignArray(toObj, fromObj);
//    } else if (_.is.object(toObj)) {
//        _.safeClear(toObj);
//        _.each(fromObj, function (value, key) {
//            toObj[key] = value;
//        }, this, proroAssign);
//    } else { toObj = fromObj; }
//    //}  else { this.warn('safeAssign dont have correct arguments') }
//    return toObj;
//};
this.extendFunc = function (fn, callBack) {
    var data = arguments[2];
    return function () {
        fn.call(this);
        callBack.call(this, data);
    };
};
this.extractWrapedBy = function (str, wrapper) {
    var pattern = null;
    if (wrapper == '{}') {
        pattern = /\{(.*?)\}/g;
    } else if (wrapper == '()') {
        pattern = /\((.*?)\)/g;
    } else if (wrapper == '[]') {
        pattern = /\[(.*?)\]/g;
    } else {
        return;
    }
    var regex = new RegExp(pattern);
    var matched = str.match(regex);
    for (var i = 0; matched && i < matched.length; i++) {
        matched[i] = matched[i].substring(1, matched[i].length - 1);
    }
    return matched;
};
this.fail = function (text) {
    throw new Error(text);
};

this.filter = function (arr, obj_FnCondition) {
    if (DEBUG) {
        if (_.is.not.object(obj_FnCondition) && _.is.not.function(obj_FnCondition)) debugger;
    }
    
    var res = [];
    var condFn = (_.is.function(obj_FnCondition)) ? obj_FnCondition : _.rightCurry(_.is.closet)(obj_FnCondition);
    
    _.each(arr, function (item) {
        if (condFn(item))
            res.push(item);
    });
    return res;
};
this.fine = function (ar, fn) {
    var status = true;
    _.each(ar, function (i) {
        if (!fn(i)) {
            status = false;
        }
    });
    return status;
};
this.fixEvent = function (e) {
    window.event = window.event || e;
};
this.flatTreeBy = function (data, childAttr, parentAttr, res, parentIdn, defaultRootValue, depth) {
    res = res || [];
    depth = depth || 0;
    _.each(_.cloneObj(data), function (item) {
        //TODO :: check for dont have "parentIdn" & "depth" attr
        item.parentIdn = parentIdn || defaultRootValue || 'root';
        item.depth = depth;
        res.push(item);
        if (item[childAttr] && item[childAttr].length > 0) {
            that.flatTreeBy(item[childAttr], childAttr, parentAttr, res, item[parentAttr], defaultRootValue, depth + 1);
        }
        delete item[childAttr];
    });
};

this.flyWeight = (function (_, undefined) {
            //1.Remove all extrinsic data
            //2.Create a factory
            //3.Create a manager(to store the extrinsic data)
})(this);
this.fn = function () {
    return function () { };
};
            this.framework = (function (_) {
                return function (config) {
                    config = config || {};
                    config.version = config.version || 1;
                    if (!config.run_env)
                        _.fail('you must define application run_env function in app.js')
                    window.RUN_ENV = config.run_env();

                    var CONST = { controllerSelector: '[data-controller]' };
                    var fm = function () { };
                    var factories = {};
                    var controllers = {};
                    var js = {};
                    var css = {};
                    fm.factory = (function (fm) {
                        return function (name, fn) {
                            var camelCaseName = _.camelCase(name);
                            window[camelCaseName + 's'] && _.fail(camelCaseName + 's exists');
                            window[camelCaseName + 's'] = {};
                            var Constructor = fn();
                            factories[camelCaseName] = function (id, node, config) {
                                return window[camelCaseName + 's'][id] = new Constructor(id, node, config);
                            };
                            return Constructor;
                        };
                    })(this);
                    fm.controller = (function (fm, undefined) {
                        var repositoy = {};
                        return function (name, fn) {
                            controllers[name] = {};
                            controllers[name].fn = fn;
                            //controllers[name].scope = window.scope = _.scope();
                            repositoy[name] = controllers[name].scope = _.scope();

                            _.ready(function () {
                                var controllerNode = _.selectFirst('[data-controller="' + name + '"]');

                                controllerNode && instansiteController(controllers[name], controllerNode);
                            });
                            return controllers[name].scope;
                        };
                    })(this);
                    fm.loadJS = (function (fm) {
                        var qeue = [];
                        var dependenciesHistory = {};
                        return function (files) {
                            var thenFn = _.fn();
                            var _dependencies = [];
                            if (RUN_ENV == "development") {
                                for (var i = 0; i < files.length; i++) {
                                    if (_.is.array(js[files[i]])) {
                                        _.each(js[files[i]], function (filePath) {
                                            if (!js[filePath]) {
                                                js[filePath] = filePath;
                                            }
                                            if (!dependenciesHistory[js[filePath]]) {
                                                _dependencies.push(js[filePath]);
                                                dependenciesHistory[js[filePath]] = false;
                                            }
                                        });
                                    } else {
                                        if (!dependenciesHistory[js[files[i]]]) {
                                            _dependencies.push(js[files[i]]);
                                            dependenciesHistory[js[files[i]]] = false;
                                        }
                                    }
                                }
                                for (var i = 0; i < _dependencies.length; i++) {
                                    _dependencies[i] += '?version=' + config.version;
                                }
                                for (var i = 0, file; file = _dependencies[i]; i++) {
                                    var path = file;
                                    //TODO
                                    _.loadJS(path, function (path) {
                                        dependenciesHistory[path] = true;

                                        for (var i = qeue.length - 1; i >= 0; i--) {
                                            if (qeue[i].done)
                                                continue;
                                            qeue[i].depen = _.array.remove(qeue[i].depen, path);
                                            if (qeue[i].depen.length === 0) {
                                                qeue[i].done = true;
                                                qeue[i].thenFn();
                                            }
                                        }
                                    });
                                }
                            }
                            return {
                                then: function (fn) {
                                    thenFn = fn;
                                    if (_dependencies.length == 0) {
                                        thenFn();
                                    } else {
                                        qeue.push({ depen: _dependencies, thenFn: fn });
                                    }
                                }
                            };
                        }
                    })(this);
                    fm.loadCSS = (function (fm) {
                        return function (files) {
                            var _dependencies = [];
                            for (var i = 0; i < files.length; i++) {
                                if (_.is.array(css[files[i]])) {
                                    _.each(css[files[i]], function (filePath) {
                                        if (!css[filePath]) {
                                            css[filePath] = filePath;
                                        }
                                        _dependencies.push(css[filePath]);
                                    });
                                } else {
                                    _dependencies.push(css[files[i]]);
                                }
                            }
                            for (var i = 0; i < _dependencies.length; i++) {
                                that.loadCSS(_dependencies[i]);
                            }
                            return this;
                        };
                    })(this);
                    fm.config = (function (_) {
                        return function (config) {
                            that.extend(js, config.js);
                            that.extend(css, config.css);
                        }
                    })(this);
                    //_.ready(function () {
                    //    for (var i = 0, controllerNode; controllerNode = controllerNodes[i]; i++) {
                    //        var controllerName = controllerNode.dataset.controller;
                    //        var controller = controllers[controllerName];
                    //        if (controller) {
                    //            instansiteController(controller, controllerNode);
                    //        }
                    //    }
                    //});
                    var instansiteController = function (controller, controllerNode) {
                        controller.fn.apply(controller.scope, [controller.scope, controllerNode]);

                        for (var factoryName in factories) {
                            var factoryAttrName = _.dashCase(factoryName);
                            var nodes = controllerNode.querySelectorAll('[' + factoryAttrName + ']');
                            _.each(nodes, function (node) {
                                var id = node.getAttribute(factoryAttrName);
                                var config = controller.scope.config[id] || {};
                                factories[factoryName](id, node, config);
                            });
                        }
                    };

                    return fm;
                }
            })(this);
this.freezable = (function (_, undefined) {
    var o = {};
    
    o.freeze = function (key) { };
    o.unfreeze = function (key) { };
    
    return function (constructor_obj) { };
})(this);

this.get = (function () {
    var get = function () { };
    
    get.constructor = function (obj) {
        return obj.constructor;
    };
    
    return get;
})();
this.getCumulativeOffset = function (obj) {
    var left, top;
    left = top = 0;
    if (obj.offsetParent) {
        do {
            left += obj.offsetLeft;
            top += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        x: left,
        y: top
    };
};
this.getJSON = function (options, callback) {
    var xhttp = this.getXHR();
    options.url = options.url || location.href;
    options.data = options.data || null;
    callback = callback || function () { };
    
    options.type = options.type || 'json';
    var url = options.url;
    if (options.type == 'jsonp') {
        window.jsonCallback = callback;
        var $url = url.replace('callback=?', 'callback=jsonCallback');
        var script = document.createElement('script');
        script.src = $url;
        document.body.appendChild(script);
    }
    xhttp.open('GET', options.url, true);
    xhttp.send(options.data);
    xhttp.onreadystatechange = function () {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            callback(xhttp.responseText);
        }
    };
};

this.getTransitionEvent = function () {
            var fakeElement = document.createElement('div');
            var transition = {
                WebkitTransition: 'webkitTransitionEnd',
                OTransition: 'TranstionEnd',
                MozTransition: 'transtionend',
                transition: 'transtionend',
            };
            for (var i in transition) {
                if (_.is.defined(fakeElement.style[i])) return transition[i];
            }
        };
this.getValue = function (obj, path) {
    if (DEBUG) {
        if (!obj) return undefined;
        if (!obj) return this.warn('UTILITY getValue function first parameter not defined');
    }
    
    if (obj[path] !== null) return obj[path];
    
    path = path.split('.');
    var i = 0;
    var res = obj[path[i++]];
    while (i < path.length) {
        res = res[path[i++]];
    }
    return (i == path.length) ? res : null;
};

this.getXHR = function () {
    var instance = new XMLHttpRequest();
    return instance;
};
this.groupBy = function (obj, prop, fn) {
    fn = fn || this.return;
    var res = {};
    _.each(obj, function (item) {
        var flag = item.data[prop];
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};
this.groupByFlatMode = function (/*obj, props*/) {
    var that = this;
    var args = _.argToArray(arguments);
    var obj = args.shift();
    var props = args.shift();
    var res = {};
    
    this.each(obj, function (item) {
        var flag = '';
        that.each(props, function (prop) {
            flag += '_' + item[prop];
        });
        
        res[flag] = res[flag] || [];
        res[flag].push(item);
    });
    
    return res;
};

this.groupByTreeMode = function (/*obj, props*/) {
    var that = this;
    var args = _.argToArray(arguments);
    var obj = args.shift();
    var props = args.shift();
    var prop = props.shift();
    var fn = args.shift();
    var res = {};
    
    var grouped = that.groupBy(obj, prop, fn);
    
    _.each(grouped, function (group, i) {
        if (props.length > 0) {
            grouped[i] = that.groupByTreeMode.call(that, group, _.cloneArray(props), fn);
        }
    });
    obj = grouped;
    return obj;
};

this.groupIf = function (obj, cond, fn) {
    fn = fn || _.return;
    var res = {};
    _.each(obj, function (item) {
        var flag = cond(item);
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};

this.haveKey = function (obj, path) {
    if (DEBUG) {
        if (_.is.not.object(obj)) this.warn('is Not Object');
    }
    var tempObj = obj;
    var routes = path.split('.');
    for (var i = 0, route; route = routes[i]; i++) {
        if (!tempObj[route] && tempObj[route] !== 0) {
            _.warn(['dont have ', route, 'property'].join(' '));
            return false;
        }
        //if (i == len - 1)
        //    return (tempObj[route]) ? true : false;
        
        if (_.is.not.array(tempObj[route])) {
            tempObj = tempObj[route];
        }
    }
    return true;
};
this.i = function (i) {
    return i;
};

//TODO :: do with categorize
this.idMode = function (ar, iden) {
    var res = {};
    for (var i = 0, item; item = ar[i]; i++) {
        if (item[iden]) {
            res[item[iden]] = item;
            res[item[iden]].active = '';
        }
    }
    return res;
};

this.impelemetIn = function (child) { };

this.indexBy = function () { };

this.interface = function (obj, decl) {
            //var _obj = (this.not(this.is.array, obj, decl[key])) ? [this.cloneObj(obj)] : obj;
            //if (_obj.length === 0) return false;
            //for (var i = 0, item; item = _obj[i]; i++) {
            //    for (var key in decl) {
            //        if (this.not(this.haveKey, item, decl[key])) {
            //            this.warn(['obj dont have parameter :', key, decl[key]].join(' '));
            //            return false;
            //        }
            //    }
            //}
            //return true;
};

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
    is.element = function (obj) {
        return Object.prototype.toString.call(obj).search('Element') > -1;
        //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
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
    
    is.startWith = function () {
        return str.indexOf(prefix) === 0;
    };
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
        //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
        //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
        
        return (JSON.stringify(fv) == JSON.stringify(sv)) ? true : false;
    };
    is.equalText = function (fv, sv) {
        if (DEBUG) {
            if (_.is.not.string(fv)) that.warn('equal function :' + fv + ' is Not String');
            if (_.is.not.string(sv)) that.warn('equal function :' + sv + ' is Not String');
        }
        
        return (fv.toLowerCase(fv) === sv.toLowerCase(sv)) ? true : false;
    }; 
	is.closet = function (fo, so) {
        return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
    };
    is.contain = function (str , searchStr) {
        var reg = (_.is.regex(searchStr))?searchStr: new RegExp(searchStr, 'g');
        return str.match(reg) && str.match(reg).length > 0;
    };
    is.regex = function (r) {
        return r.constructor.name === "RegExp";
    };
	is.ie = function () {
                    return window.navigator.userAgent.indexOf("Trident") > 0;
                };
	is.same = function (fv, sv) {
	    //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
	    //if (!sv) that.warn('equal function :' + sv + ' is Not Object');

	    return (fv.isEqualNode) ? fv.isEqualNode(sv) : fv === sv;
	};
				
    var not = {};
    var i;
    for (i in is) (function (i) {
        if (is.hasOwnProperty(i)) not[i] = function (a, b, c) {
            return !is[i](a, b, c);
        };
    })(i);
    is.not = not;
    
    //TODO : impelement
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
this.iterator = (function (_) {
    return function (array) {
        var index = -1;
        return {
            next: function () {
                return index < array.length ?
               { value: array[++index], done: false } :
               { done: true };
            },
            prev: function () {
                return index > -1?
               { value: array[--index], done: false } :
               { done: true };
            },
            current : function () {
                return { value: array[index], done: false }
            },
            index : function () { return index }
        }
    };
})(this);
this.keys = function (/*obj*/) {
    var args = _.argToArray(arguments);
    var obj = args[0];
    var res = [];
    _.each(obj, function (value, key) {
        res.push(key);
    });
    return res;
};
this.leftCurry = function (fn, context) {
    context = context || that;
    return function (/*left args*/) {
        var leftArgs = _.argToArray(arguments);
        return function (/*right args*/) {
            var args = _.array.concat(leftArgs, _.argToArray(arguments));
            return fn.apply(context, args);
        };
    };
};
this.loadCSS = (function (_) {
    var loadedFiles = {};
    return function (path, callback) {
        if (loadedFiles[path])
            return;
        var css = document.createElement('link')
        css.setAttribute("rel", "stylesheet")
        css.setAttribute("href", '/' + path);
        document.getElementsByTagName("head")[0].appendChild(css);
    }
})(this);

this.loadJS = (function (_) {
    var loadedFiles = {};
    return function (path, callback) {
        if (loadedFiles[path]) {
            if (loadedFiles[path].state) {
                setTimeout(function () {
                    callback(path, path);
                }, 1);
            } else {
                loadedFiles[path].callbacks.push(callback);
            }
        } else {
            loadedFiles[path] = {
                state: false,
                callbacks: []
            };
            loadedFiles[path].callbacks.push(callback);
            
            var script = document.createElement('script')
            script.setAttribute("type", "text/javascript")
            script.onload = function (e) {
                            var n = e.srcElement || e.explicitOriginalTarget || e.path[0];
                var filePath = n.getAttribute('src');
                if (filePath) {
                    path = filePath.substring(1, filePath.length);
                }
                
                loadedFiles[path].state = true;
                for (var i = 0, fn; fn = loadedFiles[path].callbacks[i]; i++) {
                    fn(path);
                }
            };
            script.setAttribute("src", '/' + path);
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
})(this);

this.map = function (obj, iterator, context) {
    var results = [];
    
    _.each(obj, function (value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
};

this.mediaHandler = (function (_) {
    var handler = {
        "in": {},
        "out": {},
        "only": {}
    };
    var medias = {};
    var subscibeOnMediaIn = function (media, fn) {
        var mq = window.matchMedia(media);
        mq.addListener(function () {
            if (mq.matches) fn();
        });;
    }
    var subscibeOnMediaOut = function (media, fn) {
        var mq = window.matchMedia(media);
        mq.addListener(function () {
            if (!mq.matches) fn();
        });;
    }
    handler.init = function (config) {
        medias = config;
        for (var i in medias) {
            handler.in[i] = _.leftCurry(subscibeOnMediaIn)(medias[i]);
            handler.out[i] = _.leftCurry(subscibeOnMediaOut)(medias[i]);
            handler.only[i] = _.leftCurry(_.fn)(medias[i]);
        }
    };
    return handler;
}(_));

//mediaHandler.init({
//    mobile: 'screen and (min-width: 300px) and (max-width: 600px)',
//    tablet: 'screen and (min-width: 600px) and (max-width: 900px)',
//    wide: 'screen and (min-width: 900px) and (max-width: 1200px)',
//    large: 'screen and (min-width: 900px)'
//})

//mediaHandler.in.mobile(function () { console.log("in mobile : " + app.values.medias.mobile) });
//mediaHandler.in.tablet(function () { console.log("in tablet : " + app.values.medias.tablet) });
//mediaHandler.in.wide(function () { console.log("in wide : " + app.values.medias.wide) });
//mediaHandler.in.large(function () { console.log("in large : " + app.values.medias.large) });
//mediaHandler.out.mobile(function () { console.log("out mobile : " + app.values.medias.mobile) });
//mediaHandler.out.tablet(function () { console.log("out tablet : " + app.values.medias.tablet) });
//mediaHandler.out.wide(function () { console.log("out wide : " + app.values.medias.wide) });
//mediaHandler.out.large(function () { console.log("out large : " + app.values.medias.large) });
this.memoize = function (fn) {
    fn.cache || (fn.cache = {});
    return function () {
        var args = Array.prototype.slice.call(arguments),
            hash = "",
            i = args.length,
            currentArg = null;
        while (i--) {
            currentArg = args[i];
            hash += (currentArg === Object(currentArg))
                ? JSON.stringify(currentArg)
                : currentArg;
        }
        return (hash in fn.cache)
            ? fn.cache[hash]
            : fn.cache[hash] = fn.apply(this, args);
    };
}
this.merge = function (toObj, fromObj/*, copyPrototype*/) {
var temp = _.cloneObj(toObj);
                if (_.is.object(fromObj)) {
                    _.each(fromObj, function (value, key) {
                        temp[key] = fromObj[key];
                    });
                } else if (_.is.array(fromObj)) {
                    _.each(fromObj, function (value) {
                        temp.push(value);
                    });
                }
                return temp;
};
this.multiply = function (fn, ln) {
    return fn * ln;
};

this.note = function (text) {
    console.log(['NOTE : ', text].join(' '));
};

this.objToTwoDimArray = function (/*obj*/) {
    var args = _.argToArray(arguments);
    var obj = args[0];
    var res = [];
    _.each(obj, function (itemValue, itemKey) {
        var temp = [];
        temp[0] = [itemValue];
        temp[1] = [itemKey];
        res.push(temp);
    });
    return res;
};

this.object = function (init) {
    var Fn = _.fn();
    return _.extend(new Fn(), init);
};

//#region move to pattern namespace
this._Observable = {
    observers: [],
    lastId: -1,
    addObserver: function (observer) {
        this.observers.push({
            callback: observer,
            id: ++this.lastId
        });
        
        return this.lastId;
    },
    removeObserver: function (id) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
            this.observers[i];
            if (this.observers[i].id == id) {
                this.observers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    notifyObservers: function (message) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
            this.observers[i].callback(message);
        }
    }
};
this.Observable = (function (that, undefined) {
    
    function Observable(obj) {
        this.subsciber = [];
    }
    
    // this method will handle adding observers to the internal list
    Observable.prototype.observe = function observeObject(obj) {
        console.log('added new observer');
        this.subsciber.push(obj);
    };
    
    Observable.prototype.unobserve = function unobserveObject(obj) {
        for (var i = 0, len = this.subsciber.length; i < len; i++) {
            if (this.subsciber[i] === obj) {
                this.subsciber.splice(i, 1);
                console.log('removed existing observer');
                return true;
            }
        }
        return false;
    };
    
    Observable.prototype.notify = function notifyObservers() {
        var args = Array.prototype.slice.call(arguments, 0);
        for (var i = 0, len = this.subsciber.length; i < len; i++) {
            this.subsciber[i].update.apply(null, args);
        }
    };
    
    Observable.set = function (val) {
                //that.update(obj, val);
                //this.notify();
    };
    
    return Observable;
})(this);

this.on = function (dom, state, fn) {

};

//#region todo move to on() module 
var scrollTopSubs = {};
var scrollDownSubs = {};

this.onScrollDown = function (Y, fn) {
    scrollDownSubs[Y] = scrollDownSubs[Y] || [];
    scrollDownSubs[Y].push(fn);
};
this.onScrollTop = function (Y, fn) {
    scrollTopSubs[Y] = scrollTopSubs[Y] || [];
    scrollTopSubs[Y].push(fn);
};
//#endregion

this.onscroll = (function (onscroll) {
    var methods = [];
    window.onscroll = function () {
        that.each(methods, function (method) {
            method();
        });
    };
    return function (fn) {
        methods.push(fn);
    };
})(window.onscroll);

this.onscroll(function () {
    var cs = window.scrollY;
    that.each(scrollTopSubs, function (state, key) {
        if (key < cs) {
            that.each(scrollTopSubs[key], function (handler) {
                handler();
            });
        }
    });
    that.each(scrollDownSubs, function (state, key) {
        if (key > cs) {
            that.each(scrollDownSubs[key], function (handler) {
                handler();
            });
        }
    });
});

this.partial = function (obj, keys) {
    if (DEBUG) {
        if (_.is.not.object(obj)) debugger;
        if (_.is.not.defined(keys)) debugger;
    }
    
    var res = {};
    
    if (_.is.not.array(keys))
        keys = _.report.skeleton(keys);
    
    for (var i = 0, key; key = keys[i]; i++) {
        var keyParts = key.split('.');
        var resultKey = keyParts.shift();
        var path = [keyParts.join('.')];
        if (DEBUG) {
            if (_.is.not.defined(obj[resultKey])) debugger;
        }
        if (_.is.not.contain(key, '\\.')) {
            res[key] = obj[key];
        } else if (_.is.contain(key, '\\.')) {
            res[resultKey] = _.assignIfNotDefined(res[resultKey] || {});
            res[resultKey] = _.merge(res[resultKey] , _.partial(obj[resultKey] , path));
        }
    }
    return res;
};
this.pascalCase = function (str) {
    if (DEBUG) {
        if (!str) debugger;
    }
    str = _.camelCase(str);
    return str[0].toUpperCase() + str.substr(1, str.lenght);
};
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

this.preventEvent = function (e) {
    var eve = e || window.event;
    eve.preventDefault();
    eve.stopPropagation();
};

this.propByPrefix = function (obj, prefix, removePrefixFromKey) {
    removePrefixFromKey = _.assignIfNotDefined(removePrefixFromKey, false);
    var properties = {};
    for (var key in obj) {
        if (key.search(prefix) === 0) {
            //TODO : think about camelCase
            var propName = (removePrefixFromKey) ? _.camelCase(key.substr(prefix.length)) : key;
            properties[propName] = obj[key];
        }
    }
    return properties;
};
this.prototype = (function (_, undefined) {
    var prototype = function () { };
    
    prototype.extend = function (constructor_obj, prototypeObj) {
        var constructor = _.if.is.not.function(constructor_obj, function () {
            return _.get.constructor(constructor_obj);
        });
        for (var i in prototypeObj) {
            if (prototypeObj.hasOwnProperty(i)) {
                constructor_obj.prototype[i] = prototypeObj[i];
            }
        }
    };
    
    return prototype;
})(this);

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
        var pubType = type || 'any',
            subscribers = this.subscribers[pubType],
            max = subscribers.length;
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
this.randColor = function () {
    var r = this.random(1, 256).toFixed();
    var g = this.random(1, 256).toFixed();
    var b = this.random(1, 256).toFixed();
    var a = 1;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

this.randJson = function (len, props) {
    var res = [];
    _.repeat(len, function () {
        var item = {};
        _.each(props, function (prop) {
            if (prop.type == 'string') {
                item[prop.name] = _.randString(6);
            } else if (prop.type == 'number') {
                item[prop.name] = _.random(0, 9);
            }
        }, this);
        res.push(item);
    }, this);
    return res;
};
this.randString = function (len) {
    var res = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    _.repeat(len, function () {
        res += possible[_.random(0, possible.length).toFixed()];
    }, this);
    
    return res;
};

this.random = function (min, max) {
    return ((max - min) * Math.random()) + min;
};

this.ready = (function () {
    var repos = [];
    return function (fn) {
        repos.push(fn);
        if (document.readyState == "interactive" || document.readyState == "complete") {
            fn();
            return;
        }
        document.addEventListener('DOMContentLoaded', fn, true);
    };
})();

this.recursive = function () { };

this.regex = (function (_) {
    var type = {
        number: /\d+/g
    };
    var fn = _.fn;
    
    fn.match = function (str) {
        return str.match(type.number);
    };
    fn.matchFirst = function (str) {
        return str.match(type.number)[0];
    };
    fn.type = type;
    return fn;
})(this);

this.regularCase = function (str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
};

this.remove = function (ar, idx) {
    if (DEBUG) {
        if (_.is.not.array(ar)) this.fail('is Not Array');
        if (ar.length < idx) this.fail('greeter that array length');
    }
    
    return (obj.length > idx)? (obj.splice(idx, len || 1)) : null;
};
this.removeEventArg = function (a) {
    _.each(a, function (i, j) {
        if (i.currentScope && i.targetScope)
            _.remove(a, j);
    }, this);
};

this.repeat = function (len, fn, context) {
    var res = [];
    for (var i = 0; i < len; i++) {
        res.push(fn.call(context));
    }
    return res;
};

this.replaceInArray = function (array, from, replaceBy) {
    Array.prototype.splice.apply(array, [from, replaceBy.length + from].concat(replaceBy));
};
;this.report = (function (_) {
    var Fn = function (object, depts, path) {
        var depts = depts || 0;
        var path = path || "";
        var temp = {};
        var nodes = []
        
        depts++;
        if (_.is.object(object)) {
            temp = {};
            for (var key in object) {
                var isArray = _.is.array(object[key]),
                    isObject = _.is.object(object[key]),
                    keyPath = (path)? path + '.' + key:key;
                temp.name = key;
                temp.path = keyPath;
                temp.depts = depts;
                temp.type = 'value';
                temp.isLastNode = !(isArray || isObject);
                if (_.is.object(object[key]))
                    temp['type'] = 'object';
                if (_.is.array(object[key]))
                    temp['type'] = 'array';
                
                nodes.push(_.cloneObj(temp));
                
                if (isObject)
                    nodes = nodes.concat(that.report(object[key], depts, keyPath));
                if (isArray)
                    nodes = nodes.concat(that.report(object[key][0], depts, keyPath));
            }
        }
        return nodes;
    }
    
    Fn.skeleton = function (obj) {
        return _.array.compact(_.map(Fn(obj), function (i) {
            return (i.isLastNode)? i.path:false;
        }));
    };
    
    return Fn;
}(this));
this.rightCurry = (function (_) {
    return function (fn) {
        return function (/*right args*/) {
            var rightArgs = _.argToArray(arguments);
            return function (/*left args*/) {
                var args = _.array.concat(that.argToArray(arguments), rightArgs);
                return fn.apply(_, args);
            };
        };
    };
}(this))
this.runInFunc = function (fn) {
    if (this.is.not.function(fn)) this.warn(fn + 'is not function');
    return function () {
        fn();
    };
};

this.safeAssignArray = function (to, from) {
    this.replaceInArray(to, 0, from);
};

this.safeClear = function (objOrArr) {
    //if (this.not(this.is.array, objOrArr)) this.warn('safeClear function accept array for argument');
    if (_.is.array(objOrArr)) {
        Array.prototype.splice.apply(objOrArr, [0, objOrArr.length].concat([]));
    } else {
        for (var i in objOrArr) {
            if (objOrArr.hasOwnProperty(i)) {
                delete objOrArr[i];
            }
        }
    }
};
this.scope = function () {
    var Scope = function () {
        this.fn = {};
        this.data = {};
        this.config = {};
        this.option = {};
        this.event = {};
        this.module = {};
        this.const = {};
    };
    return new Scope();
};

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

//todo : move to DOM namespace
this.select = function (selectorOrDom, parent) {
    parent = parent || document.body;
    var nodes = '';
    if (this.is.string(selectorOrDom))
        nodes = parent.querySelectorAll(selectorOrDom);
    else
        nodes = selectorOrDom;
    if (this.is.nodeList(nodes)) nodes = this.argToArray(nodes);
    else if (this.is.HTMLCollection(nodes)) nodes = this.argToArray(nodes);
    else if (!this.is.array(nodes)) nodes = [nodes];
    
    return nodes;
};
this.selectFirst = function (selectorOrDom, parent) {
    return _.valueOf(_.select(selectorOrDom, parent), 0);
};


this.sortBy = function (obj, typeOrOperator, path) {
    if (_.is.function(typeOrOperator))
        return obj.sort(typeOrOperator);
    else {
        if (typeOrOperator == 'string')
            return obj.sort(function (a, b) {
                var textA = _.getValue(a, path).toUpperCase();
                var textB = _.getValue(b, path).toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        else if (typeOrOperator == 'number')
            return obj.sort(function (a, b) {
                return (_.getValue(a, path) > _.getValue(b, path)) ? 1 : -1;
            });
    }
};

//var that = this;
//var res = null;
//var isObject = this.is.object(obj);

//var _obj;
//if (this.is.array(obj)) {
//    _obj = this.cloneArray(obj);
//} else if (is.object(obj)) {
//    _obj = this.cloneObj(obj);

//    this.each(_obj, function (v, k) {
//        v['__key'] = k;
//    });

//    _obj = this.objToArr(obj);
//}

//if (this.is.function(typeOrOperator))
//    res = _obj.sort(typeOrOperator);
//else {
//    if (typeOrOperator == 'string')
//        res = _obj.sort(function (a, b) {
//            var textA = that.getValue(a, path).toUpperCase();
//            var textB = that.getValue(b, path).toUpperCase();
//            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//        });
//    else if (typeOrOperator == 'number')
//        res = _obj.sort(function (a, b) {
//            return (that.getValue(a, path) > that.getValue(b, path)) ? 1 : -1;
//        });
//}

//return (is.object) ? this.arrToObj(res, '__key', true) : res;

this.spliteAndTrim = function (str) {
    return _.trim(str).split(/[\s,]+/);
};

this.subSet = function (fo, so) {

};

 this.transitionCallback = function (el , fn) {
            var t = this.getTransitionEvent();
            var _fn = function () {
                fn();
                el.removeEventListener(t, _fn);
            };
            el.addEventListener(t, _fn);
        };
this.trim = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
}
this.update = function (toObj, fromObj, copyPrototype) {
    if (_.is.object(fromObj)) {
        _.each(toObj, function (value, key) {
            if (fromObj[key] !== undefined) toObj[key] = fromObj[key];
        });
    }
    return toObj;
};
this.upsert = function (container, item, indicator, updateAll) {
    if (DEBUG) {
        if (debugMode && _.is.not.array(container)) debugger;
    }
    var newItem = true;
    var selectedItems = _.each(container, function (v, i) {
        if (indicator(v)) {
            newItem = false;
            that.safeAssign(container[i], item);
        }
    });
    if (newItem) {
        container.push(item);
    }
};
this.valueOf = function (objOrArr, pathOrIndex) {
    if (arguments.length == 1) {
        pathOrIndex = objOrArr;
        objOrArr = window;
    }

    var tempobjOrArr;

    if (_.is.array(objOrArr)) return objOrArr[pathOrIndex];
    else {
        tempobjOrArr = objOrArr;
        var routes = pathOrIndex.split('.');
        for (var i = 0, route; route = routes[i]; i++) {
            if (!tempobjOrArr[route])
                return void _.warn(['dont have ', route, 'property'].join(' '));
            if (_.is.array(tempobjOrArr[route])) {
                var res = {};
                var partialRoutes = routes.splice(i + 1);
                for (var j = 0, item; item = tempobjOrArr[route][j]; j++)
                    res[j] = _.getValue2(item, partialRoutes.join('.'));
                return res;
            } else
                tempobjOrArr = tempobjOrArr[route];
        }
    }
    return tempobjOrArr;
};

this.valueOfAll = function (arrayOfObject, key) {
    var res = [];
    _.each(arrayOfObject, function (item) {
        item[key] && res.push(item[key]);
    });
    return res;
};

this.verify = function (obj, comparator) {
    if (DEBUG) {
        if (_.is.not.object(obj)) _.fail('is Not Object');
        if (_.is.not.object(comparator)) _.fail('is Not Object');
        if (!(_.haveKey(comparator, 'key') && _.haveKey(comparator, 'condition') && _.haveKey(comparator, 'value'))) _.fail('dont have correct comparator attrs');
    }
    
    var value = obj[comparator.key];
    return ((value !== undefined) && _.compare(value, comparator.condition, comparator.value));
};

this.warn = function (text) {
    console.log(['WARNING : ', text].join(' '));
    return undefined;
};

};
return {
    install: function () {
        return (instance)?instance : new U();
    },
    installTo: function (_) {
        return (Object.prototype.toString.call(_) === '[object Object]') ? U.call(_) : window[_] = this.install();
    }
};

})();

if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) {
    exports = module.exports = SUTILITY.install();;
} else {
    window.SUTILITY = SUTILITY;
}
}).call(this);