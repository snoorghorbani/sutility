/*! sutility - v0.0.997 - 2016-10-29 */
this.callBox=function(a){return function(a,b,c){var d=null;return function(){if(!d||Date.now()-d>b)return d=Date.now(),a.apply(c,arguments)}}}(this);
//# sourceMappingURL=callBox.js.map