# catchAll
> ##### ``` instance[Object] _.catchAll(*config[Object])```

##API
###add
``` javascript
var obj = {msg:"executed code"}
var fn = _.callConstantly(function () { return this.msg }, 1000 , obj);

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
