/*! sutility - v0.0.7 - 2015-07-14 */
this.groupBy=function(a,b,c){c=c||this["return"];var d={};return _.each(a,function(a){var e=a.data[b];d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupBy.js.map