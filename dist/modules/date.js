/*! sutility - v0.0.96 - 2016-06-26 */
this.date=function(){var a=1948320.5,b=1721425.5,c={};return c.persian={},c.persian.to={},c.georgian={},c.georgian.to={},c.julian={},c.julian.to={},c.persian.to.julian=function(b,c,d){var e,f;return b=parseInt(b),c=parseInt(c),d=parseInt(d),e=b-(b>=0?474:473),f=474+_.math.mod(e,2820),d+(c<=7?31*(c-1):30*(c-1)+6)+Math.floor((682*f-110)/2816)+365*(f-1)+1029983*Math.floor(e/2820)+(a-1)},c.persian.to.georgian=function(a,b,d){return c.julian.to.georgian(c.persian.to.julian(parseInt(a),parseInt(b),parseInt(d)))},c.georgian.to.julian=function(a,c,d){return a=parseInt(a),c=parseInt(c),d=parseInt(d),b-1+365*(a-1)+Math.floor((a-1)/4)+-Math.floor((a-1)/100)+Math.floor((a-1)/400)+Math.floor((367*c-362)/12+(c<=2?0:_.is.georgianLeapYear(a)?-1:-2)+d)},c.georgian.to.persian=function(a,b,d){return c.julian.to.persian(c.georgian.to.julian(parseInt(a),parseInt(b),parseInt(d)))},c.julian.to.georgian=function(a){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;return a=parseInt(a),c=Math.floor(a-.5)+.5,d=c-b,e=Math.floor(d/146097),f=_.math.mod(d,146097),g=Math.floor(f/36524),h=_.math.mod(f,36524),i=Math.floor(h/1461),j=_.math.mod(h,1461),k=Math.floor(j/365),l=400*e+100*g+4*i+k,4!=g&&4!=k&&l++,o=c-_.date.georgian.to.julian(l,1,1),p=c<_.date.georgian.to.julian(l,3,1)?0:_.is.georgianLeapYear(l)?1:2,m=Math.floor((12*(o+p)+373)/367),n=c-_.date.georgian.to.julian(l,m,1)+1,new Array(l,m,n)},c.julian.to.persian=function(a){var b,c,d,e,f,g,h,i,j,k;return a=parseInt(a),a=Math.floor(a)+.5,e=a-_.date.persian.to.julian(475,1,1),f=Math.floor(e/1029983),g=_.math.mod(e,1029983),1029982==g?h=2820:(i=Math.floor(g/366),j=_.math.mod(g,366),h=Math.floor((2134*i+2816*j+2815)/1028522)+i+1),b=h+2820*f+474,b<=0&&b--,k=a-_.date.persian.to.julian(b,1,1)+1,c=k<=186?Math.ceil(k/31):Math.ceil((k-6)/30),d=a-_.date.persian.to.julian(b,c,1)+1,new Array(b,c,d)},c}();
//# sourceMappingURL=date.js.map