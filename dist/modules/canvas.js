/*! sutility - v0.0.86 - 2015-12-26 */
this.canvas=function(a){var b=function(){};return b.arc=function(a,b,c,d,e,f,g){a.beginPath(),a.arc(b,c,d,e,f,g),a.closePath(),a.fill(),a.stroke()},b.rect=function(a,b,c,d,e,f,g){a.beginPath(),a.rect(b,c,d,e),a.closePath(),f!==!1&&a.fill(),g!==!1&&a.stroke()},b.text=function(a,b,c,d){a.beginPath(),a.fillText(b,c,d),a.fill(),a.closePath()},b.line=function(a,b,c){a.beginPath(),a.moveTo(b.x,b.y),a.lineTo(c.x,c.y),a.closePath(),a.stroke()},b}(this);
//# sourceMappingURL=canvas.js.map