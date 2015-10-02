# callWithDelay
> ##### ``` [Function] _.callWithDelay( [Function] , delay[Number] , context[Object] )```

####Example
``` javascript
var obj = { msg: "executed code" }
var fn = _.callWithDelay(function (str) { return this.msg + str }, 1000 , obj);

fn(" !");
fn(" ! nice");
fn(" ! nice :-)");


//after 1000 millisecond of last called
=> "executed code  ! nice :-)"
```
