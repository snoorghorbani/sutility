/*! sutility - v0.0.84 - 2015-11-11 */
this.groupBy=function(a,b,c){c=c||_.i;var d={};return _.each(a,function(a){var e=a[b];d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupBy.js.map