/*! sutility - v0.0.997 - 2016-10-29 */
this.propByPrefix=function(a,b,c){c=_.assignIfNotDefined(c,!1);var d={};for(var e in a)if(0===e.search(b)){var f=c?_.camelCase(e.substr(b.length)):e;d[f]=a[e]}return d};
//# sourceMappingURL=propByPrefix.js.map