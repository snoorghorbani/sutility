/*! sutility - v0.0.95 - 2016-06-26 */
this.regex=function(a){var b={number:/\d+/g},c=a.fn;return c.match=function(a){return a.match(b.number)},c.matchFirst=function(a){return a.match(b.number)[0]},c.type=b,c}(this);
//# sourceMappingURL=regex.js.map