/*! sutility - v0.0.91 - 2016-06-25 */
this.enableBackup=function(a,b){var c={};return c.__repository={},c.backup=function(b){return b=a.assignIfNotDefined(b,"last"),this.__repository[b]=JSON.stringify(this),this.__repository[b]},c.restore=function(b){if(b=a.assignIfNotDefined(b,"last"),!a.is.not.defined(this.__repository[b])){var c=JSON.parse(this.__repository[b]);return a.update(this,c)}},function(b){var d=a["if"].is.not["function"](b,function(){return a.get.constructor(b)});return a.prototype.extend(d,c),d}}(this);
//# sourceMappingURL=enableBackup.js.map