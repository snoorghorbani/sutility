/*! sutility - v0.0.1 - 2015-06-17 */
this["if"]=function(a){var b={};b.is={},b.is.not={};for(var c in a.is)(function(c){"not"!=c&&(b.is[c]=function(b,d){return a.is[c](b)?d():void 0},b.is.not[c]=function(b,d){return a.is.not[c](b)?d():void 0})})(c);return b}(this);
//# sourceMappingURL=if.js.map