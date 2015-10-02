# callVoucher
> ##### ``` [Function] _.callVoucher( [Function] , time[Number] , *context[Object] )```

####Example
``` javascript
var obj = {msg:"executed code"}
var fn = _.callConstantly(function () { return this.msg }, 1000 , obj);

//call fn in 10 milisecode after init
fn();
=> "executed code"

//call fn in 999 milisecode after init
fn();
=> "executed code"

//call fn in 1001 milisecode after init
fn();
=> "executed code"
=> undefined
```
