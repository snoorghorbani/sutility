this.framework = (function (_) {
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
        return function (files) {
            var thenFn = _.fn();
            var _dependencies = [];
            for (var i = 0; i < files.length; i++) {
                if (_.is.array(js[files[i]])) {
                    _.each(js[files[i]], function (filePath) {
                        if (!js[filePath]) {
                            js[filePath] = filePath;
                        }
                        _dependencies.push(js[filePath]);
                    });
                } else {
                    _dependencies.push(js[files[i]]);
                }
            }
            
            for (var i = 0, file; file = _dependencies[i]; i++) {
                var path = file;
                _.loadJS(path, function (path) {
                    for (var i = 0; i < qeue.length; i++) {
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
                    qeue.push({ depen: _dependencies, thenFn: fn });
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
    
    var instansiteController = function (controller, controllerNode) {
        controller.fn.apply(controller.scope, [controller.scope, controllerNode]);
        
        for (var factoryName in factories) {
            var nodes = controllerNode.querySelectorAll('[' + factoryName + ']');
            _.each(nodes, function (node) {
                var id = node.getAttribute(factoryName);
                var config = controller.scope.config[id] || {};
                factories[factoryName](id, node, config);
            });
        }
    };
    
    return fm;
})(this);