/*! sutility - v0.0.992 - 2016-10-19 */
this.callWhen=function(a,b,c,d){var e=_.is["function"](a)?"fn":"string",f=setInterval(function(){("string"!=e||_.getValue(a))&&("fn"!=e||a())&&(!c&&clearInterval(f),b())},d||20)};
//# sourceMappingURL=callWhen.js.map