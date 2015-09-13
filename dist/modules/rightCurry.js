/*! sutility - v0.0.78 - 2015-09-13 */
this.rightCurry=function(a){return function(b){return function(){var c=that.argToArray(arguments);return function(){var d=a.array.concat(that.argToArray(arguments),c);return b.apply(that,d)}}}}(this);
//# sourceMappingURL=rightCurry.js.map