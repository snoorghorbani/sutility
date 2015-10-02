/*! sutility - v0.0.79 - 2015-10-02 */
this.arrToObj=function(){var a=_.argToArray(arguments),b=a.shift(),c=a.shift(),d=a.shift(),e={};return _.each(b,function(a){var b=a[c];d&&delete a[c],e[b]=a}),e};
//# sourceMappingURL=arrToObj.js.map