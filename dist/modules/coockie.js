/*! sutility - v0.0.82 - 2015-11-07 */
this.cookie=function(a){var b=function(){};return b.set=function(b,c,d){a.is.object(c)&&(c=JSON.stringify(c));var e=new Date;e.setTime(e.getTime()+24*d*60*60*1e3);var f="expires="+e.toUTCString();return document.cookie=a.compileString("{{key}}={{value}};{{expires}},",{key:b,value:c,expires:f}),document.cookie},b.get=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""},b.remove=function(a){b.set(a,"",0)},b}(this);
//# sourceMappingURL=coockie.js.map