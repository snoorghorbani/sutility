/*! sutility - v0.0.992 - 2016-10-19 */
this.date=function(){var a=1948320.5,b=1721425.5,c={};c.persian={},c.persian.to={},c.georgian={},c.georgian.to={},c.julian={},c.julian.to={};var d=function(a){return a=a.toString(),1==a.length?"0"+a:a};return c.persian.to.julian=function(b,c,d){var e,f;return b=parseInt(b),c=parseInt(c),d=parseInt(d),e=b-(b>=0?474:473),f=474+_.math.mod(e,2820),d+(c<=7?31*(c-1):30*(c-1)+6)+Math.floor((682*f-110)/2816)+365*(f-1)+1029983*Math.floor(e/2820)+(a-1)},c.persian.to.georgian=function(a,b,d,e){var f=c.julian.to.georgian(c.persian.to.julian(parseInt(a),parseInt(b),parseInt(d)));return e?f.join(e):f},c.georgian.to.julian=function(a,c,d){return a=parseInt(a),c=parseInt(c),d=parseInt(d),b-1+365*(a-1)+Math.floor((a-1)/4)+-Math.floor((a-1)/100)+Math.floor((a-1)/400)+Math.floor((367*c-362)/12+(c<=2?0:_.is.georgianLeapYear(a)?-1:-2)+d)},c.georgian.to.persian=function(a,b,d,e){var f=c.julian.to.persian(c.georgian.to.julian(parseInt(a),parseInt(b),parseInt(d)));return e?f.join(e):f},c.julian.to.georgian=function(a){var c,e,f,g,h,i,j,k,l,m,n,o,p,q;return a=parseFloat(a),c=Math.floor(a-.5)+.5,e=c-b,f=Math.floor(e/146097),g=_.math.mod(e,146097),h=Math.floor(g/36524),i=_.math.mod(g,36524),j=Math.floor(i/1461),k=_.math.mod(i,1461),l=Math.floor(k/365),m=400*f+100*h+4*j+l,4!=h&&4!=l&&m++,p=c-_.date.georgian.to.julian(m,1,1),q=c<_.date.georgian.to.julian(m,3,1)?0:_.is.georgianLeapYear(m)?1:2,n=Math.floor((12*(p+q)+373)/367),o=c-_.date.georgian.to.julian(m,n,1)+1,new Array(d(m),d(n),d(o))},c.julian.to.persian=function(a){var b,c,e,f,g,h,i,j,k,l;return a=parseFloat(a),a=Math.floor(a)+.5,f=a-_.date.persian.to.julian(475,1,1),g=Math.floor(f/1029983),h=_.math.mod(f,1029983),1029982==h?i=2820:(j=Math.floor(h/366),k=_.math.mod(h,366),i=Math.floor((2134*j+2816*k+2815)/1028522)+j+1),b=i+2820*g+474,b<=0&&b--,l=a-_.date.persian.to.julian(b,1,1)+1,c=l<=186?Math.ceil(l/31):Math.ceil((l-6)/30),e=a-_.date.persian.to.julian(b,c,1)+1,new Array(d(b),d(c),d(e))},c}();
//# sourceMappingURL=date.js.map