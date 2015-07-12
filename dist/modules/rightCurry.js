/*! sutility - v0.0.6 - 2015-07-11 */
this.rightCurry=function(a){return function(){var b=that.argToArray(arguments);return function(){var c=that.concat(that.argToArray(arguments),b);return a.apply(that,c)}}};
//# sourceMappingURL=rightCurry.js.map