/*! sutility - v0.0.79 - 2015-10-02 */
this.callWhen=function(a,b,c,d){d=d||20;var e=_.is["function"](a)?"fn":"string",f=setInterval(function(){("string"!=e||_.valueOf(a))&&("fn"!=e||a())&&(!c&&clearInterval(f),b())},d)};
//# sourceMappingURL=callWhen.js.map