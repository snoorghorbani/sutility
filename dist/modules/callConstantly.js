/*! sutility - v0.0.86 - 2015-12-26 */
this.callConstantly=function(a){return function(a,b,c){return function(){--b;var d;return a&&(d=a.apply(c||{},arguments)),0==b&&(a=null),d}}}(this);
//# sourceMappingURL=callConstantly.js.map