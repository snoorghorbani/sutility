/*! sutility - v0.0.94 - 2016-06-25 */
this.propByPrefix=function(a,b,c){c=_.assignIfNotDefined(c,!1);var d={};for(var e in a)if(0===e.search(b)){var f=c?_.camelCase(e.substr(b.length)):e;d[f]=a[e]}return d};
//# sourceMappingURL=propByPrefix.js.map