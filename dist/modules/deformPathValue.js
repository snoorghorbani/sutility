/*! sutility - v0.0.88 - 2016-06-08 */
this.deformPathValue=function(a,b,c){if(a){if(!a)return this.warn("Utility getValue function first parameter not defined");if(null!=a[b])return a[b]=c(a[b]);for(var b=b.split("."),d=b.shift(),e=a[d];d=b.shift();)e[d]&&_.isArray(e[d])&&_.each(e[d],function(a){_.setValueOnPath(a,b.join("."),c)})}};
//# sourceMappingURL=deformPathValue.js.map