/*! sutility - v0.0.5 - 2015-07-05 */
this.merge=function(a,b){_.is.object(b)?_.each(b,function(c,d){a[d]=b[d]}):_.is.array(b)&&_.each(b,function(b){a.push(b)})};
//# sourceMappingURL=merge.js.map