/*! sutility - v0.0.84 - 2015-11-11 */
this.loadJS=function(a){var b={};return function(a,c){if(b[a])b[a].state?setTimeout(function(){c(a,a)},1):b[a].callbacks.push(c);else{b[a]={state:!1,callbacks:[]},b[a].callbacks.push(c);var d=document.createElement("script");d.setAttribute("type","text/javascript"),d.onload=function(c){var d=c.srcElement||c.explicitOriginalTarget||c.path[0],e=d.getAttribute("src");e&&(a=e.substring(1,e.length)),b[a].state=!0;for(var f,g=0;f=b[a].callbacks[g];g++)f(a)},d.setAttribute("src","/"+a),document.getElementsByTagName("head")[0].appendChild(d)}}}(this);
//# sourceMappingURL=loadJS.js.map