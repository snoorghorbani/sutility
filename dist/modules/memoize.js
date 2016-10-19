/*! sutility - v0.0.995 - 2016-10-19 */
this.memoize=function(a){return a.cache||(a.cache={}),function(){for(var b=Array.prototype.slice.call(arguments),c="",d=b.length,e=null;d--;)e=b[d],c+=e===Object(e)?JSON.stringify(e):e;return c in a.cache?a.cache[c]:a.cache[c]=a.apply(this,b)}};
//# sourceMappingURL=memoize.js.map