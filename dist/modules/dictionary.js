/*! sutility - v0.0.75 - 2015-09-11 */
this.dictionary=function(a,b){var c={},d=function(a){c=a||{},_.extend(this,c)};return d.prototype["default"]=function(b){a.extend(c,b)},d.prototype.reset=function(a){this[a]=c[a]},d.prototype.add=function(a,b){this[a]=b},d.prototype.remove=function(a){},d.prototype.data=function(){return _.cloneObj(this,!1)},{"new":function(a){return new d(a)},listen:function(a){}}}(this);
//# sourceMappingURL=dictionary.js.map