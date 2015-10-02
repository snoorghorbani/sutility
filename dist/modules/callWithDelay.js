/*! sutility - v0.0.79 - 2015-10-02 */
this.callWithDelay=function(a){return function(a,b,c){var d=Date.now();return function(){return Date.now()-d>b?a.apply(c,arguments):void 0}}}(this);
//# sourceMappingURL=callWithDelay.js.map