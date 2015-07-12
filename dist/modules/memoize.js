/*! sutility - v0.0.6 - 2015-07-11 */
this.memoize=function(a){return a.cache||(a.cache={}),function(){var b=Array.prototype.slice.call(arguments),c="",d=b.length;for(currentArg=null;d--;)currentArg=b[d],c+=currentArg===Object(currentArg)?JSON.stringify(currentArg):currentArg;return c in a.cache?a.cache[c]:a.cache[c]=a.apply(this,b)}};
//# sourceMappingURL=memoize.js.map