/*! sutility - v0.0.997 - 2016-10-29 */
this.merge=function(a,b){var c=_.cloneObj(a);return _.is.object(b)?_.each(b,function(a,d){c[d]=b[d]}):_.is.array(b)&&_.each(b,function(a){c.push(a)}),c};
//# sourceMappingURL=merge.js.map