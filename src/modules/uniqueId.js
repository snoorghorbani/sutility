this.uniqueId = (function (_) {
    var repos = {};
    var fn = function (prefix, seperator, fn) {
        repos[prefix] = repos[prefix] || 1;
        repos[prefix] = repos[prefix] + 1;
        var identifier = (fn) ? fn(repos[prefix]) : repos[prefix];
        return [prefix, identifier].join(seperator || '_');
    }

    return fn;
})(this);