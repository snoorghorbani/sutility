/*! sutility - v0.0.982 - 2016-07-04 */
this.safeClear=function(a){if(_.is.array(a))Array.prototype.splice.apply(a,[0,a.length].concat([]));else for(var b in a)a.hasOwnProperty(b)&&delete a[b]};
//# sourceMappingURL=safeClear.js.map