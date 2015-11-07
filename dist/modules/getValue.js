/*! sutility - v0.0.84 - 2015-11-07 */
this.getValue=function(a,b){if(null!==a[b])return a[b];b=b.split(".");for(var c=0,d=a[b[c++]];c<b.length;)d=d[b[c++]];return c==b.length?d:null};
//# sourceMappingURL=getValue.js.map