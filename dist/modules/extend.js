/*! sutility - v0.0.85 - 2015-11-15 */
this.extend=function(a,b,c){return _.is.array(a)?_.safeAssignArray(a,b):_.is.object(a)?(_.safeClear(a),_.each(b,function(b,c){a[c]=b},this,c)):a=b,a};
//# sourceMappingURL=extend.js.map