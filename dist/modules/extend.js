/*! sutility - v0.0.97 - 2016-06-28 */
this.extend=function(a,b,c){return _.is.array(a)?_.safeAssignArray(a,b):_.is.object(a)?(_.safeClear(a),_.each(b,function(b,c){a[c]=b},this,c)):a=b,a};
//# sourceMappingURL=extend.js.map