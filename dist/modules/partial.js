/*! sutility - v0.0.6 - 2015-07-11 */
this.partial=function(a,b){for(var c,d={},e=0;c=b[e];e++){var f=c.split("."),g=f.shift(),h=[f.join(".")];_.is.not.contain(c,"\\.")?d[c]=a[c]:_.is.contain(c,"\\.")&&(d[g]=_.assignIfNotDefined(d[g]||{}),d[g]=_.merge(d[g],_.partial(a[g],h)))}return d};
//# sourceMappingURL=partial.js.map