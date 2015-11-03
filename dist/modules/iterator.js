/*! sutility - v0.0.82 - 2015-11-04 */
this.iterator=function(a){return function(a){var b=-1;return{next:function(){return b<a.length?{value:a[++b],done:!1}:{done:!0}},prev:function(){return b>-1?{value:a[--b],done:!1}:{done:!0}},current:function(){return{value:a[b],done:!1}},index:function(){return b}}}}(this);
//# sourceMappingURL=iterator.js.map