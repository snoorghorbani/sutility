/*! sutility - v0.0.82 - 2015-11-07 */
this.callWhen=function(a,b,c,d){var e=_.is["function"](a)?"fn":"string",f=setInterval(function(){("string"!=e||_.valueOf(a))&&("fn"!=e||a())&&(!c&&clearInterval(f),b())},d||20)};
//# sourceMappingURL=callWhen.js.map