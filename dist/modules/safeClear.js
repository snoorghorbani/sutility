/*! sutility - v0.0.84 - 2015-11-07 */
this.safeClear=function(a){if(_.is.array(a))Array.prototype.splice.apply(a,[0,a.length].concat([]));else for(var b in a)a.hasOwnProperty(b)&&delete a[b]};
//# sourceMappingURL=safeClear.js.map