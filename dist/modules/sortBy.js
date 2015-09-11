/*! sutility - v0.0.76 - 2015-09-11 */
this.sortBy=function(a,b,c){return _.is["function"](b)?a.sort(b):"string"==b?a.sort(function(a,b){var d=_.getValue(a,c).toUpperCase(),e=_.getValue(b,c).toUpperCase();return e>d?-1:d>e?1:0}):"number"==b?a.sort(function(a,b){return _.getValue(a,c)>_.getValue(b,c)?1:-1}):void 0};
//# sourceMappingURL=sortBy.js.map