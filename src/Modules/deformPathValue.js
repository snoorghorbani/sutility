this.deformPathValue = function (obj, fn, path) {
	if (!obj) return undefined;
	if (!obj) return this.warn('Utility getValue function first parameter not defined');
	
	if (obj[path] != null) return obj[path] = fn(obj[path]);
	
	var path = path.split('.');
	var _path = path.shift();
	var res = obj[_path];
	while (_path = path.shift()) {
		if (res[_path]) {
			if (_.is.array(res[_path])) {
				_.each(res[_path], function (item) {
					_.setValueOnPath(item, fn, path.join('.'));
				});
			}
		}
	}
	return;
};
