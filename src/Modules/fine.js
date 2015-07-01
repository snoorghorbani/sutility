this.fine = function (ar, fn) {
    var status = true;
    _.each(ar, function (i) {
        if (!fn(i)) {
            status = false;
        }
    });
    return status;
};