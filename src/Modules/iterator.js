this.iterator = (function (_) {
    return function (array) {
        var index = -1;
        return {
            next: function () {
                return index < array.length ?
               { value: array[++index], done: false } :
               { done: true };
            },
            prev: function () {
                return index > -1?
               { value: array[--index], done: false } :
               { done: true };
            },
            current : function () {
                return { value: array[index], done: false }
            },
            index : function () { return index }
        }
    };
})(this);