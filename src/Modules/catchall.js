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
                    Fn.prototype.get = _.assignIfNotDefined(Fn.prototype.get, {});
                    Fn.prototype.get[name] = function () {
                        return values[name];
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