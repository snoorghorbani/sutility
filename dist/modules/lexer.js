/*! sutility - v0.0.86 - 2015-12-26 */
this.lexer=function(a){var b={};return function(c,d,e,f){var g="["+c+"]";e=e||0,d=d||document,f=f||[];var h=d.getAttribute?d.getAttribute(c):null,i={el:d,idx:e,parentId:f,id:h},j=a.select(g,d);return d.getAttribute&&(b[h]?b[h].idx<i.idx&&(b[h]=i):b[h]=i),a.each(j,function(b,d){a.lexer(c,b,e+1,h?f.concat(h):f)}),b}}(this);
//# sourceMappingURL=lexer.js.map