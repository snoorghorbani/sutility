/*! sutility - v0.0.94 - 2016-06-25 */
this.filter=function(a,b){var c=[],d=_.is["function"](b)?b:_.rightCurry(_.is.closet)(b);return _.each(a,function(a){d(a)&&c.push(a)}),c};
//# sourceMappingURL=filter.js.map