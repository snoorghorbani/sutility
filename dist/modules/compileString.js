/*! sutility - v0.0.76 - 2015-09-13 */
this.compileString=function(a,b,c){var d=/\{\{/,e=[],f=a.search(d);if(f>-1){e[e.length]=a.substring(0,f),a=a.substring(f);var g=a.search(/\}\}/),h=a.substring(2,g),i=b[h.trim()];this.is.object(i)&&(i=c.call(null,i)),e[e.length]=i,a=a.substring(g+2),e=e.concat(this.compileString(a,b,c))}else e[e.length]=a;return e.join("")};
//# sourceMappingURL=compileString.js.map