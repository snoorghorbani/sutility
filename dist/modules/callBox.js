/*! sutility - v0.0.79 - 2015-10-02 */
this.callBox=function(a){return function(a,b,c){var d=null;return function(){return!d||Date.now()-d>b?(d=Date.now(),a.apply(c,arguments)):void 0}}}(this);
//# sourceMappingURL=callBox.js.map