/*! sutility - v0.0.997 - 2016-10-29 */
this.activate=function(a,b,c){b=b||"active",_.attach(a,"click",function(a,d,e){_.className.remove(e,b),_.className.add(d,b),c&&c(a,d)})};
//# sourceMappingURL=activate.js.map