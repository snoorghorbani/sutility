this.framework = (function (_) {
    var CONST = { controllerSelector: '[data-controller]' };
    var fm = function () { };
    var factories = {};
    var controllers = {};
    var js = {};
    var css = {};
    fm.factory = (function (fm) {
        return function (name, fn) {
            window[camelCaseName + 's'] && _.fail(camelCaseName + 's exists');
            window[camelCaseName + 's'] = {};
            var Constructor = fn();
            factories[camelCaseName] = function (id, node, config) {
                return window[camelCaseName + 's'][id] = new Constructor(id, node, config);
            };
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
                instansiteController(controllers[name], controllerNode);
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

            for (var i = 0, file; file = _dependencies[i]; i++) {
                var path = file;
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
})(this);