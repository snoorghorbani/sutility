/*! sutility - v0.0.78 - 2015-09-13 */
this.safeClear=function(a){if(_.is.array(a))Array.prototype.splice.apply(a,[0,a.length].concat([]));else for(var b in a)a.hasOwnProperty(b)&&delete a[b]};
//# sourceMappingURL=safeClear.js.map