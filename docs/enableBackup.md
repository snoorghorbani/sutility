# enableBackup

``` javascript
var obj = { a : 1 };
_.enableBackup(obj);

obj.backup('bk1');
obj.a=2;
obj.backup('bk2');
obj.restore('bk1');

console.log(obj.a);
=> 1

obj.restore('bk2');
console.log(obj.a);
=> 2

```
