/*! sutility - v0.0.82 - 2015-11-07 */
this.callWhen=function(a,b,c,d){var e=_.is["function"](b)?"fn":"string",f=setInterval(function(){("string"!=e||_.valueOf(b))&&("fn"!=e||b())&&(!c&&clearInterval(f),a())},d||20)};
//# sourceMappingURL=callWhen.js.map