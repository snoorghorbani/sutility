/*! sutility - v0.0.5 - 2015-07-02 */
this.pipe=function(a){var b={};return function(a,c){var a=a;return b[a]=b[a]||[],function(d){b[a].push(d),setInterval(function(){var c=b[a].shift();c&&c()},c||1)}}}(this);
//# sourceMappingURL=pipe.js.map