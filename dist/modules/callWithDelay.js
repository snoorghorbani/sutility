/*! sutility - v0.0.86 - 2015-12-26 */
this.callWithDelay=function(a,b){return function(c,d,e){var f,g,h=Date.now();return function(){g=arguments,h=Date.now(),f=f?f:setInterval(function(){return Date.now()-h<d?void 0:(clearInterval(f),f=b,c.apply(e||a,g||[]))},d)}}}(this);
//# sourceMappingURL=callWithDelay.js.map