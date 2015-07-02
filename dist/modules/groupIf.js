/*! sutility - v0.0.5 - 2015-07-02 */
this.groupIf=function(a,b,c){c=c||_["return"];var d={};return _.each(a,function(a){var e=b(a);d[e]=d[e]||[],d[e].push(c(a))}),d};
//# sourceMappingURL=groupIf.js.map