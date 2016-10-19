/*! sutility - v0.0.992 - 2016-10-19 */
this.flatTreeBy=function(a,b,c,d,e,f,g){d=d||[],g=g||0,_.each(_.cloneObj(a),function(a){a.parentIdn=e||f||"root",a.depth=g,d.push(a),a[b]&&a[b].length>0&&that.flatTreeBy(a[b],b,c,d,a[c],f,g+1),delete a[b]})};
//# sourceMappingURL=flatTreeBy.js.map