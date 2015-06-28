
var that = this;
if (DEBUG) {
    var zz = 2;
};
console.log(2);

this.merge = function (toObj, fromObj/*, copyPrototype*/) {
    //var copyPrototype = (copyPrototype != undefined) ? copyPrototype : true;
    //TODO: refactor
    if (this.is.object(fromObj)) {
        this.each(fromObj, function (value, key) {
            toObj[key] = fromObj[key];
        });
    } else if (this.is.array(fromObj)) {
        this.each(fromObj, function (value) {
            toObj.push(value);
        });
    }

            //copyPrototype && this.each(fromObj, function (value, key) {
            //	if (this.isPrototypeProp(fromObj, key)) {
            //		toObj[key] = fromObj[key];
            //	}
            //}, this)
};
this.update = function (toObj, fromObj, copyPrototype) {
    if (this.is.object(fromObj)) {
        this.each(toObj, function (value, key) {
            if (fromObj[key] !== undefined) toObj[key] = fromObj[key];
        });
    }
    return toObj;
};
this.extend = function (toObj, fromObj, proroAssign) {
    if (this.is.not.defined(toObj)) this.fail('destination object cant be null');
    
    if (this.is.array(toObj)) {
        this.safeAssignArray(toObj, fromObj);
    } else if (this.is.object(toObj)) {
        this.safeClear(toObj);
        this.each(fromObj, function (value, key) {
            toObj[key] = value;
        }, this, proroAssign);
    } else { toObj = fromObj; }
    //}  else { this.warn('safeAssign dont have correct arguments') }
    return toObj;
};
this.assignIfDefined = function (to, fnOrObj) {
    //TODO : handel fn
    return (fnOrObj !== undefined) ? that.safeAssign(to, fnOrObj) : to;
};
this.assignIfNotDefined = function (varible, fnOrObj) {
    //TODO : handel fn
    return (varible === undefined) ? fnOrObj : varible;
};
this.upsert = function (container, item, indicator, updateAll) {
    if (debugMode && this.not(this.is.array, container)) debugger;
    
    var newItem = true;
    var selectedItems = this.each(container, function (v, i) {
        if (indicator(v)) {
            newItem = false;
            that.safeAssign(container[i], item);
        }
    });
    if (newItem) {
        container.push(item);
    }
};
this.cloneObj = function (obj, prototype) {
    prototype = this.assignIfNotDefined(prototype, true);
    var temp = this.object();
    for (var key in obj) {
        if (prototype || obj.hasOwnProperty(key))
            temp[key] = obj[key];
    }
    
    return temp;
};
this.cloneArray = function (ar) {
    return ar.concat();
            //return this.map(ar, function (d) { return d })
};
this.clone = function (arOrObj) {
    if (arOrObj.concat)
        return arOrObj.concat();
    
    var temp = {};
    for (var key in arOrObj)
        temp[key] = arOrObj[key];
    return temp;
};


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
this.map = function (obj, iterator, context) {
    var results = [];
    
    this.each(obj, function (value, index, list) {
        results.push(iterator.call(context, value, index, list));
    });
    return results;
};
var filter = this.filter = function (obj, condFn) {
    var res = [];
    //if (is.object(obj)) var res = {};
    
    this.each(obj, function (item) {
        if (condFn(item))
            res.push && res.push(item);
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
this.indexOf = function (obj, idxOrIterator, context) {
    var res;
    
    if (this.is.function(idxOrIterator)) {
        this.each(obj, function (item, idx) {
            if (idxOrIterator.call(context, item))
                res = idx;
        });

    } else {
        res = obj.indexOf(idxOrIterator);
    } return res;
};
this.repeat = function (len, fn, context) {
    var res = [];
    for (var i = 0; i < len; i++) {
        res.push(fn.call(context));
    }
    return res;
};
this.extendFunc = function (fn, callBack) {
    var data = arguments[2];
    return function () {
        fn.call(this);
        callBack.call(this, data);
    };
};
this.runOnce = function () { };
this.arc = function (ctx, x, y, r, f, t, b) {
    ctx.beginPath();
    ctx.arc(x, y, r, f, t, b);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

};
this.rect = function (ctx, x, y, w, h, fill, stroke) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    if (fill !== false) ctx.fill();
    if (stroke !== false) ctx.stroke();
};
this.text = function (ctx, text, x, y) {
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.fill();
    ctx.closePath();

};
this.line = function (ctx, startPoint, endPoint) {
    ctx.beginPath();
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.closePath();
    ctx.stroke();
};
this.argToArray = function (arg) {
    return Array.prototype.slice.call(arg);
};
this.concat = function (fa, sa) {
    if (this.not(this.is.array, fa)) this.fail('is Not Array');
    if (this.not(this.is.array, sa)) this.fail('is Not Array');
    
    return fa.concat(sa);
};
this.complement = function (fn) {
    return function () {
        return !fn.apply(null, this.argToArray(arguments));
    };
};
this.not = function (fn /*args*/) {
    var args = this.argToArray(arguments);
    args.shift();
    return !fn.apply(this, args);
};
this.reverseArray = function (ar) {
    if (this.not(this.is.array, ar)) this.fail('is Not Array');
    var res = [];
    for (var i = ar.length - 1, j = 0; i >= 0; i--, j++) {
        res[j] = ar[i];
    }
    return res;
            //return map(ar, function (item) {
            //    var idx = d;
            //})
};
this.fail = function (text) {
    throw new Error(text);
};
this.warn = function (text) {
    console.log(['WARNING : ', text].join(' '));
    return undefined;
};
this.note = function (text) {
    console.log(['NOTE : ', text].join(' '));
};
this.remove = function (ar, idx) {
    if (this.not(this.is.array, ar)) this.fail('is Not Array');
    if (ar.length < idx) this.fail('greeter that array length');
    
    ar = ar.splice(idx, 1);
    return ar;
};
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
//TODO:: use "getValue"
this.haveKey = function (obj, path) {
    if (this.not(this.is.object, obj)) this.warn('is Not Object');
    var tempObj = obj;
    var routes = path.split('.');
    for (var i = 0, route; route = routes[i]; i++) {
        if (!tempObj[route] && tempObj[route] !== 0) {
            this.warn(['dont have ', route, 'property'].join(' '));
            return false;
        }
        //if (i == len - 1)
        //    return (tempObj[route]) ? true : false;
        
        if (this.is.not.array(tempObj[route])) {
            tempObj = tempObj[route];
        }
    }
    return true;
};
//TODO: get array obj value
this.valueOf = function (objOrArr, pathOrIndex) {
    //if (this.not(this.is.object, obj)) this.fail('is Not Object')
    var tempobjOrArr;
    
    if (this.is.array(objOrArr)) {
        return objOrArr[pathOrIndex];
    } else {
        tempobjOrArr = objOrArr;
        var routes = pathOrIndex.split('.');
        for (var i = 0, route; route = routes[i]; i++) {
            if (!tempobjOrArr[route]) {
                this.warn(['dont have ', route, 'property'].join(' '));
                return null;
            }
            if (this.is.array(tempobjOrArr[route])) {
                var res = {};
                var partialRoutes = routes.splice(i + 1);
                for (var j = 0, item; item = tempobjOrArr[route][j]; j++) {
                    res[j] = this.getValue2(item, partialRoutes.join('.'));
                }
                return res;
            } else {
                tempobjOrArr = tempobjOrArr[route];
            }
        }

    }
    return tempobjOrArr;
};
this.getValue = function (obj, path) {
    if (!obj) return undefined;
    //if (debugMode && !(obj & path)) debugger;
    if (!obj) return this.warn('UTILITY getValue function first parameter not defined');
    
    if (obj[path] !== null) return obj[path];
    
    path = path.split('.');
    var i = 0;
    var res = obj[path[i++]];
    while (i < path.length) {
        res = res[path[i++]];
    }
    return (i == path.length) ? res : null;
};
this.toString = function (obj) {
    if (this.not(this.is.object, obj)) this.fail('is not object');
    var str = '';
    for (var key in obj) {
        if (this.is.object(obj[key])) {
            str += this.toString(obj[key]);
        } else {
            str += ' , ';
            str += obj[key];
        }
    }
    return str;
};
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
this.multiply = function (fn, ln) {
    return fn * ln;
};
this.leftCurry = function (fn, context) {
    context = context || that;
    return function (/*left args*/) {
        var leftArgs = that.argToArray(arguments);
        return function (/*right args*/) {
            var args = that.concat(leftArgs, that.argToArray(arguments));
            return fn.apply(context, args);
        };
    };
};
this.rightCurry = function (fn) {
    return function (/*right args*/) {
        var rightArgs = that.argToArray(arguments);
        return function (/*left args*/) {
            var args = that.concat(that.argToArray(arguments), rightArgs);
            return fn.apply(that, args);
        };
    };
};
this.random = function (min, max) {
    return ((max - min) * Math.random()) + min;
};
this.runInFunc = function (fn) {
    if (this.not(this.is.function, fn)) this.warn(fn + 'is not function');
    return function () {
        fn();
    };
};
this.randJson = function (len, props) {
    var res = [];
    this.repeat(len, function () {
        var item = {};
        this.each(props, function (prop) {
            if (prop.type == 'string') {
                item[prop.name] = this.randString(6);
            } else if (prop.type == 'number') {
                item[prop.name] = this.random(0, 9);
            }
        }, this);
        res.push(item);
    }, this);
    return res;
};
this.randString = function (len) {
    var res = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    this.repeat(len, function () {
        res += possible[this.random(0, possible.length).toFixed()];
    }, this);
    
    return res;
};
this.randColor = function () {
    var r = this.random(1, 256).toFixed();
    var g = this.random(1, 256).toFixed();
    var b = this.random(1, 256).toFixed();
    var a = 1;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
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
this.getXHR = function () {
    var instance = new XMLHttpRequest();
    return instance;
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
this.exec = function (/*fn , context , arg*/) {
    var args = this.argToArray(arguments);
    var fn = args.shift();
    var context = args.shift();
    var arg = args.shift();
    
    if (this.not(this.is.function, fn)) this.warn(fn + 'is not function');
    
    return fn.apply(context || null, arg);
};

this.keys = function (/*obj*/) {
    var args = this.argToArray(arguments);
    var obj = args[0];
    var res = [];
    this.each(obj, function (value, key) {
        res.push(key);
    });
    return res;
};
this.valueOfAll = function (arrayOfObject, key) {
    var res = [];
    this.each(arrayOfObject, function (item) {
        item[key] && res.push(item[key]);
    });
    return res;
};

this.objToTwoDimArray = function (/*obj*/) {
    var args = this.argToArray(arguments);
    var obj = args[0];
    var res = [];
    this.each(obj, function (itemValue, itemKey) {
        var temp = [];
        temp[0] = [itemValue];
        temp[1] = [itemKey];
        res.push(temp);
    });
    return res;
};
this.arrToObj = function (/*arr , key , removeKey*/) {
    var args = this.argToArray(arguments);
    var arr = args.shift();
    var key = args.shift();
    var removeKey = args.shift();
    
    var res = {};
    this.each(arr, function (item) {
        var temp = item[key];
        if (removeKey) delete item[key];
        
        res[temp] = item;
    });
    return res;
};
this.contain = function (obj, value) {
    //TODO
    for (var i = 0; i < obj.length; i++)
        if (obj[i] == value)
            return true;
    
    //this.each(obj, this.exec(this.equal, fv, sv))
    return false;
};
this.subSet = function (fo, so) {

};
this.remove = function (obj, idx, len) {
    return ((this.is.array(obj)) && (obj.length > idx)) ? (obj.splice(idx, (len) ? len : 1)) : null;
};
this.categorize = function (obj, key) {
    var res = {};
    this.each(obj, function (item) {
        var temp = item[key].toString();
        res[temp] = res[temp] || [];
        res[temp].push(item);
    });
    return res;
};
this.sortBy = function (obj, typeOrOperator, path) {
    var that = this;
    
    if (this.is.function(typeOrOperator))
        return obj.sort(typeOrOperator);
    else {
        if (typeOrOperator == 'string')
            return obj.sort(function (a, b) {
                var textA = that.getValue(a, path).toUpperCase();
                var textB = that.getValue(b, path).toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        else if (typeOrOperator == 'number')
            return obj.sort(function (a, b) {
                return (that.getValue(a, path) > that.getValue(b, path)) ? 1 : -1;
            });
    }
};
this.sortBy2 = function (obj, typeOrOperator, path) {
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
};
this.groupBy = function (obj, prop, fn) {
    fn = fn || this.return;
    var res = {};
    this.each(obj, function (item) {
        var flag = item.data[prop];
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};
this.groupIf = function (obj, cond, fn) {
    fn = fn || this.return;
    var res = {};
    this.each(obj, function (item) {
        var flag = cond(item);
        res[flag] = res[flag] || [];
        res[flag].push(fn(item));
    });
    return res;
};
this.groupByFlatMode = function (/*obj, props*/) {
    var that = this;
    var args = this.argToArray(arguments);
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
    var args = this.argToArray(arguments);
    var obj = args.shift();
    var props = args.shift();
    var prop = props.shift();
    var fn = args.shift();
    var res = {};
    
    var grouped = that.groupBy(obj, prop, fn);
    
    this.each(grouped, function (group, i) {
        if (props.length > 0) {
            grouped[i] = that.groupByTreeMode.call(that, group, _.cloneArray(props), fn);
        }
    });
    obj = grouped;
    return obj;
};
this.indexBy = function () { };
this.countBy = function () { };
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
this.verify = function (obj, comparator) {
    if (this.not(this.is.object, obj)) this.fail('is Not Object');
    if (this.not(this.is.object, comparator)) this.fail('is Not Object');
    if (!(this.haveKey(comparator, 'key') && this.haveKey(comparator, 'condition') && this.haveKey(comparator, 'value'))) this.fail('dont have correct comparator attrs');
    
    var value = obj[comparator.key];
    return ((value !== undefined) && _.compare(value, comparator.condition, comparator.value));
};
this.replaceInArray = function (array, from, replaceBy) {
    Array.prototype.splice.apply(array, [from, replaceBy.length + from].concat(replaceBy));
};
this.safeAssignArray = function (to, from) {
    this.replaceInArray(to, 0, from);
};
this.safeClear = function (objOrArr) {
    //if (this.not(this.is.array, objOrArr)) this.warn('safeClear function accept array for argument');
    if (this.is.array(objOrArr)) {
        Array.prototype.splice.apply(objOrArr, [0, objOrArr.length].concat([]));
    } else {
        for (var i in objOrArr) {
            if (objOrArr.hasOwnProperty(i)) {
                delete objOrArr[i];
            }
        }
    }
};
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
this.recursive = function () { };
this.fn = function () {
    return function () { };
};
this.constValue = function (d) {
    var v = d;
    return function self() { return v; };
};
this.i = function (i) {
    return i;
};

this.propByPrefix = function (obj, prefix, removePrefixFromKey) {
    removePrefixFromKey = _.assignIfNotDefined(removePrefixFromKey, false);
    var properties = {};
    for (var key in obj) {
        if (key.search(prefix) === 0) {
            //TODO : think about camelCase
            var propName = (removePrefixFromKey) ? this.camelCase(key.substr(prefix.length)) : key;
            properties[propName] = obj[key];
        }
    }
    return properties;

};
this.camelCase = function (str) {
    if (!str) debugger;
    return str.replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
};
this.pascalCase = function (str) {
    if (!str) debugger;
    return str[0].toUpperCase() + str.substr(1, str.lenght);
};
this.regularCase = function (str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
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
this.spliteAndTrim = function (str) {
    return str.split(/[\s,]+/);
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
this.removeEventArg = function (a) {
    this.each(a, function (i, j) {
        if (i.currentScope && i.targetScope)
            this.remove(a, j);
    }, this);
};
this.dataset = (function (_, undefined) {
    var dataset = function () { };
    
    dataset.add = function () { };
    dataset.get = function (el, name) {
        return el.dataset[name];
    };
    
    return dataset;
})(this);
this.attr = (function (_, undefined) {
    var attr = function () { };
    
    return attr;
})(this);

//#region remove from utility
this.className.add = function (selectorOrDom, className) {
    this.warn('change refrence');
    var nodes = this.select(selectorOrDom);
    
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
this.className.remove = function (selectorOrDom, className) {
    this.warn('change refrence');
    
    var nodes = this.select(selectorOrDom);
    
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].classList) {
            DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
            continue;
        }
        
        var reg = new RegExp(className, 'g');
        nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
    }
};
this.changeClass = function (selectorOrDom, className, replaceWith) {
    this.warn('change refrence');
    var nodes = this.select(selectorOrDom);
    _.className.remove(nodes, className);
    _.className.add(nodes, replaceWith);
};
//#endregion

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
this.cancelBubble = function (e) {
    var evt = e ? e : window.event;
    if (evt.stopPropagation) evt.stopPropagation();
    if (evt.cancelBubble !== null) evt.cancelBubble = true;
};
this.config = function (prop, obj) {
    for (var k in prop) {
        this[k] = obj && obj[k] || prop[k];
    }
};
this.ready = (function () {
    var repos = [];
    return function (fn) {
        repos.push(fn);
        if (document.readyState == "interactive") {
            fn();
            return;
        }
        document.addEventListener('DOMContentLoaded', fn, true);
    };
})();
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
                var filePath = e.path[0].getAttribute('src');
                filePath = filePath.substring(1, filePath.length);
                
                loadedFiles[path].state = true;
                for (var i = 0, fn; fn = loadedFiles[path].callbacks[i]; i++) {
                    fn(filePath, path);
                }
            };
            script.setAttribute("src", '/' + path);
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
})(this);
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
this.decorator = function () { };
//#endregion

//TODO
this.impelemetIn = function (child) { };

//TODO
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

//todo : move to pub/sub
this.on = function (dom, state, fn) {

};
this.event = function (domOrSelector, state, fn) {
    var nodes = this.select(domOrSelector);
    this.each(nodes, function (node) {
        node.addEventListener(state, fn);
    });
};
this.fixEvent = function (e) {
    window.event = window.event || e;
};
this.bind = function (el, obj, decorator) {
    decorator = decorator || this.i;
};
this.activated = function (parentOrSelector, selector, classname, callback) {
    classname = classname || 'active';
    var parents = _.select(parentOrSelector);
    _.each(parents, function (parent) {
        var nodes = _.select(selector, parent);
        _.each(nodes, function (node) {
            _.event(node, 'click', function () {
                _.className.remove(nodes, classname);
                _.className.add(node, classname);
                callback && callback(this);
            });
        });
    });
};

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
//this.append = 
this.shift = function first(array, callback) {
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
//#endregion

this.preventEvent = function (e) {
    var eve = e || window.event;
    eve.preventDefault();
    eve.stopPropagation();
};

this.object = function (init) {
    var Fn = _.fn();
    return _.extend(new Fn(), init);
};

//todo : added by the team
this.strStartsWith = function (str, prefix) {
    return str.indexOf(prefix) === 0;
};

//#region init

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

//#endregion
