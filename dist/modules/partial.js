/*! sutility - v0.0.989 - 2016-10-03 */
this.partial=function(a,b){var c={};_.is.not.array(b)&&(b=_.report.skeleton(b));for(var d,e=0;d=b[e];e++){var f=d.split("."),g=f.shift(),h=[f.join(".")];_.is.not.contain(d,"\\.")?c[d]=a[d]:_.is.contain(d,"\\.")&&(c[g]=_.assignIfNotDefined(c[g]||{}),c[g]=_.merge(c[g],_.partial(a[g],h)))}return c};
//# sourceMappingURL=partial.js.map