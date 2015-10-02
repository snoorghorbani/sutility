# callConstantly
> ##### ``` [Function] _.callConstantly( [Function] , count[Number] ,*context[Object] )```

####Example
``` javascript
var obj = {msg:"executed code"}
var fn = _.callConstantly(function () { return this.msg }, 3 , obj);

fn();
=> "executed code"
fn();
=> "executed code"
fn();
=> "executed code"

fn();
=> undefined
fn();
=> undefined
```
