/*! sutility - v0.0.78 - 2015-09-13 */
this.report=function(a){var b=function(b,c,d){var c=c||0,d=d||"",e={},f=[];if(c++,a.is.object(b)){e={};for(var g in b){var h=a.is.array(b[g]),i=a.is.object(b[g]),j=d?d+"."+g:g;e.name=g,e.path=j,e.depts=c,e.type="value",e.isLastNode=!(h||i),a.is.object(b[g])&&(e.type="object"),a.is.array(b[g])&&(e.type="array"),f.push(a.cloneObj(e)),i&&(f=f.concat(that.report(b[g],c,j))),h&&(f=f.concat(that.report(b[g][0],c,j)))}}return f};return b.skeleton=function(c){return a.array.compact(a.map(b(c),function(a){return a.isLastNode?a.path:!1}))},b}(this);
//# sourceMappingURL=report.js.map