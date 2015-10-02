# callIgnore
> ##### ``` [Function] _.callIgnore( [Function] , count[Number] ,*context[Object] ,reset[Booleam=false] )```

####Example
```javascript
var fn = _.callIgnore(function () { return "executed code"}, 3 );

fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
fn();
=> "executed code"

```
``` javascript
var obj = { msg: "executed code" }
var fn = _.callIgnore(function () { return this.msg }, 3 , obj);

fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
fn();
=> "executed code"
fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
```

```javascript
var obj = { msg: "executed code" }
var fn = _.callIgnore(function () { return this.msg }, 3 , obj , true);

fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
fn();
=> "executed code"
fn();
=> undefined
fn();
=> undefined
fn();
=> undefined
fn();
=> "executed code"
```