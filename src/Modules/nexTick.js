 this.nextTick = function (/*fn, context*/) {
                var args = _.argToArray(arguments);
                var fn = args.shift();
                var context = args.shift();
                setTimeout(function () {
                    fn.apply(context, args);
                }, 0);
            };