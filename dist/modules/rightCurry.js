/*! sutility - v0.0.96 - 2016-06-26 */
this.rightCurry=function(a){return function(b){return function(){var c=a.argToArray(arguments);return function(){var d=a.array.concat(that.argToArray(arguments),c);return b.apply(a,d)}}}}(this);
//# sourceMappingURL=rightCurry.js.map