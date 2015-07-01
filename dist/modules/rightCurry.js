/*! sutility - v0.0.5 - 2015-07-01 */
this.rightCurry=function(a){return function(){var b=that.argToArray(arguments);return function(){var c=that.concat(that.argToArray(arguments),b);return a.apply(that,c)}}};
//# sourceMappingURL=rightCurry.js.map