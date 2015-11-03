this.lexer = (function (_) {
    var lexed = {};
    return function (selector, el, idx, parentIds) {
        var atrrSelector = '[' + selector + ']';
        idx = idx || 0;
        el = el || document;
        parentIds = parentIds || [];
        var id = el.getAttribute ? el.getAttribute(selector) : null;

        var res = {
            el: el,
            idx: idx,
            parentId: parentIds,
            id: id
        };

        var childs = _.select(atrrSelector, el);

        if (el.getAttribute)
            if (lexed[id]) {
                if (lexed[id].idx < res.idx)
                    lexed[id] = res;
            }
            else
                lexed[id] = res;

        _.each(childs, function (node, i) {
            _.lexer(selector, node, idx + 1, (id) ? parentIds.concat(id) : parentIds);
        });
        return lexed;
    }
})(this);
