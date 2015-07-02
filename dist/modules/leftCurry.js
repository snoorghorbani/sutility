/*! sutility - v0.0.5 - 2015-07-02 */
this.leftCurry=function(a,b){return b=b||that,function(){var c=that.argToArray(arguments);return function(){var d=that.concat(c,that.argToArray(arguments));return a.apply(b,d)}}};
//# sourceMappingURL=leftCurry.js.map