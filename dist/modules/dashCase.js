/*! sutility - v0.0.86 - 2015-12-26 */
this.dashCase=function(a){return a.replace(/([A-Z])|([\W|\_])/g,function(a){return/[\w]/.test(a)?"_"===a?"-":"-"+a.toLowerCase():"-"})};
//# sourceMappingURL=dashCase.js.map