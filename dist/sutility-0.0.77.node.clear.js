/**
 * sutility v0.0.77 - 2015-09-13
 * Functional Library
 *
 * Copyright (c) 2015 soushians noorghorbani <snoorghorbani@gmail.com>
 * Licensed MIT
 */
(function(undefined) {
    "use strict";
    var instance = null, DEBUG = !0, SUTILITY = function() {
        var U = function() {
            var _ = this, that = this;
            this.argToArray = function(arg) {
                return Array.prototype.slice.call(arg);
            }, this.arrToObj = function() {
                var args = _.argToArray(arguments), arr = args.shift(), key = args.shift(), removeKey = args.shift(), res = {};
                return _.each(arr, function(item) {
                    var temp = item[key];
                    removeKey && delete item[key], res[temp] = item;
                }), res;
            }, this.array = function(_) {
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
                }, fn.shift = function(array, callback) {
                    var item, n = 0;
                    if ("number" == typeof callback) n = callback; else if (that.is["function"](callback)) for (var index = 0; callback(array[index++]); ) n++; else n++;
                    return item = array.slice(0, n), that.is.array(item) && 1 === item.length ? item[0] : item;
                }, fn.reverse = function(ar) {
                    DEBUG && _.is.not.array(ar) && _.fail("is Not Array");
                    for (var res = [], i = ar.length - 1, j = 0; i >= 0; i--, j++) res[j] = ar[i];
                    return res;
                }, fn.concat = function(fa, sa) {
                    return DEBUG && (_.is.not.array(fa) && _.fail("is Not Array"), _.is.not.array(sa) && _.fail("is Not Array")), 
                    fa.concat(sa);
                }, fn.indexOf = function(arr, idxOrIterator, context) {
                    var res;
                    return _.is["function"](idxOrIterator) ? _.each(arr, function(item, idx) {
                        idxOrIterator.call(context, item) && (res = idx);
                    }) : res = arr.indexOf(idxOrIterator), res;
                }, fn;
            }(this), this.assign = function(_) {
                var fn = function() {};
                fn.ifDefined = function(to, fnOrObj) {
                    return fnOrObj !== undefined ? that.safeAssign(to, fnOrObj) : to;
                }, fn.ifNotDefined = function(varible, fnOrObj) {
                    return varible === undefined ? fnOrObj : varible;
                };
            }(this), this.assignIfDefined = function(to, fnOrObj) {
                return fnOrObj !== undefined ? that.safeAssign(to, fnOrObj) : to;
            }, this.assignIfNotDefined = function(varible, fnOrObj) {
                return varible === undefined ? fnOrObj : varible;
            }, this.attr = function(_, undefined) {
                var attr = function() {};
                return attr;
            }(this), this.bind = function(el, obj, decorator) {
                decorator = decorator || this.i;
            }, this.callConstantly = function(_) {
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
            }(this), this.camelCase = function(str) {
                return str.replace(/-(.)/g, function(match, group1) {
                    return group1.toUpperCase();
                });
            }, this.cancelBubble = function(e) {
                var evt = e ? e : window.event;
                evt.stopPropagation && evt.stopPropagation(), null !== evt.cancelBubble && (evt.cancelBubble = !0);
            }, this.canvas = function(_) {
                var Fn = function() {};
                return Fn.arc = function(ctx, x, y, r, f, t, b) {
                    ctx.beginPath(), ctx.arc(x, y, r, f, t, b), ctx.closePath(), ctx.fill(), ctx.stroke();
                }, Fn.rect = function(ctx, x, y, w, h, fill, stroke) {
                    ctx.beginPath(), ctx.rect(x, y, w, h), ctx.closePath(), fill !== !1 && ctx.fill(), 
                    stroke !== !1 && ctx.stroke();
                }, Fn.text = function(ctx, text, x, y) {
                    ctx.beginPath(), ctx.fillText(text, x, y), ctx.fill(), ctx.closePath();
                }, Fn.line = function(ctx, startPoint, endPoint) {
                    ctx.beginPath(), ctx.moveTo(startPoint.x, startPoint.y), ctx.lineTo(endPoint.x, endPoint.y), 
                    ctx.closePath(), ctx.stroke();
                }, Fn;
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
                            return a.toLowerCase() !== valueStr.toLowerCase();
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
            }(this), this.categorize = function(obj, key) {
                var res = {};
                return _.each(obj, function(item) {
                    var temp = item[key].toString();
                    res[temp] = res[temp] || [], res[temp].push(item);
                }), res;
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
            }, this.clone = function(arOrObj) {
                if (arOrObj.concat) return arOrObj.concat();
                var temp = {};
                for (var key in arOrObj) temp[key] = arOrObj[key];
                return temp;
            }, this.cloneArray = function(ar) {
                return ar.concat();
            }, this.cloneObj = function(obj, prototype) {
                prototype = _.assignIfNotDefined(prototype, !0);
                var temp = _.object();
                for (var key in obj) (prototype || obj.hasOwnProperty(key)) && (temp[key] = obj[key]);
                return temp;
            }, this.compare = function(value, condition, param) {
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
            }, this.compileString = function(str, varDef, fn) {
                var regex = /\{\{/, result = [], varStartIdx = str.search(regex);
                if (varStartIdx > -1) {
                    result[result.length] = str.substring(0, varStartIdx), str = str.substring(varStartIdx);
                    var varEndIdx = str.search(/\}\}/), varKey = str.substring(2, varEndIdx), varValue = varDef[varKey.trim()];
                    this.is.object(varValue) && (varValue = fn.call(null, varValue)), result[result.length] = varValue, 
                    str = str.substring(varEndIdx + 2), result = result.concat(this.compileString(str, varDef, fn));
                } else result[result.length] = str;
                return result.join("");
            }, this.complement = function(fn) {
                return function() {
                    return !fn.apply(null, this.argToArray(arguments));
                };
            }, this.config = function(prop, obj) {
                for (var k in prop) this[k] = obj && obj[k] || prop[k];
            }, this.constValue = function(d) {
                var v = d;
                return function() {
                    return v;
                };
            }, this.contain = function(obj, value) {
                for (var i = 0; i < obj.length; i++) if (obj[i] == value) return !0;
                return !1;
            }, this.countBy = function() {}, this.dashCase = function(str) {
                return str.replace(/([A-Z])/g, function(match, group1) {
                    return "-" + group1.toLowerCase();
                });
            }, this.data = function(_) {}(this), this.dataset = function(_, undefined) {
                var dataset = function() {};
                return dataset.add = function() {}, dataset.get = function(el, name) {
                    return el.dataset[name];
                }, dataset;
            }(this), this.decorator = function() {}, this.dictionary = function(that, undefined) {
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
            }(this), this.each = function(obj, iterator, context, onProto) {
                if (onProto = this.assignIfNotDefined(onProto, !1), !obj) return !1;
                this.is.nodeList(obj) && this.each(this.argToArray(obj), iterator, context);
                var key;
                if (this.is.array(obj) || this.is["function"](obj)) for (key in obj) (obj.hasOwnProperty(key) || onProto) && iterator.call(context, obj[key], key);
                if (this.is.object(obj)) for (key in obj) (obj.hasOwnProperty(key) || onProto) && iterator.call(context, obj[key], key);
            }, this.enableBackup = function(_, undefined) {
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
            }(this), this.event = function(domOrSelector, state, fn) {
                var nodes = this.select(domOrSelector);
                this.each(nodes, function(node) {
                    node.addEventListener(state, fn);
                });
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
            }, this.exec = function() {
                var args = this.argToArray(arguments), fn = args.shift(), context = args.shift(), arg = args.shift();
                return DEBUG && _.is.not["function"](fn) && _.warn(fn + "is not function"), fn.apply(context || null, arg);
            }, this.extend = function(toObj, fromObj, proroAssign) {
                return DEBUG && _.is.not.defined(toObj) && _.fail("destination object cant be null"), 
                _.is.array(toObj) ? _.safeAssignArray(toObj, fromObj) : _.is.object(toObj) ? (_.safeClear(toObj), 
                _.each(fromObj, function(value, key) {
                    toObj[key] = value;
                }, this, proroAssign)) : toObj = fromObj, toObj;
            }, this.extendFunc = function(fn, callBack) {
                var data = arguments[2];
                return function() {
                    fn.call(this), callBack.call(this, data);
                };
            }, this.extractWrapedBy = function(str, wrapper) {
                var pattern = null;
                if ("{}" == wrapper) pattern = /\{(.*?)\}/g; else if ("()" == wrapper) pattern = /\((.*?)\)/g; else {
                    if ("[]" != wrapper) return;
                    pattern = /\[(.*?)\]/g;
                }
                for (var regex = new RegExp(pattern), matched = str.match(regex), i = 0; matched && i < matched.length; i++) matched[i] = matched[i].substring(1, matched[i].length - 1);
                return matched;
            }, this.fail = function(text) {
                throw new Error(text);
            }, this.filter = function(arr, obj_FnCondition) {
                DEBUG && _.is.not.object(obj_FnCondition) && _.is.not["function"](obj_FnCondition);
                var res = [], condFn = _.is["function"](obj_FnCondition) ? obj_FnCondition : _.rightCurry(_.is.closet)(obj_FnCondition);
                return _.each(arr, function(item) {
                    condFn(item) && res.push(item);
                }), res;
            }, this.fine = function(ar, fn) {
                var status = !0;
                return _.each(ar, function(i) {
                    fn(i) || (status = !1);
                }), status;
            }, this.fixEvent = function(e) {
                window.event = window.event || e;
            }, this.flatTreeBy = function(data, childAttr, parentAttr, res, parentIdn, defaultRootValue, depth) {
                res = res || [], depth = depth || 0, _.each(_.cloneObj(data), function(item) {
                    item.parentIdn = parentIdn || defaultRootValue || "root", item.depth = depth, res.push(item), 
                    item[childAttr] && item[childAttr].length > 0 && that.flatTreeBy(item[childAttr], childAttr, parentAttr, res, item[parentAttr], defaultRootValue, depth + 1), 
                    delete item[childAttr];
                });
            }, this.flyWeight = function(_, undefined) {}(this), this.fn = function() {
                return function() {};
            }, this.freezable = function(_, undefined) {
                var o = {};
                return o.freeze = function(key) {}, o.unfreeze = function(key) {}, function(constructor_obj) {};
            }(this), this.get = function() {
                var get = function() {};
                return get.constructor = function(obj) {
                    return obj.constructor;
                }, get;
            }(), this.getCumulativeOffset = function(obj) {
                var left, top;
                if (left = top = 0, obj.offsetParent) do left += obj.offsetLeft, top += obj.offsetTop; while (obj = obj.offsetParent);
                return {
                    x: left,
                    y: top
                };
            }, this.getValue = function(obj, path) {
                if (DEBUG) {
                    if (!obj) return undefined;
                    if (!obj) return this.warn("UTILITY getValue function first parameter not defined");
                }
                if (null !== obj[path]) return obj[path];
                path = path.split(".");
                for (var i = 0, res = obj[path[i++]]; i < path.length; ) res = res[path[i++]];
                return i == path.length ? res : null;
            }, this.groupBy = function(obj, prop, fn) {
                fn = fn || this["return"];
                var res = {};
                return _.each(obj, function(item) {
                    var flag = item.data[prop];
                    res[flag] = res[flag] || [], res[flag].push(fn(item));
                }), res;
            }, this.groupByFlatMode = function() {
                var that = this, args = _.argToArray(arguments), obj = args.shift(), props = args.shift(), res = {};
                return this.each(obj, function(item) {
                    var flag = "";
                    that.each(props, function(prop) {
                        flag += "_" + item[prop];
                    }), res[flag] = res[flag] || [], res[flag].push(item);
                }), res;
            }, this.groupByTreeMode = function() {
                var that = this, args = _.argToArray(arguments), obj = args.shift(), props = args.shift(), prop = props.shift(), fn = args.shift(), grouped = that.groupBy(obj, prop, fn);
                return _.each(grouped, function(group, i) {
                    props.length > 0 && (grouped[i] = that.groupByTreeMode.call(that, group, _.cloneArray(props), fn));
                }), obj = grouped;
            }, this.groupIf = function(obj, cond, fn) {
                fn = fn || _["return"];
                var res = {};
                return _.each(obj, function(item) {
                    var flag = cond(item);
                    res[flag] = res[flag] || [], res[flag].push(fn(item));
                }), res;
            }, this.haveKey = function(obj, path) {
                DEBUG && _.is.not.object(obj) && this.warn("is Not Object");
                for (var route, tempObj = obj, routes = path.split("."), i = 0; route = routes[i]; i++) {
                    if (!tempObj[route] && 0 !== tempObj[route]) return _.warn([ "dont have ", route, "property" ].join(" ")), 
                    !1;
                    _.is.not.array(tempObj[route]) && (tempObj = tempObj[route]);
                }
                return !0;
            }, this.i = function(i) {
                return i;
            }, this.idMode = function(ar, iden) {
                for (var item, res = {}, i = 0; item = ar[i]; i++) item[iden] && (res[item[iden]] = item, 
                res[item[iden]].active = "");
                return res;
            }, this.impelemetIn = function(child) {}, this.indexBy = function() {}, this["interface"] = function(obj, decl) {}, 
            this.is = function(_, undefined) {
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
                    if (_.is.object(0)) for (var i in o) if (o.hasOwnProperty(i)) return !1;
                    return _.is.array(o) ? 0 === o.length : !0;
                }, is.truthy = function() {}, is.scalar = function(_var) {
                    return is.defined(_var) && is.not.array(this.is.array) && is.not.object(_var) && is.not["function"](_var);
                }, is.prototypeProp = function(obj, prop) {
                    return obj[prop] && !obj.hasOwnProperty(prop);
                }, is.equal = function(fv, sv) {
                    return JSON.stringify(fv) == JSON.stringify(sv) ? !0 : !1;
                }, is.equalText = function(fv, sv) {
                    return DEBUG && (_.is.not.string(fv) && that.warn("equal function :" + fv + " is Not String"), 
                    _.is.not.string(sv) && that.warn("equal function :" + sv + " is Not String")), fv.toLowerCase(fv) === sv.toLowerCase(sv) ? !0 : !1;
                }, is.closet = function(fo, so) {
                    return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
                }, is.contain = function(str, searchStr) {
                    var reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
                    return str.match(reg) && str.match(reg).length > 0;
                }, is.regex = function(r) {
                    return "RegExp" === r.constructor.name;
                }, is.ie = function() {
                    return window.navigator.userAgent.indexOf("Trident") > 0;
                }, is.same = function(fv, sv) {
                    return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
                };
                var i, not = {};
                for (i in is) (function(i) {
                    is.hasOwnProperty(i) && (not[i] = function(a, b, c) {
                        return !is[i](a, b, c);
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
            }(this), this.keys = function() {
                var args = _.argToArray(arguments), obj = args[0], res = [];
                return _.each(obj, function(value, key) {
                    res.push(key);
                }), res;
            }, this.leftCurry = function(fn, context) {
                return context = context || that, function() {
                    var leftArgs = _.argToArray(arguments);
                    return function() {
                        var args = _.array.concat(leftArgs, _.argToArray(arguments));
                        return fn.apply(context, args);
                    };
                };
            }, this.map = function(obj, iterator, context) {
                var results = [];
                return _.each(obj, function(value, index, list) {
                    results.push(iterator.call(context, value, index, list));
                }), results;
            }, this.mediaHandler = function(_) {
                var handler = {
                    "in": {},
                    out: {},
                    only: {}
                }, medias = {}, subscibeOnMediaIn = function(media, fn) {
                    var mq = window.matchMedia(media);
                    mq.addListener(function() {
                        mq.matches && fn();
                    });
                }, subscibeOnMediaOut = function(media, fn) {
                    var mq = window.matchMedia(media);
                    mq.addListener(function() {
                        mq.matches || fn();
                    });
                };
                return handler.init = function(config) {
                    medias = config;
                    for (var i in medias) handler["in"][i] = _.leftCurry(subscibeOnMediaIn)(medias[i]), 
                    handler.out[i] = _.leftCurry(subscibeOnMediaOut)(medias[i]), handler.only[i] = _.leftCurry(_.fn)(medias[i]);
                }, handler;
            }(_), this.memoize = function(fn) {
                return fn.cache || (fn.cache = {}), function() {
                    for (var args = Array.prototype.slice.call(arguments), hash = "", i = args.length, currentArg = null; i--; ) currentArg = args[i], 
                    hash += currentArg === Object(currentArg) ? JSON.stringify(currentArg) : currentArg;
                    return hash in fn.cache ? fn.cache[hash] : fn.cache[hash] = fn.apply(this, args);
                };
            }, this.merge = function(toObj, fromObj) {
                var temp = _.cloneObj(toObj);
                return _.is.object(fromObj) ? _.each(fromObj, function(value, key) {
                    temp[key] = fromObj[key];
                }) : _.is.array(fromObj) && _.each(fromObj, function(value) {
                    temp.push(value);
                }), temp;
            }, this.multiply = function(fn, ln) {
                return fn * ln;
            }, this.note = function(text) {}, this.objToTwoDimArray = function() {
                var args = _.argToArray(arguments), obj = args[0], res = [];
                return _.each(obj, function(itemValue, itemKey) {
                    var temp = [];
                    temp[0] = [ itemValue ], temp[1] = [ itemKey ], res.push(temp);
                }), res;
            }, this.object = function(init) {
                var Fn = _.fn();
                return _.extend(new Fn(), init);
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
            }(this), this.on = function(dom, state, fn) {};
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
            }(window.onscroll), this.onscroll(function() {
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
            }), this.partial = function(obj, keys) {
                DEBUG && (_.is.not.object(obj), _.is.not.defined(keys));
                var res = {};
                _.is.not.array(keys) && (keys = _.report.skeleton(keys));
                for (var key, i = 0; key = keys[i]; i++) {
                    var keyParts = key.split("."), resultKey = keyParts.shift(), path = [ keyParts.join(".") ];
                    DEBUG && _.is.not.defined(obj[resultKey]), _.is.not.contain(key, "\\.") ? res[key] = obj[key] : _.is.contain(key, "\\.") && (res[resultKey] = _.assignIfNotDefined(res[resultKey] || {}), 
                    res[resultKey] = _.merge(res[resultKey], _.partial(obj[resultKey], path)));
                }
                return res;
            }, this.pascalCase = function(str) {
                return str[0].toUpperCase() + str.substr(1, str.lenght);
            }, this.pipe = function(_) {
                var pipes = {};
                return function(id, delay) {
                    var id = id;
                    return pipes[id] = pipes[id] || [], function(fn) {
                        pipes[id].push(fn), setInterval(function() {
                            var fn = pipes[id].shift();
                            fn && fn();
                        }, delay || 1);
                    };
                };
            }(this), this.preventEvent = function(e) {
                var eve = e || window.event;
                eve.preventDefault(), eve.stopPropagation();
            }, this.propByPrefix = function(obj, prefix, removePrefixFromKey) {
                removePrefixFromKey = _.assignIfNotDefined(removePrefixFromKey, !1);
                var properties = {};
                for (var key in obj) if (0 === key.search(prefix)) {
                    var propName = removePrefixFromKey ? _.camelCase(key.substr(prefix.length)) : key;
                    properties[propName] = obj[key];
                }
                return properties;
            }, this.prototype = function(_, undefined) {
                var prototype = function() {};
                return prototype.extend = function(constructor_obj, prototypeObj) {
                    _["if"].is.not["function"](constructor_obj, function() {
                        return _.get.constructor(constructor_obj);
                    });
                    for (var i in prototypeObj) prototypeObj.hasOwnProperty(i) && (constructor_obj.prototype[i] = prototypeObj[i]);
                }, prototype;
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
            }(this), this.randColor = function() {
                var r = this.random(1, 256).toFixed(), g = this.random(1, 256).toFixed(), b = this.random(1, 256).toFixed();
                return "rgb(" + r + "," + g + "," + b + ")";
            }, this.randJson = function(len, props) {
                var res = [];
                return _.repeat(len, function() {
                    var item = {};
                    _.each(props, function(prop) {
                        "string" == prop.type ? item[prop.name] = _.randString(6) : "number" == prop.type && (item[prop.name] = _.random(0, 9));
                    }, this), res.push(item);
                }, this), res;
            }, this.randString = function(len) {
                var res = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                return _.repeat(len, function() {
                    res += possible[_.random(0, possible.length).toFixed()];
                }, this), res;
            }, this.random = function(min, max) {
                return (max - min) * Math.random() + min;
            }, this.recursive = function() {}, this.regex = function(_) {
                var type = {
                    number: /\d+/g
                }, fn = _.fn;
                return fn.match = function(str) {
                    return str.match(type.number);
                }, fn.matchFirst = function(str) {
                    return str.match(type.number)[0];
                }, fn.type = type, fn;
            }(this), this.regularCase = function(str) {
                return str.replace(/([A-Z])/g, " $1").replace(/^./, function(str) {
                    return str.toUpperCase();
                });
            }, this.remove = function(ar, idx) {
                return DEBUG && (_.is.not.array(ar) && this.fail("is Not Array"), ar.length < idx && this.fail("greeter that array length")), 
                obj.length > idx ? obj.splice(idx, len || 1) : null;
            }, this.removeEventArg = function(a) {
                _.each(a, function(i, j) {
                    i.currentScope && i.targetScope && _.remove(a, j);
                }, this);
            }, this.repeat = function(len, fn, context) {
                for (var res = [], i = 0; len > i; i++) res.push(fn.call(context));
                return res;
            }, this.replaceInArray = function(array, from, replaceBy) {
                Array.prototype.splice.apply(array, [ from, replaceBy.length + from ].concat(replaceBy));
            }, this.report = function(_) {
                var Fn = function(object, depts, path) {
                    var depts = depts || 0, path = path || "", temp = {}, nodes = [];
                    if (depts++, _.is.object(object)) {
                        temp = {};
                        for (var key in object) {
                            var isArray = _.is.array(object[key]), isObject = _.is.object(object[key]), keyPath = path ? path + "." + key : key;
                            temp.name = key, temp.path = keyPath, temp.depts = depts, temp.type = "value", temp.isLastNode = !(isArray || isObject), 
                            _.is.object(object[key]) && (temp.type = "object"), _.is.array(object[key]) && (temp.type = "array"), 
                            nodes.push(_.cloneObj(temp)), isObject && (nodes = nodes.concat(that.report(object[key], depts, keyPath))), 
                            isArray && (nodes = nodes.concat(that.report(object[key][0], depts, keyPath)));
                        }
                    }
                    return nodes;
                };
                return Fn.skeleton = function(obj) {
                    return _.array.compact(_.map(Fn(obj), function(i) {
                        return i.isLastNode ? i.path : !1;
                    }));
                }, Fn;
            }(this), this.rightCurry = function(_) {
                return function(fn) {
                    return function() {
                        var rightArgs = that.argToArray(arguments);
                        return function() {
                            var args = _.array.concat(that.argToArray(arguments), rightArgs);
                            return fn.apply(that, args);
                        };
                    };
                };
            }(this), this.runInFunc = function(fn) {
                return this.is.not["function"](fn) && this.warn(fn + "is not function"), function() {
                    fn();
                };
            }, this.safeAssignArray = function(to, from) {
                this.replaceInArray(to, 0, from);
            }, this.safeClear = function(objOrArr) {
                if (_.is.array(objOrArr)) Array.prototype.splice.apply(objOrArr, [ 0, objOrArr.length ].concat([])); else for (var i in objOrArr) objOrArr.hasOwnProperty(i) && delete objOrArr[i];
            }, this.scope = function() {
                var Scope = function() {
                    this.fn = {}, this.data = {}, this.config = {}, this.option = {}, this.event = {}, 
                    this.module = {}, this["const"] = {};
                };
                return new Scope();
            }, this.scroll = function() {
                var Fn = function() {};
                return Fn.to = function(selectorOrDom, to, duration) {
                    var node = _.selectFirst(selectorOrDom);
                    if (!(0 > duration)) {
                        var difference = to - window.pageYOffset, perTick = difference / duration * 10;
                        setTimeout(function() {
                            var y = window.pageYOffset + perTick;
                            window.scrollTo(0, y), node.scrollTop !== to && _.scroll.to(node, to, duration - 10);
                        }, 10);
                    }
                }, Fn;
            }(), this.sortBy = function(obj, typeOrOperator, path) {
                return _.is["function"](typeOrOperator) ? obj.sort(typeOrOperator) : "string" == typeOrOperator ? obj.sort(function(a, b) {
                    var textA = _.getValue(a, path).toUpperCase(), textB = _.getValue(b, path).toUpperCase();
                    return textB > textA ? -1 : textA > textB ? 1 : 0;
                }) : "number" == typeOrOperator ? obj.sort(function(a, b) {
                    return _.getValue(a, path) > _.getValue(b, path) ? 1 : -1;
                }) : void 0;
            }, this.spliteAndTrim = function(str) {
                return str.split(/[\s,]+/);
            }, this.strStartsWith = function(str, prefix) {
                return 0 === str.indexOf(prefix);
            }, this.subSet = function(fo, so) {}, this.transitionCallback = function(el, fn) {
                var t = this.getTransitionEvent(), _fn = function() {
                    fn(), el.removeEventListener(t, _fn);
                };
                el.addEventListener(t, _fn);
            }, this.trim = function(str) {
                return str.replace(/^\\s*(\\S*(\\s+\\S+)*)\\s*$/, "$1");
            }, this.update = function(toObj, fromObj, copyPrototype) {
                return _.is.object(fromObj) && _.each(toObj, function(value, key) {
                    fromObj[key] !== undefined && (toObj[key] = fromObj[key]);
                }), toObj;
            }, this.upsert = function(container, item, indicator, updateAll) {
                DEBUG && debugMode && _.is.not.array(container);
                var newItem = !0;
                _.each(container, function(v, i) {
                    indicator(v) && (newItem = !1, that.safeAssign(container[i], item));
                });
                newItem && container.push(item);
            }, this.valueOf = function(objOrArr, pathOrIndex) {
                var tempobjOrArr;
                if (_.is.array(objOrArr)) return objOrArr[pathOrIndex];
                tempobjOrArr = objOrArr;
                for (var route, routes = pathOrIndex.split("."), i = 0; route = routes[i]; i++) {
                    if (!tempobjOrArr[route]) return _.warn([ "dont have ", route, "property" ].join(" ")), 
                    null;
                    if (_.is.array(tempobjOrArr[route])) {
                        for (var item, res = {}, partialRoutes = routes.splice(i + 1), j = 0; item = tempobjOrArr[route][j]; j++) res[j] = _.getValue2(item, partialRoutes.join("."));
                        return res;
                    }
                    tempobjOrArr = tempobjOrArr[route];
                }
                return tempobjOrArr;
            }, this.valueOfAll = function(arrayOfObject, key) {
                var res = [];
                return _.each(arrayOfObject, function(item) {
                    item[key] && res.push(item[key]);
                }), res;
            }, this.verify = function(obj, comparator) {
                DEBUG && (_.is.not.object(obj) && _.fail("is Not Object"), _.is.not.object(comparator) && _.fail("is Not Object"), 
                _.haveKey(comparator, "key") && _.haveKey(comparator, "condition") && _.haveKey(comparator, "value") || _.fail("dont have correct comparator attrs"));
                var value = obj[comparator.key];
                return value !== undefined && _.compare(value, comparator.condition, comparator.value);
            }, this.warn = function(text) {
                return undefined;
            };
        };
        return {
            install: function() {
                return instance ? instance : new U();
            },
            installTo: function(_) {
                return "[object Object]" === Object.prototype.toString.call(_) ? U.call(_) : window[_] = this.install();
            }
        };
    }();
    "undefined" != typeof exports && "undefined" != typeof module && module.exports ? exports = module.exports = SUTILITY.install() : window.SUTILITY = SUTILITY;
}).call(this);