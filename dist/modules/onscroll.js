/*! sutility - v0.0.982 - 2016-07-04 */
var scrollTopSubs={},scrollDownSubs={};this.onScrollDown=function(a,b){scrollDownSubs[a]=scrollDownSubs[a]||[],scrollDownSubs[a].push(b)},this.onScrollTop=function(a,b){scrollTopSubs[a]=scrollTopSubs[a]||[],scrollTopSubs[a].push(b)},this.onscroll=function(a){var b=[];return window.onscroll=function(){that.each(b,function(a){a()})},function(a){b.push(a)}}(window.onscroll),this.onscroll(function(){var a=window.scrollY;that.each(scrollTopSubs,function(b,c){c<a&&that.each(scrollTopSubs[c],function(a){a()})}),that.each(scrollDownSubs,function(b,c){c>a&&that.each(scrollDownSubs[c],function(a){a()})})});
//# sourceMappingURL=onscroll.js.map