/*! sutility - v0.0.98 - 2016-07-02 */
this.setValue=function(a,b,c){if(a){if(!a)return this.warn("Utility getValue function first parameter not defined");if(null!=a[c])return a[c]=b;for(var c=c.split("."),d=c.shift(),e=a[d];c.length>1;)d=c.shift(),e[d]=e[d]||{},e=e[d],_.is.array(e)&&_.each(e,function(a){_.setValue(a,b,c.join("."))});return e[c[0]]=b,a}};
//# sourceMappingURL=setValue.js.map