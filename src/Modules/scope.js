this.scope = function () {
    var prototypeCreator = function () { };
    var Scope = function () {
        this.fn = new (function () { });
        this.data = new (function () { });
        this.config = new (function () { });
        this.option = new (function () { });
        this.event = new (function () { });
        this.module = new (function () { });
        this.const = new (function () { });
    };
    return new Scope();
};