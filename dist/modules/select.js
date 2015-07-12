/*! sutility - v0.0.6 - 2015-07-11 */
this.select=function(a,b){b=b||document.body;var c="";return c=this.is.string(a)?b.querySelectorAll(a):a,this.is.nodeList(c)?c=this.argToArray(c):this.is.HTMLCollection(c)?c=this.argToArray(c):this.is.array(c)||(c=[c]),c},this.selectFirst=function(a,b){return _.valueOf(_.select(a,b),0)};
//# sourceMappingURL=select.js.map