/*! sutility - v0.0.5 - 2015-07-05 */
this.memoize=function(a){return a.cache||(a.cache={}),function(){var b=Array.prototype.slice.call(arguments),c="",d=b.length;for(currentArg=null;d--;)currentArg=b[d],c+=currentArg===Object(currentArg)?JSON.stringify(currentArg):currentArg;return c in a.cache?a.cache[c]:a.cache[c]=a.apply(this,b)}};
//# sourceMappingURL=memoize.js.map