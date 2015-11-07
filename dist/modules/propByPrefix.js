/*! sutility - v0.0.84 - 2015-11-07 */
this.propByPrefix=function(a,b,c){c=_.assignIfNotDefined(c,!1);var d={};for(var e in a)if(0===e.search(b)){var f=c?_.camelCase(e.substr(b.length)):e;d[f]=a[e]}return d};
//# sourceMappingURL=propByPrefix.js.map