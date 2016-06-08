/*! sutility - v0.0.87 - 2016-06-08 */
this.randJson=function(a,b){var c=[];return _.repeat(a,function(){var a={};_.each(b,function(b){"string"==b.type?a[b.name]=_.randString(6):"number"==b.type&&(a[b.name]=_.random(0,9))},this),c.push(a)},this),c};
//# sourceMappingURL=randJson.js.map