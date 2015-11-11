/*! sutility - v0.0.84 - 2015-11-11 */
this.each=function(a,b,c,d){if(d=this.assignIfNotDefined(d,!1),!a)return!1;this.is.nodeList(a)&&this.each(this.argToArray(a),b,c);var e;if(this.is.array(a)||this.is["function"](a))for(e in a)(a.hasOwnProperty(e)||d)&&b.call(c,a[e],e);if(this.is.object(a))for(e in a)(a.hasOwnProperty(e)||d)&&b.call(c,a[e],e)};
//# sourceMappingURL=each.js.map