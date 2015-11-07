this.framework = (function (_) {
    return function (config) {
        config = config || {};
        config.version = config.version || 1;
        config.controllerHolder = config.controllerHolder || window;
        if (!config.run_env)
            _.fail('you must define application run_env function in app.js')
        window.RUN_ENV = config.run_env();

        var CONST = { controllerSelector: '[data-controller]' };
        var fm = function () { };
        var factories = {};
        var factoryInstace = {};
        var controllers = {};
        var controllersRepository = {};
        var compileTimeFunctions = [];
        var neededControllers = [];
        var js = {};
        var css = {};
        fm.compile = function (selectroOrNode) {
            var node = _.selectFirst(selectroOrNode);
            var newControllers = _.select('[data-controller]', node);
            _.each(newControllers, function (newController) {
                controllerInitializeQualifie(controllers[newController.dataset.controller]);
                _.each(controllers, function (controller, key) {
                    var ctrlNode = _.selectFirst('[data-controller="' + key + '"]');
                    if (ctrlNode) return;
                    controllers[key].active = false;
                });
            });
            _.each(compileTimeFunctions, function (compileTimeFunction) {
                compileTimeFunction(node);
            });
        };
        fm.registerOnCompileTime = function (fn) {
            compileTimeFunctions.push(fn);
        };
        fm.factory = (function (fm) {
            return function (name, fn) {
                var camelCaseName = _.camelCase(name);
                window[camelCaseName + 's'] && _.fail(camelCaseName + 's exists');
                window[camelCaseName + 's'] = {};
                var Constructor = fn();
                factories[camelCaseName] = function (id, node, config) {
                    return (window[camelCaseName + 's'][id])
                        ? window[camelCaseName + 's'][id]
                        : window[camelCaseName + 's'][id] = new Constructor(id, node, config);
                };
                return Constructor;
            };
        })(this);
        var controllerInitializeQualifie = function (controller) {
            var res;
            var controllerNode = _.selectFirst('[data-controller="' + controller.name + '"]');

            var parentCtrl,
                parentNode = controllerNode
                , parentCtrlName;
            if (!!controllerNode) {
                do {
                    parentNode = parentNode.parentNode;
                    parentCtrlName = parentNode.dataset.controller;
                    if (parentCtrlName) {
                        parentCtrl = controllerInitializeQualifie(controllers[parentCtrlName]);
                    }
                } while (parentNode && parentNode.tagName != 'HTML' && !parentCtrlName);

                if (parentCtrlName) {
                    controller.scope.fn.__proto__ = controllers[parentCtrlName].scope.fn;
                    controller.scope.event.__proto__ = controllers[parentCtrlName].scope.event;
                    controller.scope.const.__proto__ = controllers[parentCtrlName].scope.const;
                    controller.scope.module.__proto__ = controllers[parentCtrlName].scope.module;
                }
                instansiteController(controller, controllerNode);
            }

            return controllerNode;
        };
        fm.controller = (function (fm, undefined) {
            var repositoy = {};
            return function (name, fn) {
                controllersRepository[name] = fn;
                controllers[name] = {};
                controllers[name].active = false;
                controllers[name].name = name;
                controllers[name].fn = fn;
                //controllers[name].scope = window.scope = _.scope();
                repositoy[name] = controllers[name].scope = _.scope();

                //_.ready(function () {
                //    controllerInitializeQualifie(controllers[name])
                //});
                return config.controllerHolder[name] = controllers[name].scope;
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
            if (controller.active) return;
            controller.fn.apply(controller.scope, [controller.scope, controllerNode]);

            for (var factoryName in factories) {
                var factoryAttrName = _.dashCase(factoryName);

                var nodes = _.argToArray(controllerNode.querySelectorAll('[' + factoryAttrName + ']'));
                _.each(nodes, function (node) {
                    var id = node.getAttribute(factoryAttrName);
                    //if (factoryInstace[id]) return;
                    //factoryInstace[id] = true;

                    var config = controller.scope.config[id] || {};
                    factories[factoryName](id, node, config);
                });

                nodes = _.argToArray(controllerNode.querySelectorAll('[data-' + factoryAttrName + ']'));
                _.each(nodes, function (node) {
                    var id = node.getAttribute('data-' + factoryAttrName);
                    //if (factoryInstace[id]) return;
                    //factoryInstace[id] = true;

                    var config = controller.scope.config[id] || {};
                    factories[factoryName](id, node, config);
                });
            }

            controller.active = true;
        };

        _.ready(function () {
            neededControllers = _.lexer('data-controller');

            _.each(neededControllers, function (neededController) {
                _.callWhen(function () {
                    var res = true;
                    _.each(neededController.parentIds, function (parentId) {
                        if (!controllersRepository[parentId])
                            res = false;
                    });
                    return res;
                }, function () {
                    return !!controllerInitializeQualifie(controllers[neededController.id]);
                });
            });
        });

        return fm;
    }
})(this);
