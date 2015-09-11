/*! sutility - v0.0.71 - 2015-09-11 */
this.activated=function(a,b,c,d){c=c||"active";var e=_.select(a);_.each(e,function(a){var e=_.select(b,a);_.each(e,function(a){_.event(a,"click",function(b){_.className.remove(e,c),_.className.add(a,c),d&&d(this,b)})})})};
//# sourceMappingURL=activated.js.map