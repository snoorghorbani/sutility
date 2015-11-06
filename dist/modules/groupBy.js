/*! sutility - v0.0.82 - 2015-11-06 */
this.groupBy=function(a,b,c){c=c||_.i;var d={};return _.each(a,function(a){var e=a[b];d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupBy.js.map