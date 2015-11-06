/*! sutility - v0.0.82 - 2015-11-06 */
this.groupByTreeMode=function(){var a=this,b=_.argToArray(arguments),c=b.shift(),d=b.shift(),e=d.shift(),f=b.shift(),g=a.groupBy(c,e,f);return _.each(g,function(b,c){d.length>0&&(g[c]=a.groupByTreeMode.call(a,b,_.cloneArray(d),f))}),c=g};
//# sourceMappingURL=groupByTreeMode.js.map