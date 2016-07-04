/*! sutility - v0.0.982 - 2016-07-04 */
this.chain=function(a,b,c){return function(){var d=that.argToArray(arguments),e=that.exec(a,c||null,d),f=e?e.promise||e.$promise:null;return f?void f.then(function(){return that.exec(b,c||null,[e])}):e&&e.then?(e.then(function(){var a=that.argToArray(arguments);that.exec(b,c||null,a)}),e):that.exec(b,c||null,[e])}};
//# sourceMappingURL=chain.js.map