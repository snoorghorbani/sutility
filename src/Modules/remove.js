this.remove = function (ar, idx) {
    if (DEBUG) {
        if (_.is.not.array(ar)) this.fail('is Not Array');
        if (ar.length < idx) this.fail('greeter that array length');
    }
    
    return (obj.length > idx)? (obj.splice(idx, len || 1)) : null;
};