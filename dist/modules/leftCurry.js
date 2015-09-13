/*! sutility - v0.0.76 - 2015-09-13 */
this.leftCurry=function(a,b){return b=b||that,function(){var c=_.argToArray(arguments);return function(){var d=_.array.concat(c,_.argToArray(arguments));return a.apply(b,d)}}};
//# sourceMappingURL=leftCurry.js.map