/*! sutility - v0.0.987 - 2016-07-04 */
this.extractWrapedBy=function(a,b){var c=null;if("{}"==b)c=/\{(.*?)\}/g;else if("()"==b)c=/\((.*?)\)/g;else{if("[]"!=b)return;c=/\[(.*?)\]/g}for(var d=new RegExp(c),e=a.match(d),f=0;e&&f<e.length;f++)e[f]=e[f].substring(1,e[f].length-1);return e};
//# sourceMappingURL=extractWrapedBy.js.map