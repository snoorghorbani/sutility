/*! sutility - v0.0.79 - 2015-09-18 */
this.groupBy=function(a,b,c){c=c||this["return"];var d={};return _.each(a,function(a){var e=a.data[b];d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupBy.js.map