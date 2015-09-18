/*! sutility - v0.0.79 - 2015-09-18 */
this.upsert=function(a,b,c,d){var e=!0;_.each(a,function(d,f){c(d)&&(e=!1,that.safeAssign(a[f],b))});e&&a.push(b)};
//# sourceMappingURL=upsert.js.map