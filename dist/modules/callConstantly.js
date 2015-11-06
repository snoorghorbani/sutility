/*! sutility - v0.0.82 - 2015-11-06 */
this.callConstantly=function(a){return function(a,b,c){return function(){--b;var d;return a&&(d=a.apply(c||{},arguments)),0==b&&(a=null),d}}}(this);
//# sourceMappingURL=callConstantly.js.map