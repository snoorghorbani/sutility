            this.setValue = function (obj, value, path) {
                if (!obj) return undefined;
                if (!obj) return this.warn('Utility getValue function first parameter not defined');

                var path = path.split('.');

                if (path.length == 1) {
                    obj[path] = value;
                    return obj
                }

                var _path = path.shift();

                var res = obj[_path];
                while (path.length > 1) {
                    _path = path.shift()
                    res[_path] = res[_path] || {}
                    res = res[_path];

                    if (_.is.array(res))
                        _.each(res, function (item) {
                            _.setValue(item, value, path.join('.'));
                        });
                }
                res[path[0]] = value;

                return obj;
            };
