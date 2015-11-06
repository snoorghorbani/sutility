# prototype

## prototype.extend
> ##### ``` prototype[Object] _.prototype.extend(object[Objct || Function] , Object )```

``` javascript
var constructor = function(){};
var instace= new constructor();
_.prototype.extend(instance, {a : 1});
=> instance.__proto__= { a : 1 }
_.prototype.extend(constructor, {b : 2});
=> instance.__proto__= { a : 1 , b : 2 }
```
