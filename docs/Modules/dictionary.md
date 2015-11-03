# dictionary
> ##### ``` instance[Object] _.dictionary.new(*default[Object])```

```javascript
var dic = _.dictionary.new();
=>{}
var dic = _.dictionary.new({ 'keyName': 'keyValue' });
=>{ 'keyName': 'keyValue' }
```

##Methods

###add key
> ##### ``` [Undefined] instance.add( name[String] , value[object] )```

``` javascript
dic.add('anotherKey', "value");
=> dic= { 'keyName': 'keyValue' ,'anotherKey', "value"}
```
###add reset value
> ##### ``` [Undefined] instance.reset( key[string] )```

``` javascript
dic.add('keyName', "anotherValue");
=> dic= { 'keyName': 'anotherValue' ,'anotherKey', "value"}
dic.reset('keyName');
=> dic= { 'keyName': 'keyValue' ,'anotherKey', "value"}
```
###return data
> ##### ``` [object] instance.data(  )```

``` javascript
dic.data();
=>  { 'keyName': 'keyValue' ,'anotherKey', "value"}
```
