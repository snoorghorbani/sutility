/*! sutility - v0.0.6 - 2015-07-11 */
this.availableDim=function(){var a=document.createElement("div");a.style.position="fixed",a.style.top="0px",a.style.right="0px",a.style.bottom="0px",a.style.left="0px",document.body.appendChild(a);var b=a.offsetHeight,c=a.offsetWidth;return a.parentNode.removeChild(a),{height:b,width:c}};
//# sourceMappingURL=availableDim.js.map