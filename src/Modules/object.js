this.object = function (init) {
    var Fn = _.fn();
    return _.extend(new Fn(), init);
};
