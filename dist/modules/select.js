/*! sutility - v0.0.996 - 2016-10-29 */
this.select=function(a,b){b=b||document;var c="";return c=that.is.string(a)?b.querySelectorAll(a):a,that.is.nodeList(c)?c=that.argToArray(c):that.is.HTMLCollection(c)?c=that.argToArray(c):that.is.array(c)||(c=[c]),c},this.selectFirst=function(a,b){return _.getValue(_.select(a,b),0)};
//# sourceMappingURL=select.js.map