# callBox
> ##### ``` [Function] _.callBox( [Function] , (TimeBox)[Number] ,*(Context)[Object] )```

##Example
``` javascript
var fn = _.callBox(function(){ return "executed code" },1000);

//first time of call fn after init

fn();
=> "executed code"

//secondary call in 999 milliseconds after init
fn();
=> undefined

// call in 1001 milliseconds after init
fn();
=> "executed code"

```
