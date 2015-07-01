this.replaceInArray = function (array, from, replaceBy) {
    Array.prototype.splice.apply(array, [from, replaceBy.length + from].concat(replaceBy));
};