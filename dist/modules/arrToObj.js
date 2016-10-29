/*! sutility - v0.0.997 - 2016-10-29 */
this.arrToObj=function(){var a=_.argToArray(arguments),b=a.shift(),c=a.shift(),d=a.shift(),e={};return _.each(b,function(a){var b=a[c];d&&delete a[c],e[b]=a}),e};
//# sourceMappingURL=arrToObj.js.map