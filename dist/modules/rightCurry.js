/*! sutility - v0.0.996 - 2016-10-29 */
this.rightCurry=function(a){return function(b){return function(){var c=a.argToArray(arguments);return function(){var d=a.array.concat(that.argToArray(arguments),c);return b.apply(a,d)}}}}(this);
//# sourceMappingURL=rightCurry.js.map