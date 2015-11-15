this.exec = function (/*fn , context , arg*/) {
    var args = this.argToArray(arguments);
    var fn = args.shift();
    var context = args.shift();
    var arg = args.shift();
    
    if (DEBUG) {
        if (_.is.not['function'](fn)) _.warn(fn + 'is not function');
    }
    
    return fn.apply(context || null, arg);
};
