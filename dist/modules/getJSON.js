/*! sutility - v0.0.97 - 2016-06-28 */
this.getJSON=function(a,b){var c=this.getXHR();a.url=a.url||location.href,a.data=a.data||null,b=b||function(){},a.type=a.type||"json";var d=a.url;if("jsonp"==a.type){window.jsonCallback=b;var e=d.replace("callback=?","callback=jsonCallback"),f=document.createElement("script");f.src=e,document.body.appendChild(f)}c.open("GET",a.url,!0),c.send(a.data),c.onreadystatechange=function(){200==c.status&&4==c.readyState&&b(c.responseText)}};
//# sourceMappingURL=getJSON.js.map