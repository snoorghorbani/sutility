/*! sutility - v0.0.93 - 2016-06-25 */
this.callConstantly=function(a){return function(a,b,c){return function(){--b;var d;return a&&(d=a.apply(c||{},arguments)),0==b&&(a=null),d}}}(this);
//# sourceMappingURL=callConstantly.js.map