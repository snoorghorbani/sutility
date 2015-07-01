this.getTransitionEvent = function () {
            var fakeElement = document.createElement('div');
            var transition = {
                WebkitTransition: 'webkitTransitionEnd',
                OTransition: 'TranstionEnd',
                MozTransition: 'transtionend',
                transition: 'transtionend',
            };
            for (var i in transition) {
                if (_.is.defined(fakeElement.style[i])) return transition[i];
            }
        };