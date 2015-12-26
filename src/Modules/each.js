this.each = function (obj, iterator, context, onProto) {
    onProto = this.assignIfNotDefined(onProto, false);
    if (!obj) return false;

    if (this.is.nodeList(obj)) this.each(this.argToArray(obj), iterator, context);

    //remove improve perfomancee
    //obj.forEach && obj.forEach(iterator, context);
    var key;
    if (this.is.array(obj) || this.is['function'](obj))
        for (key in obj)
            if ((obj.hasOwnProperty && obj.hasOwnProperty(key)) || onProto)
                iterator.call(context, obj[key], key);
    if (this.is.object(obj))
        for (key in obj)
            if ((obj.hasOwnProperty && obj.hasOwnProperty(key)) || onProto)
                iterator.call(context, obj[key], key);
};