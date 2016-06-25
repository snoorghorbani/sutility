/*! sutility - v0.0.91 - 2016-06-25 */
this.callBox=function(a){return function(a,b,c){var d=null;return function(){if(!d||Date.now()-d>b)return d=Date.now(),a.apply(c,arguments)}}}(this);
//# sourceMappingURL=callBox.js.map