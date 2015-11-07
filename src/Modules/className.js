this.className = (function (_, undefined) {
    var className = function (selectorOrDom, className) { };

    className.add = function (selectorOrDom, className) {
        var nodes = _.select(selectorOrDom);

        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                //ToDo
                DOMTokenList.prototype.add.apply(nodes[i].classList, _.spliteAndTrim(className));
                continue;
            }
            if (nodes[i].className.indexOf(className) === -1) {
                nodes[i].className = nodes[i].className + ' ' + className;
            }
        }
    };
    className.remove = function (selectorOrDom, className) {
        var nodes = _.select(selectorOrDom);
        //#region shim for ie
        if (_.is.ie()) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    var classNames = _.spliteAndTrim(className)
                    for (var j = 0; j < classNames.length; j++) {
                        DOMTokenList.prototype.remove.call(nodes[i].classList, classNames[j]);
                    }
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        }
            //#endregion
        else {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
                    continue;
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        }
        var nodes = _.select(selectorOrDom);
        //#region shim for ie
        if (_.is.ie()) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].classList) {
                    var classNames = _.spliteAndTrim(className)
                    for (var i = 0; i < classNames.length; i++) {
                        DOMTokenList.prototype.remove.apply(nodes[i].classList, classNames[i]);
                    }
                }

                var reg = new RegExp(className, 'g');
                nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
            }
        };
        //#endregion
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].classList) {
                DOMTokenList.prototype.remove.apply(nodes[i].classList, _.spliteAndTrim(className));
                continue;
            }

            var reg = new RegExp(className, 'g');
            nodes[i].className = (nodes[i].className.replace(reg, '')).trim();
        }
    }
    className.toggle = function () { };
    className.change = function (selectorOrDom, className, replaceWith) {
        var nodes = _.select(selectorOrDom);
        _.className.remove(nodes, className);
        _.className.add(nodes, replaceWith);
    };
    className.contains = function (selectorOrDom, className) {
        var node = _.selectFirst(selectorOrDom);
        return node.classList.contains(className);
    };
    className.if = function (selectorOrDom, className, fn) {
        var nodes = _.select(selectorOrDom);
        for (var i = 0; i < nodes.length; i++)
            ((fn(nodes[i])) ? _.className.add : _.className.remove)(nodes[i], className);
    };
    return className;
})(this);