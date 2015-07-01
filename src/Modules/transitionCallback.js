 this.transitionCallback = function (el , fn) {
            var t = this.getTransitionEvent();
            var _fn = function () {
                fn();
                el.removeEventListener(t, _fn);
            };
            el.addEventListener(t, _fn);
        };