/*! sutility - v0.0.997 - 2016-10-29 */
this.cloneObj=function(a,b){b=_.assignIfNotDefined(b,!0);var c=_.object();for(var d in a)(b||a.hasOwnProperty(d))&&(_.is.scalar(a[d])?c[d]=a[d]:c[d]=_.clone(a[d]));return c};
//# sourceMappingURL=cloneObj.js.map