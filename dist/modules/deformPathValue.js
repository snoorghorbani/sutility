/*! sutility - v0.0.88 - 2016-06-08 */
this.deformPathValue=function(a,b,c){if(a){if(!a)return this.warn("Utility getValue function first parameter not defined");if(null!=a[c])return a[c]=b(a[c]);for(var c=c.split("."),d=c.shift(),e=a[d];d=c.shift();)e[d]&&_.is.array(e[d])&&_.each(e[d],function(a){_.setValueOnPath(a,b,c.join("."))})}};
//# sourceMappingURL=deformPathValue.js.map