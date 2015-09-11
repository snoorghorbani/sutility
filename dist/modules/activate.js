/*! sutility - v0.0.71 - 2015-09-11 */
this.activate=function(a,b,c){b=b||"active",_.dispatcher(a,"click",function(a,d,e){_.className.remove(e,b),_.className.add(d,b),c&&c(d,a)})};
//# sourceMappingURL=activate.js.map