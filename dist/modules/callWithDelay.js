/*! sutility - v0.0.997 - 2016-10-29 */
this.callWithDelay=function(a,b){return function(c,d,e){var f,g,h=Date.now();return function(){g=arguments,h=Date.now(),f=f?f:setInterval(function(){if(!(Date.now()-h<d))return clearInterval(f),f=b,c.apply(e||a,g||[])},d)}}}(this);
//# sourceMappingURL=callWithDelay.js.map