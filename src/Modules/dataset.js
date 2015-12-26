this.dataset = (function (_, undefined) {
    var dataset = function () { };

    dataset.add = function () { };
    dataset.get = function (el, name) {
        return el.dataset
            ? el.dataset[name]
            : el.getAttribute('data-' + _.dashCase(name));
    };

    return dataset;
})(this);