/*! sutility - v0.0.77 - 2015-09-13 */
this.groupIf=function(a,b,c){c=c||_["return"];var d={};return _.each(a,function(a){var e=b(a);d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupIf.js.map