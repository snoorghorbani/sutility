[[Object|Checker#object]]
[[Array|Checker#array]]
## Object
### is.object
``` javascript 
_.is.object({});
=> true;
_.is.object([]);
=> false
_.is.object(1);
=> false
_.is.object("string");
=> false
```
### is.not.object
``` javascript 
_.is.not.object({});
=> false;
_.is.not.object([]);
=> true
_.is.not.object(1);
=> true
_.is.not.object("string");
=> true
```
### if.is.object
``` javascript 
_.if.is.object({},function(){
   console.log("is object");
});
=> "is object"
```
### if.is.not.object
``` javascript 
_.if.is.not.object([],function(){
   console.log("is not object");
});
=> "is not object"
```

## Array
### is.array
``` javascript 
_.is.array([]);
=> true;
_.is.array({});
=> false
_.is.array(1);
=> false
_.is.array("string");
=> false
```
### is.not.object
``` javascript 
_.is.not.array([]);
=> false;
_.is.not.array({});
=> true
_.is.not.array(1);
=> true
_.is.not.array("string");
=> true
```
### if.is.object
``` javascript 
_.if.is.array([],function(){
   console.log("is array");
});
=> "is array"
```
### if.is.not.object
``` javascript 
_.if.is.not.array({},function(){
   console.log("is not object");
});
=> "is not array"
```
