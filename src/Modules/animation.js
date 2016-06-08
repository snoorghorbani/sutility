;this.animation = (function (_, undefined) {
	var fn = _.fn();
	fn.endProp = _.memoize(function () {
		var 
                  element = document.createElement('div'),
			animations = {
				'animation': 'animationend',
				'OAnimation': 'oAnimationEnd',
				'MozAnimation': 'mozAnimationEnd',
				'WebkitAnimation': 'webkitAnimationEnd'
			},
			animation
		;
		for (animation in animations) {
			if (element.style[animation] !== undefined) {
				return animations[animation];
			}
		}
		return false;
	});
	fn.startProp = _.memoize(function () {
		var 
                  element = document.createElement('div'),
			animations = {
				'animation': 'animationstart',
				'OAnimation': 'oAnimationStart',
				'MozAnimation': 'mozAnimationStart',
				'WebkitAnimation': 'webkitAnimationStart'
			},
			animation
		;
		for (animation in animations) {
			if (element.style[animation] !== undefined) {
				return animations[animation];
			}
		}
		return false;
	});
	fn.end = function (el, callback) {
		el.addEventListener(fn.endProp(), callback);
	}
	fn.to = function (el, startClass, endClass) {
		_.className.add(el, startClass);
		_.each(_.select(el), function (el) {
			fn.end(el, _.callConstantly(function () {
				_.className.remove(el, startClass);
				_.className.add(el, endClass);
			}, 1));
		});
	}
	return fn;
})(this);