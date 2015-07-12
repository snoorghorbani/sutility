this.extend = function (toObj, fromObj, proroAssign) {
    if (DEBUG) {
        if (_.is.not.defined(toObj)) _.fail('destination object cant be null');
    }
    
    if (_.is.array(toObj)) {
        _.safeAssignArray(toObj, fromObj);
    } else if (_.is.object(toObj)) {
        _.safeClear(toObj);
        _.each(fromObj, function (value, key) {
            toObj[key] = value;
        }, this, proroAssign);
    } else { toObj = fromObj; }
    //}  else { this.warn('safeAssign dont have correct arguments') }
    return toObj;
};

//this.extend = function (toObj, fromObj, proroAssign) {
//    if (DEBUG) {
//        if (_.is.not.defined(toObj)) _.fail('destination object cant be null');
//    }
    
//    if (_.is.array(toObj)) {
//        _.safeAssignArray(toObj, fromObj);
//    } else if (_.is.object(toObj)) {
//        _.safeClear(toObj);
//        _.each(fromObj, function (value, key) {
//            toObj[key] = value;
//        }, this, proroAssign);
//    } else { toObj = fromObj; }
//    //}  else { this.warn('safeAssign dont have correct arguments') }
//    return toObj;
//};