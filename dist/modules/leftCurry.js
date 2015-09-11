/*! sutility - v0.0.7 - 2015-07-14 */
this.leftCurry=function(a,b){return b=b||that,function(){var c=_.argToArray(arguments);return function(){var d=_.array.concat(c,_.argToArray(arguments));return a.apply(b,d)}}};
//# sourceMappingURL=leftCurry.js.map