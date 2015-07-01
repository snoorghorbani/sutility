this.removeEventArg = function (a) {
    _.each(a, function (i, j) {
        if (i.currentScope && i.targetScope)
            _.remove(a, j);
    }, this);
};
