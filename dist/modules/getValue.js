/*! sutility - v0.0.96 - 2016-06-26 */
this.getValue=function(a,b){if(null!==a[b])return a[b];b=b.split(".");for(var c=0,d=a[b[c++]];c<b.length;)d=d[b[c++]];return c==b.length?d:null};
//# sourceMappingURL=getValue.js.map