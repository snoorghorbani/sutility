/*! sutility - v0.0.84 - 2015-11-07 */
this.valueOf=function(a,b){1==arguments.length&&(b=a,a=window);var c;if(_.is.array(a))return a[b];c=a;for(var d,e=b.split("."),f=0;d=e[f];f++){if(!c[d])return void _.warn(["dont have ",d,"property"].join(" "));if(_.is.array(c[d])){for(var g,h={},i=e.splice(f+1),j=0;g=c[d][j];j++)h[j]=_.getValue2(g,i.join("."));return h}c=c[d]}return c};
//# sourceMappingURL=valueOf.js.map