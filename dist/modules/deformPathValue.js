/*! sutility - v0.0.994 - 2016-10-19 */
this.deformPathValue=function(a,b,c,d){if(a){if(null!=a[c])return a[c]=b(a[c]);var c=c.split("."),e=c.shift(),f=a[e];if(d&&0==c.length)return a[e]=b(a);for(;e=c.shift();){if(f[e]&&_.is.array(f[e]))return _.map(f[e],function(a){return _.deformPathValue(a,b,c.join("."),d)});if(f[e])f[e]=b(f[e]);else if(d&&0==c.length)return f[e]=b(f)}}};
//# sourceMappingURL=deformPathValue.js.map