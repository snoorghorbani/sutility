/*! sutility - v0.0.84 - 2015-11-11 */
this.groupByFlatMode=function(){var a=this,b=_.argToArray(arguments),c=b.shift(),d=b.shift(),e={};return this.each(c,function(b){var c="";a.each(d,function(a){c+="_"+b[a]}),e[c]=e[c]||[],e[c].push(b)}),e};
//# sourceMappingURL=groupByFlatMode.js.map