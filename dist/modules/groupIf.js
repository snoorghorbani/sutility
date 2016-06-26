/*! sutility - v0.0.95 - 2016-06-26 */
this.groupIf=function(a,b,c){c=c||_.i;var d={};return _.each(a,function(a){var e=b(a);d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupIf.js.map