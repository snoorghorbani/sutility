/*! sutility - v0.0.72 - 2015-09-11 */
this.haveKey=function(a,b){for(var c,d=a,e=b.split("."),f=0;c=e[f];f++){if(!d[c]&&0!==d[c])return _.warn(["dont have ",c,"property"].join(" ")),!1;_.is.not.array(d[c])&&(d=d[c])}return!0};
//# sourceMappingURL=haveKey.js.map