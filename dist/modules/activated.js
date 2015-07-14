/*! sutility - v0.0.7 - 2015-07-14 */
this.activated=function(a,b,c,d){c=c||"active";var e=_.select(a);_.each(e,function(a){var e=_.select(b,a);_.each(e,function(a){_.event(a,"click",function(){_.className.remove(e,c),_.className.add(a,c),d&&d(this)})})})};
//# sourceMappingURL=activated.js.map