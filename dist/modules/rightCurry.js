/*! sutility - v0.0.84 - 2015-11-11 */
this.rightCurry=function(a){return function(b){return function(){var c=a.argToArray(arguments);return function(){var d=a.array.concat(that.argToArray(arguments),c);return b.apply(a,d)}}}}(this);
//# sourceMappingURL=rightCurry.js.map