/*! sutility - v0.0.987 - 2016-07-04 */
this.activate=function(a,b,c){b=b||"active",_.attach(a,"click",function(a,d,e){_.className.remove(e,b),_.className.add(d,b),c&&c(a,d)})};
//# sourceMappingURL=activate.js.map