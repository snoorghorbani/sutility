this.verify = function (obj, comparator) {
    if (DEBUG) {
        if (_.is.not.object(obj)) _.fail('is Not Object');
        if (_.is.not.object(comparator)) _.fail('is Not Object');
        if (!(_.haveKey(comparator, 'key') && _.haveKey(comparator, 'condition') && _.haveKey(comparator, 'value'))) _.fail('dont have correct comparator attrs');
    }
    
    var value = obj[comparator.key];
    return ((value !== undefined) && _.compare(value, comparator.condition, comparator.value));
};
