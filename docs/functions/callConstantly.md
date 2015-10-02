# callConstantly
> ##### ``` [Function] _.callConstantly( [Function] , count[Number] ,*context[Object] )```

####Example
``` javascript
var fn = _.callConstantly(function () { return "executed code" }, 3);

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
