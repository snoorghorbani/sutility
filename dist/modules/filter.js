/*! sutility - v0.0.98 - 2016-07-02 */
this.filter=function(a,b){var c=[],d=_.is["function"](b)?b:_.rightCurry(_.is.closet)(b);return _.each(a,function(a){d(a)&&c.push(a)}),c};
//# sourceMappingURL=filter.js.map