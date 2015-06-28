/**
 * sutility v0.0.1 - 2015-06-27
 * Functional Library
 *
 * Copyright (c) 2015 soushinas noorghorbani <snoorghorbani@gmail.com>
 * Licensed MIT
 */
(function(undefined) {
    "use strict";
    var debugMode = !0, UTILITY = function() {
        var U = function() {
            var that = this;
            this.merge = function(toObj, fromObj) {
                this.is.object(fromObj) ? this.each(fromObj, function(value, key) {
                    toObj[key] = fromObj[key];
                }) : this.is.array(fromObj) && this.each(fromObj, function(value) {
                    toObj.push(value);
                });
            }, this.update = function(toObj, fromObj, copyPrototype) {
                return this.is.object(fromObj) && this.each(toObj, function(value, key) {
                    fromObj[key] !== undefined && (toObj[key] = fromObj[key]);
                }), toObj;
            }, this.extend = function(toObj, fromObj, proroAssign) {
                return this.is.not.defined(toObj) && this.fail("destination object cant be null"), 
                this.is.array(toObj) ? this.safeAssignArray(toObj, fromObj) : this.is.object(toObj) ? (this.safeClear(toObj), 
                this.each(fromObj, function(value, key) {
                    toObj[key] = value;
                }, this, proroAssign)) : toObj = fromObj, toObj;
            }, this.assignIfDefined = function(to, fnOrObj) {
                return fnOrObj !== undefined ? that.safeAssign(to, fnOrObj) : to;
            }, this.assignIfNotDefined = function(varible, fnOrObj) {
                return varible === undefined ? fnOrObj : varible;
            }, this.upsert = function(container, item, indicator, updateAll) {
                debugMode && this.not(this.is.array, container);
                var newItem = !0;
                this.each(container, function(v, i) {
                    indicator(v) && (newItem = !1, that.safeAssign(container[i], item));
                });
                newItem && container.push(item);
            }, this.cloneObj = function(obj, prototype) {
                prototype = this.assignIfNotDefined(prototype, !0);
                var temp = this.object();
                for (var key in obj) (prototype || obj.hasOwnProperty(key)) && (temp[key] = obj[key]);
                return temp;
            }, this.cloneArray = function(ar) {
                return ar.concat();
            }, this.clone = function(arOrObj) {
                if (arOrObj.concat) return arOrObj.concat();
                var temp = {};
                for (var key in arOrObj) temp[key] = arOrObj[key];
                return temp;
            }, this.each = function(obj, iterator, context, onProto) {
                if (onProto = this.assignIfNotDefined(onProto, !1), !obj) return !1;
                this.is.nodeList(obj) && this.each(this.argToArray(obj), iterator, context);
                var key;
                if (this.is.array(obj) || this.is["function"](obj)) for (key in obj) (obj.hasOwnProperty(key) || onProto) && iterator.call(context, obj[key], key);
                if (this.is.object(obj)) for (key in obj) (obj.hasOwnProperty(key) || onProto) && iterator.call(context, obj[key], key);
            }, this.map = function(obj, iterator, context) {
                var results = [];
                return this.each(obj, function(value, index, list) {
                    results.push(iterator.call(context, value, index, list));
                }), results;
            };
            this.filter = function(obj, condFn) {
                var res = [];
                return this.each(obj, function(item) {
                    condFn(item) && res.push && res.push(item);
                }), res;
            };
            this.fine = function(ar, fn) {
                var status = !0;
                return _.each(ar, function(i) {
                    fn(i) || (status = !1);
                }), status;
            }, this.indexOf = function(obj, idxOrIterator, context) {
                var res;
                return this.is["function"](idxOrIterator) ? this.each(obj, function(item, idx) {
                    idxOrIterator.call(context, item) && (res = idx);
                }) : res = obj.indexOf(idxOrIterator), res;
            }, this.repeat = function(len, fn, context) {
                for (var res = [], i = 0; len > i; i++) res.push(fn.call(context));
                return res;
            }, this.extendFunc = function(fn, callBack) {
                var data = arguments[2];
                return function() {
                    fn.call(this), callBack.call(this, data);
                };
            }, this.runOnce = function() {}, this.arc = function(ctx, x, y, r, f, t, b) {
                ctx.beginPath(), ctx.arc(x, y, r, f, t, b), ctx.closePath(), ctx.fill(), ctx.stroke();
            }, this.rect = function(ctx, x, y, w, h, fill, stroke) {
                ctx.beginPath(), ctx.rect(x, y, w, h), ctx.closePath(), fill !== !1 && ctx.fill(), 
                stroke !== !1 && ctx.stroke();
            }, this.text = function(ctx, text, x, y) {
                ctx.beginPath(), ctx.fillText(text, x, y), ctx.fill(), ctx.closePath();
            }, this.line = function(ctx, startPoint, endPoint) {
                ctx.beginPath(), ctx.moveTo(startPoint.x, startPoint.y), ctx.lineTo(endPoint.x, endPoint.y), 
                ctx.closePath(), ctx.stroke();
            }, this.argToArray = function(arg) {
                return Array.prototype.slice.call(arg);
            }, this.concat = function(fa, sa) {
                return this.not(this.is.array, fa) && this.fail("is Not Array"), this.not(this.is.array, sa) && this.fail("is Not Array"), 
                fa.concat(sa);
            }, this.complement = function(fn) {
                return function() {
                    return !fn.apply(null, this.argToArray(arguments));
                };
            }, this.not = function(fn) {
                var args = this.argToArray(arguments);
                return args.shift(), !fn.apply(this, args);
            }, this.reverseArray = function(ar) {
                this.not(this.is.array, ar) && this.fail("is Not Array");
                for (var res = [], i = ar.length - 1, j = 0; i >= 0; i--, j++) res[j] = ar[i];
                return res;
            }, this.fail = function(text) {
                throw new Error(text);
            }, this.warn = function(text) {
                return undefined;
            }, this.note = function(text) {}, this.remove = function(ar, idx) {
                return this.not(this.is.array, ar) && this.fail("is Not Array"), ar.length < idx && this.fail("greeter that array length"), 
                ar = ar.splice(idx, 1);
            }, this.compileString = function(str, varDef, fn) {
                var regex = /\{\{/, result = [], varStartIdx = str.search(regex);
                if (varStartIdx > -1) {
                    result[result.length] = str.substring(0, varStartIdx), str = str.substring(varStartIdx);
                    var varEndIdx = str.search(/\}\}/), varKey = str.substring(2, varEndIdx), varValue = varDef[varKey.trim()];
                    this.is.object(varValue) && (varValue = fn.call(null, varValue)), result[result.length] = varValue, 
                    str = str.substring(varEndIdx + 2), result = result.concat(this.compileString(str, varDef, fn));
                } else result[result.length] = str;
                return result.join("");
            }, this.haveKey = function(obj, path) {
                this.not(this.is.object, obj) && this.warn("is Not Object");
                for (var route, tempObj = obj, routes = path.split("."), i = 0; route = routes[i]; i++) {
                    if (!tempObj[route] && 0 !== tempObj[route]) return this.warn([ "dont have ", route, "property" ].join(" ")), 
                    !1;
                    this.is.not.array(tempObj[route]) && (tempObj = tempObj[route]);
                }
                return !0;
            }, this.valueOf = function(objOrArr, pathOrIndex) {
                var tempobjOrArr;
                if (this.is.array(objOrArr)) return objOrArr[pathOrIndex];
                tempobjOrArr = objOrArr;
                for (var route, routes = pathOrIndex.split("."), i = 0; route = routes[i]; i++) {
                    if (!tempobjOrArr[route]) return this.warn([ "dont have ", route, "property" ].join(" ")), 
                    null;
                    if (this.is.array(tempobjOrArr[route])) {
                        for (var item, res = {}, partialRoutes = routes.splice(i + 1), j = 0; item = tempobjOrArr[route][j]; j++) res[j] = this.getValue2(item, partialRoutes.join("."));
                        return res;
                    }
                    tempobjOrArr = tempobjOrArr[route];
                }
                return tempobjOrArr;
            }, this.getValue = function(obj, path) {
                if (!obj) return undefined;
                if (!obj) return this.warn("UTILITY getValue function first parameter not defined");
                if (null !== obj[path]) return obj[path];
                path = path.split(".");
                for (var i = 0, res = obj[path[i++]]; i < path.length; ) res = res[path[i++]];
                return i == path.length ? res : null;
            }, this.toString = function(obj) {
                this.not(this.is.object, obj) && this.fail("is not object");
                var str = "";
                for (var key in obj) this.is.object(obj[key]) ? str += this.toString(obj[key]) : (str += " , ", 
                str += obj[key]);
                return str;
            }, this["interface"] = function(obj, decl) {}, this.multiply = function(fn, ln) {
                return fn * ln;
            }, this.leftCurry = function(fn, context) {
                return context = context || that, function() {
                    var leftArgs = that.argToArray(arguments);
                    return function() {
                        var args = that.concat(leftArgs, that.argToArray(arguments));
                        return fn.apply(context, args);
                    };
                };
            }, this.rightCurry = function(fn) {
                return function() {
                    var rightArgs = that.argToArray(arguments);
                    return function() {
                        var args = that.concat(that.argToArray(arguments), rightArgs);
                        return fn.apply(that, args);
                    };
                };
            }, this.random = function(min, max) {
                return (max - min) * Math.random() + min;
            }, this.runInFunc = function(fn) {
                return this.not(this.is["function"], fn) && this.warn(fn + "is not function"), function() {
                    fn();
                };
            }, this.randJson = function(len, props) {
                var res = [];
                return this.repeat(len, function() {
                    var item = {};
                    this.each(props, function(prop) {
                        "string" == prop.type ? item[prop.name] = this.randString(6) : "number" == prop.type && (item[prop.name] = this.random(0, 9));
                    }, this), res.push(item);
                }, this), res;
            }, this.randString = function(len) {
                var res = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                return this.repeat(len, function() {
                    res += possible[this.random(0, possible.length).toFixed()];
                }, this), res;
            }, this.randColor = function() {
                var r = this.random(1, 256).toFixed(), g = this.random(1, 256).toFixed(), b = this.random(1, 256).toFixed();
                return "rgb(" + r + "," + g + "," + b + ")";
            }, this.idMode = function(ar, iden) {
                for (var item, res = {}, i = 0; item = ar[i]; i++) item[iden] && (res[item[iden]] = item, 
                res[item[iden]].active = "");
                return res;
            }, this.getXHR = function() {
                var instance = new XMLHttpRequest();
                return instance;
            }, this.getJSON = function(options, callback) {
                var xhttp = this.getXHR();
                options.url = options.url || location.href, options.data = options.data || null, 
                callback = callback || function() {}, options.type = options.type || "json";
                var url = options.url;
                if ("jsonp" == options.type) {
                    window.jsonCallback = callback;
                    var $url = url.replace("callback=?", "callback=jsonCallback"), script = document.createElement("script");
                    script.src = $url, document.body.appendChild(script);
                }
                xhttp.open("GET", options.url, !0), xhttp.send(options.data), xhttp.onreadystatechange = function() {
                    200 == xhttp.status && 4 == xhttp.readyState && callback(xhttp.responseText);
                };
            }, this.exec = function() {
                var args = this.argToArray(arguments), fn = args.shift(), context = args.shift(), arg = args.shift();
                return this.not(this.is["function"], fn) && this.warn(fn + "is not function"), fn.apply(context || null, arg);
            }, this.objectKeys = function() {
                var args = this.argToArray(arguments), obj = args[0], res = [];
                return this.each(obj, function(value, key) {
                    res.push(key);
                }), res;
            }, this.valueOfAll = function(arrayOfObject, key) {
                var res = [];
                return this.each(arrayOfObject, function(item) {
                    item[key] && res.push(item[key]);
                }), res;
            }, this.objToTwoDimArray = function() {
                var args = this.argToArray(arguments), obj = args[0], res = [];
                return this.each(obj, function(itemValue, itemKey) {
                    var temp = [];
                    temp[0] = [ itemValue ], temp[1] = [ itemKey ], res.push(temp);
                }), res;
            }, this.arrToObj = function() {
                var args = this.argToArray(arguments), arr = args.shift(), key = args.shift(), removeKey = args.shift(), res = {};
                return this.each(arr, function(item) {
                    var temp = item[key];
                    removeKey && delete item[key], res[temp] = item;
                }), res;
            }, this.contain = function(obj, value) {
                for (var i = 0; i < obj.length; i++) if (obj[i] == value) return !0;
                return !1;
            }, this.subSet = function(fo, so) {}, this.remove = function(obj, idx, len) {
                return this.is.array(obj) && obj.length > idx ? obj.splice(idx, len ? len : 1) : null;
            }, this.categorize = function(obj, key) {
                var res = {};
                return this.each(obj, function(item) {
                    var temp = item[key].toString();
                    res[temp] = res[temp] || [], res[temp].push(item);
                }), res;
            }, this.sortBy = function(obj, typeOrOperator, path) {
                var that = this;
                return this.is["function"](typeOrOperator) ? obj.sort(typeOrOperator) : "string" == typeOrOperator ? obj.sort(function(a, b) {
                    var textA = that.getValue(a, path).toUpperCase(), textB = that.getValue(b, path).toUpperCase();
                    return textB > textA ? -1 : textA > textB ? 1 : 0;
                }) : "number" == typeOrOperator ? obj.sort(function(a, b) {
                    return that.getValue(a, path) > that.getValue(b, path) ? 1 : -1;
                }) : void 0;
            }, this.sortBy2 = function(obj, typeOrOperator, path) {}, this.groupBy = function(obj, prop, fn) {
                fn = fn || this["return"];
                var res = {};
                return this.each(obj, function(item) {
                    var flag = item.data[prop];
                    res[flag] = res[flag] || [], res[flag].push(fn(item));
                }), res;
            }, this.groupIf = function(obj, cond, fn) {
                fn = fn || this["return"];
                var res = {};
                return this.each(obj, function(item) {
                    var flag = cond(item);
                    res[flag] = res[flag] || [], res[flag].push(fn(item));
                }), res;
            }, this.groupByFlatMode = function() {
                var that = this, args = this.argToArray(arguments), obj = args.shift(), props = args.shift(), res = {};
                return this.each(obj, function(item) {
                    var flag = "";
                    that.each(props, function(prop) {
                        flag += "_" + item[prop];
                    }), res[flag] = res[flag] || [], res[flag].push(item);
                }), res;
            }, this.groupByTreeMode = function() {
                var that = this, args = this.argToArray(arguments), obj = args.shift(), props = args.shift(), prop = props.shift(), fn = args.shift(), grouped = that.groupBy(obj, prop, fn);
                return this.each(grouped, function(group, i) {
                    props.length > 0 && (grouped[i] = that.groupByTreeMode.call(that, group, _.cloneArray(props), fn));
                }), obj = grouped;
            }, this.indexBy = function() {}, this.countBy = function() {}, this.flatTreeBy = function(data, childAttr, parentAttr, res, parentIdn, defaultRootValue, depth) {
                res = res || [], depth = depth || 0, _.each(_.cloneObj(data), function(item) {
                    item.parentIdn = parentIdn || defaultRootValue || "root", item.depth = depth, res.push(item), 
                    item[childAttr] && item[childAttr].length > 0 && that.flatTreeBy(item[childAttr], childAttr, parentAttr, res, item[parentAttr], defaultRootValue, depth + 1), 
                    delete item[childAttr];
                });
            }, this.verify = function(obj, comparator) {
                this.not(this.is.object, obj) && this.fail("is Not Object"), this.not(this.is.object, comparator) && this.fail("is Not Object"), 
                this.haveKey(comparator, "key") && this.haveKey(comparator, "condition") && this.haveKey(comparator, "value") || this.fail("dont have correct comparator attrs");
                var value = obj[comparator.key];
                return value !== undefined && _.compare(value, comparator.condition, comparator.value);
            }, this.replaceInArray = function(array, from, replaceBy) {
                Array.prototype.splice.apply(array, [ from, replaceBy.length + from ].concat(replaceBy));
            }, this.safeAssignArray = function(to, from) {
                this.replaceInArray(to, 0, from);
            }, this.safeClear = function(objOrArr) {
                if (this.is.array(objOrArr)) Array.prototype.splice.apply(objOrArr, [ 0, objOrArr.length ].concat([])); else for (var i in objOrArr) objOrArr.hasOwnProperty(i) && delete objOrArr[i];
            }, this.getCumulativeOffset = function(obj) {
                var left, top;
                if (left = top = 0, obj.offsetParent) do left += obj.offsetLeft, top += obj.offsetTop; while (obj = obj.offsetParent);
                return {
                    x: left,
                    y: top
                };
            }, this.recursive = function() {}, this.fn = function() {
                return function() {};
            }, this.constValue = function(d) {
                var v = d;
                return function() {
                    return v;
                };
            }, this.i = function(i) {
                return i;
            }, this.propByPrefix = function(obj, prefix, removePrefixFromKey) {
                removePrefixFromKey = _.assignIfNotDefined(removePrefixFromKey, !1);
                var properties = {};
                for (var key in obj) if (0 === key.search(prefix)) {
                    var propName = removePrefixFromKey ? this.camelCase(key.substr(prefix.length)) : key;
                    properties[propName] = obj[key];
                }
                return properties;
            }, this.camelCase = function(str) {
                return str.replace(/-(.)/g, function(match, group1) {
                    return group1.toUpperCase();
                });
            }, this.pascalCase = function(str) {
                return str[0].toUpperCase() + str.substr(1, str.lenght);
            }, this.regularCase = function(str) {
                return str.replace(/([A-Z])/g, " $1").replace(/^./, function(str) {
                    return str.toUpperCase();
                });
            }, this.extractWrapedBy = function(str, wrapper) {
                var pattern = null;
                if ("{}" == wrapper) pattern = /\{(.*?)\}/g; else if ("()" == wrapper) pattern = /\((.*?)\)/g; else {
                    if ("[]" != wrapper) return;
                    pattern = /\[(.*?)\]/g;
                }
                for (var regex = new RegExp(pattern), matched = str.match(regex), i = 0; matched && i < matched.length; i++) matched[i] = matched[i].substring(1, matched[i].length - 1);
                return matched;
            }, this.spliteAndTrim = function(str) {
                return str.split(/[\s,]+/);
            }, this.chain = function(fn, callback, context) {
                return function() {
                    var args = that.argToArray(arguments), fnResault = that.exec(fn, context || null, args), promise = fnResault ? fnResault.promise || fnResault.$promise : null;
                    return promise ? void promise.then(function() {
                        return that.exec(callback, context || null, [ fnResault ]);
                    }) : fnResault && fnResault.then ? (fnResault.then(function() {
                        var args = that.argToArray(arguments);
                        that.exec(callback, context || null, args);
                    }), fnResault) : that.exec(callback, context || null, [ fnResault ]);
                };
            }, this.removeEventArg = function(a) {
                this.each(a, function(i, j) {
                    i.currentScope && i.targetScope && this.remove(a, j);
                }, this);
            }, this.dataset = function(_, undefined) {
                var dataset = function() {};
                return dataset.add = function() {}, dataset.get = function(el, name) {
                    return el.dataset[name];
                }, dataset;
            }(this), this.attr = function(_, undefined) {
                var attr = function() {};
                return attr;
            }(this), this.addClass = function(selectorOrDom, className) {
                this.warn("change refrence");
                for (var nodes = this.select(selectorOrDom), i = 0; i < nodes.length; i++) nodes[i].classList ? DOMTokenList.prototype.add.apply(nodes[i].classList, _.spliteAndTrim(className)) : -1 === nodes[i].className.indexOf(className) && (nodes[i].className = nodes[i].className + " " + className);
            }, this.removeClass = function(selectorOrDom, className) {
                this.warn("change refrence");
                for (var nodes = this.select(selectorOrDom), i = 0; i < nodes.length; i++) if (nodes[i].classList) DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className)); else {
                    var reg = new RegExp(className, "g");
                    nodes[i].className = nodes[i].className.replace(reg, "").trim();
                }
            }, this.changeClass = function(selectorOrDom, className, replaceWith) {
                this.warn("change refrence");
                var nodes = this.select(selectorOrDom);
                _.removeClass(nodes, className), _.addClass(nodes, replaceWith);
            }, this.availableDim = function() {
                var inner = document.createElement("div");
                inner.style.position = "fixed", inner.style.top = "0px", inner.style.right = "0px", 
                inner.style.bottom = "0px", inner.style.left = "0px", document.body.appendChild(inner);
                var height = inner.offsetHeight, width = inner.offsetWidth;
                return inner.parentNode.removeChild(inner), {
                    height: height,
                    width: width
                };
            }, this.cancelBubble = function(e) {
                var evt = e ? e : window.event;
                evt.stopPropagation && evt.stopPropagation(), null !== evt.cancelBubble && (evt.cancelBubble = !0);
            }, this.config = function(prop, obj) {
                for (var k in prop) this[k] = obj && obj[k] || prop[k];
            }, this.ready = function() {
                var repos = [];
                return function(fn) {
                    return repos.push(fn), "interactive" == document.readyState ? void fn() : void document.addEventListener("DOMContentLoaded", fn, !0);
                };
            }(), this.loadJS = function(_) {
                var loadedFiles = {};
                return function(path, callback) {
                    if (loadedFiles[path]) loadedFiles[path].state ? setTimeout(function() {
                        callback(path, path);
                    }, 1) : loadedFiles[path].callbacks.push(callback); else {
                        loadedFiles[path] = {
                            state: !1,
                            callbacks: []
                        }, loadedFiles[path].callbacks.push(callback);
                        var script = document.createElement("script");
                        script.setAttribute("type", "text/javascript"), script.onload = function(e) {
                            var filePath = e.path[0].getAttribute("src");
                            filePath = filePath.substring(1, filePath.length), loadedFiles[path].state = !0;
                            for (var fn, i = 0; fn = loadedFiles[path].callbacks[i]; i++) fn(filePath, path);
                        }, script.setAttribute("src", "/" + path), document.getElementsByTagName("head")[0].appendChild(script);
                    }
                };
            }(this), this.loadCSS = function(_) {
                var loadedFiles = {};
                return function(path, callback) {
                    if (!loadedFiles[path]) {
                        var css = document.createElement("link");
                        css.setAttribute("rel", "stylesheet"), css.setAttribute("href", "/" + path), document.getElementsByTagName("head")[0].appendChild(css);
                    }
                };
            }(this), this.data = function(_) {}(this), this.scope = function() {
                var Scope = function() {
                    this.fn = {}, this.data = {}, this.config = {}, this.option = {}, this.event = {}, 
                    this.module = {}, this["const"] = {};
                };
                return new Scope();
            }, this.eventBus = {
                topics: {},
                sub: function(topic, listener) {
                    this.topics[topic] || (this.topics[topic] = []), this.topics[topic].push(listener);
                },
                unsub: function() {},
                pub: function(topic, data) {
                    !this.topics[topic] || this.topics[topic].length < 1 || this.topics[topic].forEach(function(listener) {
                        listener(data || {});
                    });
                }
            }, this._Observable = {
                observers: [],
                lastId: -1,
                addObserver: function(observer) {
                    return this.observers.push({
                        callback: observer,
                        id: ++this.lastId
                    }), this.lastId;
                },
                removeObserver: function(id) {
                    for (var i = this.observers.length - 1; i >= 0; i--) if (this.observers[i], this.observers[i].id == id) return this.observers.splice(i, 1), 
                    !0;
                    return !1;
                },
                notifyObservers: function(message) {
                    for (var i = this.observers.length - 1; i >= 0; i--) this.observers[i].callback(message);
                }
            }, this.Observable = function(that, undefined) {
                function Observable(obj) {
                    this.subsciber = [];
                }
                return Observable.prototype.observe = function(obj) {
                    this.subsciber.push(obj);
                }, Observable.prototype.unobserve = function(obj) {
                    for (var i = 0, len = this.subsciber.length; len > i; i++) if (this.subsciber[i] === obj) return this.subsciber.splice(i, 1), 
                    !0;
                    return !1;
                }, Observable.prototype.notify = function() {
                    for (var args = Array.prototype.slice.call(arguments, 0), i = 0, len = this.subsciber.length; len > i; i++) this.subsciber[i].update.apply(null, args);
                }, Observable.set = function(val) {}, Observable;
            }(this), this.decorator = function() {}, this.impelemetIn = function(child) {}, 
            this.freezable = function(_, undefined) {
                var o = {};
                return o.freeze = function(key) {}, o.unfreeze = function(key) {}, function(constructor_obj) {};
            }(this), this.get = function() {
                var get = function() {};
                return get.constructor = function(obj) {
                    return obj.constructor;
                }, get;
            }(), this.prototype = function(_, undefined) {
                var prototype = function() {};
                return prototype.extend = function(constructor_obj, prototypeObj) {
                    _["if"].is.not["function"](constructor_obj, function() {
                        return _.get.constructor(constructor_obj);
                    });
                    for (var i in prototypeObj) prototypeObj.hasOwnProperty(i) && (constructor_obj.prototype[i] = prototypeObj[i]);
                }, prototype;
            }(this), this.on = function(dom, state, fn) {}, this.event = function(domOrSelector, state, fn) {
                var nodes = this.select(domOrSelector);
                this.each(nodes, function(node) {
                    node.addEventListener(state, fn);
                });
            }, this.fixEvent = function(e) {
                window.event = window.event || e;
            }, this.bind = function(el, obj, decorator) {
                decorator = decorator || this.i;
            }, this.activated = function(parentOrSelector, selector, classname, callback) {
                classname = classname || "active";
                var parents = _.select(parentOrSelector);
                _.each(parents, function(parent) {
                    var nodes = _.select(selector, parent);
                    _.each(nodes, function(node) {
                        _.event(node, "click", function() {
                            _.removeClass(nodes, classname), _.addClass(node, classname), callback && callback(this);
                        });
                    });
                });
            }, this.regex = function(_) {
                var type = {
                    number: /\d+/g
                }, fn = _.fn;
                return fn.match = function(str) {
                    return str.match(type.number);
                }, fn.matchFirst = function(str) {
                    return str.match(type.number)[0];
                }, fn.type = type, fn;
            }(this), this.shift = function(array, callback) {
                var item, n = 0;
                if ("number" == typeof callback) n = callback; else if (that.is["function"](callback)) for (var index = 0; callback(array[index++]); ) n++; else n++;
                return item = array.slice(0, n), that.is.array(item) && 1 === item.length ? item[0] : item;
            };
            var scrollTopSubs = {}, scrollDownSubs = {};
            this.onScrollDown = function(Y, fn) {
                scrollDownSubs[Y] = scrollDownSubs[Y] || [], scrollDownSubs[Y].push(fn);
            }, this.onScrollTop = function(Y, fn) {
                scrollTopSubs[Y] = scrollTopSubs[Y] || [], scrollTopSubs[Y].push(fn);
            }, this.onscroll = function(onscroll) {
                var methods = [];
                return window.onscroll = function() {
                    that.each(methods, function(method) {
                        method();
                    });
                }, function(fn) {
                    methods.push(fn);
                };
            }(window.onscroll), this.preventEvent = function(e) {
                var eve = e || window.event;
                eve.preventDefault(), eve.stopPropagation();
            }, this.object = function(init) {
                var Fn = _.fn();
                return _.extend(new Fn(), init);
            }, this.strStartsWith = function(str, prefix) {
                return 0 === str.indexOf(prefix);
            }, this.onscroll(function() {
                var cs = window.scrollY;
                that.each(scrollTopSubs, function(state, key) {
                    cs > key && that.each(scrollTopSubs[key], function(handler) {
                        handler();
                    });
                }), that.each(scrollDownSubs, function(state, key) {
                    key > cs && that.each(scrollDownSubs[key], function(handler) {
                        handler();
                    });
                });
            }), this.array = function(_) {
                var fn = function() {};
                fn.compact = function(arr) {
                    return _.filter(arr, _.i);
                }, fn.union = function(arrays) {
                    var temp = {}, res = [];
                    return _.each(arrays, function(arr) {
                        temp[arr] = "";
                    }), _.each(temp, function(value, key) {
                        res.push(key);
                    }), res;
                }, fn.uniq = function(arr) {};
                var baseFlatten = function(array, isDeep, isStrict) {
                    for (var index = -1, length = array.length, resIndex = -1, result = []; ++index < length; ) {
                        var value = array[index];
                        if (_.is.array(value) && (isStrict || _.is.array(value) || _.is.arguments(value))) {
                            isDeep && (value = baseFlatten(value, isDeep, isStrict));
                            for (var valIndex = -1, valLength = value.length; ++valIndex < valLength; ) result[++resIndex] = value[valIndex];
                        } else isStrict || (result[++resIndex] = value);
                    }
                    return result;
                };
                return fn.flattenDeep = function(array) {
                    var length = array ? array.length : 0;
                    return length ? baseFlatten(array, !0) : [];
                }, fn.remove = function(arr, i) {
                    return _.filter(arr, function(j) {
                        return i !== j;
                    });
                }, fn;
            }(this), this.callConstantly = function(_) {
                return function(fn, count, context) {
                    return function() {
                        --count;
                        var res;
                        return fn && (res = fn.apply(context || {}, arguments)), 0 == count && (fn = null), 
                        res;
                    };
                };
            }(this), this.callVoucher = function(_) {
                return function(fn, millisecond, context) {
                    return setTimeout(function() {
                        fn = null;
                    }, millisecond), function() {
                        return fn ? fn.apply(context || {}, arguments) : void 0;
                    };
                };
            }(this), this.catchall = function(_) {
                var instatiate = null, keys = {}, values = {}, defaultCatchAllConfig = {
                    prefix: "/defaultPrefix",
                    partialPrefix: "/defaultPrefix/defaultFilterresult",
                    replace: [ "/filter/", "/filter/filterresult/" ]
                }, defaultKeyConfig = {
                    multi: !1,
                    "default": null
                }, Fn = function(config) {
                    return this.config = _.update(_.cloneObj(defaultCatchAllConfig), config), this;
                };
                return Fn.prototype.key = function(name, config) {
                    keys[name] = _.update(_.cloneObj(defaultKeyConfig), config);
                    var pathName = decodeURIComponent(window.location.pathname), catchAlls = pathName.replace(this.config.prefix, "");
                    catchAlls = catchAlls.split("/"), _.each(catchAlls, function(ca) {
                        _.strStartsWith(ca, name + "-") && (values[name] = _.assignIfNotDefined(values[name], []), 
                        ca.length > name.length + 1 && values[name].push(ca));
                    }), Fn.prototype.add = _.assignIfNotDefined(Fn.prototype.add, {}), Fn.prototype.add[name] = function(a, b) {
                        var valueStr = name + "-" + a.toString() + (b ? "-" + b.toString() : "");
                        keys[name].multi ? (values[name] = values[name] || [], values[name].push(valueStr)) : values[name] = [ valueStr ];
                    }, Fn.prototype.remove = _.assignIfNotDefined(Fn.prototype.remove, {}), Fn.prototype.remove[name] = function(a, b) {
                        var valueStr = name + "-" + a.toString() + (b ? "-" + b.toString() : "");
                        values[name] = _.filter(values[name], function(a) {
                            return a !== valueStr;
                        });
                    }, Fn.prototype.reset = _.assignIfNotDefined(Fn.prototype.reset, {}), Fn.prototype.reset[name] = function() {
                        var defaultValue = keys[name]["default"], initByType = "";
                        initByType = _["if"].is.equal(keys[name].multi, "multi", function() {
                            return [];
                        }), values[name] = defaultValue ? defaultValue : initByType;
                    };
                }, Fn.prototype.partial = function() {
                    var url = window.location.origin + this.config.partialPrefix;
                    return _.each(values, function(value, key) {
                        _.each(value, function(str) {
                            var fine = _.fine(str.split("-"), function(a) {
                                return _.is.value(a);
                            });
                            fine && (url += "/" + str);
                        });
                    }), decodeURIComponent(url.toLowerCase());
                }, Fn.prototype.build = function(f) {
                    var url = window.location.origin + this.config.prefix;
                    return _.each(values, function(value, key) {
                        _.each(value, function(str) {
                            var fine = _.fine(str.split("-"), function(a) {
                                return _.is.value(a);
                            });
                            fine && (url += "/" + str);
                        });
                    }), decodeURIComponent(url.toLowerCase());
                }, function(config) {
                    return instatiate ? instatiate : instatiate = new Fn(config);
                };
            }(this), this.className = function(_, undefined) {
                var className = function(selectorOrDom, className) {};
                return className.add = function(selectorOrDom, className) {
                    for (var nodes = _.select(selectorOrDom), i = 0; i < nodes.length; i++) nodes[i].classList ? DOMTokenList.prototype.add.apply(nodes[i].classList, _.spliteAndTrim(className)) : -1 === nodes[i].className.indexOf(className) && (nodes[i].className = nodes[i].className + " " + className);
                }, className.remove = function(selectorOrDom, className) {
                    for (var nodes = _.select(selectorOrDom), i = 0; i < nodes.length; i++) if (nodes[i].classList) DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className)); else {
                        var reg = new RegExp(className, "g");
                        nodes[i].className = nodes[i].className.replace(reg, "").trim();
                    }
                }, className.toggle = function() {}, className.change = function(selectorOrDom, className, replaceWith) {
                    var nodes = _.select(selectorOrDom);
                    _.removeClass(nodes, className), _.addClass(nodes, replaceWith);
                }, className;
            }(this), this.compare = function(value, condition, param) {
                switch (condition) {
                  case "eq":
                    return value == param;

                  case "neq":
                    return value != param;

                  case "grt":
                    return value > param;

                  case "lst":
                    return param > value;

                  case "ct":
                    return value.toString().indexOf(param.toString()) > -1;
                }
            }, this.compare.conditions = {
                equal: "eq",
                neq: "neq",
                grt: "grt",
                lst: "lst",
                ct: "ct"
            }, this.css = function(_) {
                var fn = function(selectorOrDom, style) {
                    for (var node, nodes = this.select(selectorOrDom), i = 0; node = nodes[i]; i++) for (var k in style) node.style[k] = style[k];
                };
                return fn.computedValue = function(selectorOrDom, prop, numberOnly) {
                    if (window.getComputedStyle) {
                        var nodes = _.selectFirst(selectorOrDom), value = window.getComputedStyle(nodes, null).getPropertyValue(prop);
                        return numberOnly && (value = _.regex.matchFirst(value)), value;
                    }
                    _.fail('add shim for "window.getComputedStyle" in _.css.computedValue');
                }, fn;
            }(this), this.dictionary = function(that, undefined) {
                var defaultValues = {}, Fn = function(_defaultValues) {
                    defaultValues = _defaultValues || {}, _.extend(this, defaultValues);
                };
                return Fn.prototype["default"] = function(obj) {
                    that.extend(defaultValues, obj);
                }, Fn.prototype.reset = function(k) {
                    this[k] = defaultValues[k];
                }, Fn.prototype.add = function(k, v) {
                    this[k] = v;
                }, Fn.prototype.remove = function(k) {}, Fn.prototype.data = function() {
                    return _.cloneObj(this, !1);
                }, {
                    "new": function(defaultValue) {
                        return new Fn(defaultValue);
                    },
                    listen: function(fn) {}
                };
            }(this), this.enableBackup = function(_, undefined) {
                var o = {};
                return o.__repository = {}, o.backup = function(key) {
                    return key = _.assignIfNotDefined(key, "last"), this.__repository[key] = JSON.stringify(this), 
                    this.__repository[key];
                }, o.resotre = function(key) {
                    if (key = _.assignIfNotDefined(key, "last"), !_.is.not.defined(this.__repository[key])) {
                        var json = JSON.parse(this.__repository[key]);
                        return _.update(this, json);
                    }
                }, function(constructor_obj) {
                    var constructor = _["if"].is.not["function"](constructor_obj, function() {
                        return _.get.constructor(constructor_obj);
                    });
                    return _.prototype.extend(constructor, o), constructor;
                };
            }(this), this.flyWeight = function(_, undefined) {}(this), this.framework = function(_) {
                var fm = function() {}, factories = {}, controllers = {}, js = {}, css = {};
                fm.factory = function(fm) {
                    return function(name, fn) {
                        window[camelCaseName + "s"] && _.fail(camelCaseName + "s exists"), window[camelCaseName + "s"] = {};
                        var Constructor = fn();
                        factories[camelCaseName] = function(id, node, config) {
                            return window[camelCaseName + "s"][id] = new Constructor(id, node, config);
                        };
                    };
                }(this), fm.controller = function(fm, undefined) {
                    var repositoy = {};
                    return function(name, fn) {
                        return controllers[name] = {}, controllers[name].fn = fn, repositoy[name] = controllers[name].scope = _.scope(), 
                        _.ready(function() {
                            var controllerNode = _.selectFirst('[data-controller="' + name + '"]');
                            instansiteController(controllers[name], controllerNode);
                        }), controllers[name].scope;
                    };
                }(this), fm.loadJS = function(fm) {
                    var qeue = [], dependenciesHistory = {};
                    return function(files) {
                        for (var thenFn = _.fn(), _dependencies = [], i = 0; i < files.length; i++) _.is.array(js[files[i]]) ? _.each(js[files[i]], function(filePath) {
                            js[filePath] || (js[filePath] = filePath), dependenciesHistory[js[filePath]] || (_dependencies.push(js[filePath]), 
                            dependenciesHistory[js[filePath]] = !1);
                        }) : dependenciesHistory[js[files[i]]] || (_dependencies.push(js[files[i]]), dependenciesHistory[js[files[i]]] = !1);
                        for (var file, i = 0; file = _dependencies[i]; i++) {
                            var path = file;
                            _.loadJS(path, function(path) {
                                dependenciesHistory[path] = !0;
                                for (var i = qeue.length - 1; i >= 0; i--) qeue[i].done || (qeue[i].depen = _.array.remove(qeue[i].depen, path), 
                                0 === qeue[i].depen.length && (qeue[i].done = !0, qeue[i].thenFn()));
                            });
                        }
                        return {
                            then: function(fn) {
                                thenFn = fn, 0 == _dependencies.length ? thenFn() : qeue.push({
                                    depen: _dependencies,
                                    thenFn: fn
                                });
                            }
                        };
                    };
                }(this), fm.loadCSS = function(fm) {
                    return function(files) {
                        for (var _dependencies = [], i = 0; i < files.length; i++) _.is.array(css[files[i]]) ? _.each(css[files[i]], function(filePath) {
                            css[filePath] || (css[filePath] = filePath), _dependencies.push(css[filePath]);
                        }) : _dependencies.push(css[files[i]]);
                        for (var i = 0; i < _dependencies.length; i++) that.loadCSS(_dependencies[i]);
                        return this;
                    };
                }(this), fm.config = function(_) {
                    return function(config) {
                        that.extend(js, config.js), that.extend(css, config.css);
                    };
                }(this);
                var instansiteController = function(controller, controllerNode) {
                    controller.fn.apply(controller.scope, [ controller.scope, controllerNode ]);
                    for (var factoryName in factories) {
                        var factoryAttrName = _.dashCase(factoryName), nodes = controllerNode.querySelectorAll("[" + factoryAttrName + "]");
                        _.each(nodes, function(node) {
                            var id = node.getAttribute(factoryAttrName), config = controller.scope.config[id] || {};
                            factories[factoryName](id, node, config);
                        });
                    }
                };
                return fm;
            }(this), this.is = function(_, undefined) {
                var is = function(node, selector) {
                    if (node.matches) return node.matches(selector);
                    var nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
                    return nodes.indexOf(node) > -1 ? !0 : !1;
                };
                is.object = function(_var) {
                    return "[object Object]" === Object.prototype.toString.call(_var);
                }, is.nodeList = function(obj) {
                    return "[object NodeList]" === Object.prototype.toString.call(obj);
                }, is.HTMLCollection = function(obj) {
                    return "[object HTMLCollection]" === Object.prototype.toString.call(obj);
                }, is.array = function(_var) {
                    return "[object Array]" === Object.prototype.toString.call(_var);
                }, is.number = function(_var) {
                    return "[object Number]" === Object.prototype.toString.call(_var);
                }, is["function"] = function(_var) {
                    return "[object Function]" === Object.prototype.toString.call(_var);
                }, is.string = function(_var) {
                    return "[object String]" === Object.prototype.toString.call(_var);
                }, is.undefined = function(_var) {
                    return "[object Undefined]" === Object.prototype.toString.call(_var);
                }, is.event = function(_var) {
                    return !!Object.prototype.toString.call(_var).toLowerCase().search("event");
                }, is.defined = function(_var) {
                    return "[object Undefined]" !== Object.prototype.toString.call(_var) && "[object Null]" !== Object.prototype.toString.call(_var) && "" !== Object;
                }, is.json = function() {}, is.error = function() {}, is.startWith = function() {}, 
                is.endWith = function() {}, is.value = function(_var) {
                    return _var ? !0 : !1;
                }, is.empty = function(o) {
                    for (var i in o) if (o.hasOwnProperty(i)) return !1;
                    return !0;
                }, is.truthy = function() {}, is.scalar = function(_var) {
                    return is.defined(_var) && is.not.array(this.is.array) && is.not.object(_var) && is.not["function"](_var);
                }, is.prototypeProp = function(obj, prop) {
                    return obj[prop] && !obj.hasOwnProperty(prop);
                }, is.equal = function(fv, sv) {
                    return fv || that.warn("equal function :" + fv + " is Not Object"), sv || that.warn("equal function :" + sv + " is Not Object"), 
                    JSON.stringify(fv) == JSON.stringify(sv) ? !0 : !1;
                };
                var i, not = {};
                for (i in is) (function(i) {
                    is.hasOwnProperty(i) && (not[i] = function(o) {
                        return !is[i](o);
                    });
                })(i);
                is.not = not;
                var all = {};
                for (i in is) (function(i) {
                    is.hasOwnProperty(i) && (all[i] = function(o) {});
                })(i);
                is.all = all;
                var any = {};
                for (var j in is) (function(j) {
                    is.hasOwnProperty(j) && (any[j] = function(o) {});
                })(j);
                return is.any = any, is;
            }(this), this["if"] = function(_) {
                var _if = {};
                _if.is = {}, _if.is.not = {};
                for (var i in _.is) (function(i) {
                    "not" != i && (_if.is[i] = function(obj, fn) {
                        return _.is[i](obj) ? fn() : void 0;
                    }, _if.is.not[i] = function(obj, fn) {
                        return _.is.not[i](obj) ? fn() : void 0;
                    });
                })(i);
                return _if;
            }(this), this.iterator = function(_) {
                return function(array) {
                    var index = -1;
                    return {
                        next: function() {
                            return index < array.length ? {
                                value: array[++index],
                                done: !1
                            } : {
                                done: !0
                            };
                        },
                        prev: function() {
                            return index > -1 ? {
                                value: array[--index],
                                done: !1
                            } : {
                                done: !0
                            };
                        },
                        current: function() {
                            return {
                                value: array[index],
                                done: !1
                            };
                        },
                        index: function() {
                            return index;
                        }
                    };
                };
            }(this), this.publisher = function(that, undefined) {
                var o = {};
                return o.subscribers = {
                    any: []
                }, o.subscribe = function(fn, types) {
                    types = types || "any";
                    for (var type, typesList = _.spliteAndTrim(types), i = 0; type = typesList[i]; i++) _.is.not.defined(this.subscribers[type]) && (this.subscribers[type] = []), 
                    this.subscribers[type].push(fn);
                }, o.unsubscribe = function(fn, type) {
                    this.visitSubscribers("unsubscribe", fn, type);
                }, o.publish = function(type, publication) {
                    publication = _.assignIfNotDefined(publication, {}), this.visitSubscribers("publish", publication, type);
                }, o.visitSubscribers = function(action, arg, type) {
                    for (var sub, pubType = type || "any", subscribers = this.subscribers[pubType], i = (subscribers.length, 
                    0); sub = subscribers[i]; i++) "publish" === action ? sub(arg) : "unsubscribe" === action && sub == arg && subscribers.splice(i, 1);
                }, function(obj) {
                    obj = obj || {};
                    var i;
                    for (i in o) o.hasOwnProperty(i) && _.is["function"](o[i]) && (obj[i] = o[i]);
                    return obj.subscribers = {
                        any: []
                    }, obj;
                };
            }(this), this.select = function(selectorOrDom, parent) {
                parent = parent || document.body;
                var nodes = "";
                return nodes = this.is.string(selectorOrDom) ? parent.querySelectorAll(selectorOrDom) : selectorOrDom, 
                this.is.nodeList(nodes) ? nodes = this.argToArray(nodes) : this.is.HTMLCollection(nodes) ? nodes = this.argToArray(nodes) : this.is.array(nodes) || (nodes = [ nodes ]), 
                nodes;
            }, this.selectFirst = function(selectorOrDom, parent) {
                return _.valueOf(_.select(selectorOrDom, parent), 0);
            };
        };
        return {
            installHelperOn: function(_this) {
                U.call(_this);
            },
            get: function() {
                return new U();
            }
        };
    }();
    "undefined" != typeof exports && "undefined" != typeof module && module.exports ? exports = module.exports = UTILITY.get() : this._ = UTILITY.get();
}).call(this);