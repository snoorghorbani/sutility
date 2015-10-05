/*! sutility - v0.0.79 - 2015-10-05 */
this.callWhen=function(a,b,c,d){var e=_.is["function"](b)?"fn":"string",f=setInterval(function(){("string"!=e||_.valueOf(b))&&("fn"!=e||b())&&(!c&&clearInterval(f),a())},d||20)};
//# sourceMappingURL=callWhen.js.map