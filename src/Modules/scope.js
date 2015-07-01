this.scope = function () {
    var Scope = function () {
        this.fn = {};
        this.data = {};
        this.config = {};
        this.option = {};
        this.event = {};
        this.module = {};
        this.const = {};
    };
    return new Scope();
};
