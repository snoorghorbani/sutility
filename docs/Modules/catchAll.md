# catchAll
> ##### ``` instance[singleton Object] _.catchAll(*config[Object])```

##API
###init
```javascript
var catchall = _.catchall({
    prefix: '/filter',
    partialPrefix: '/filter/filterresult'
});
```
###define key
> ##### ``` [Undefined] instance.key( name[String ] , *config[Object] )```
####config object
| name | default | description |
|----|-------|-----------|
|multi|false||
|default|null||

``` javascript
catchall.key('pageno', { multi: false,default:1 })
catchall.key('feature', { multi: true });
catchall.key('price', { multi: true });
```
###add catchall's instance key value
> ##### ``` [Undefined] instance.add.[defined key]( value[Number|String] , *anotherValue[Number|String] )```

``` javascript
catchAll.add.pageno(1);
catchAll.add.feature("featrue1");
catchAll.add.price(2000,3000);
```
###remove catchall's instance key value
> ##### ``` [Undefined] instance.remove.[defined key]( value[Number|String] , *anotherValue[Number|String] )```

``` javascript
catchAll.remove.pageno(1);
catchAll.remove.feature("featrue1");
catchAll.remove.price(2000,3000);
```
###reset catchall's instance key to default value
> ##### ``` [Undefined] instance.reset.[defined key]( value[Number|String] , *anotherValue[Number|String] )```

``` javascript
catchAll.reset.pageno();
catchAll.reset.feature();
catchAll.reset.price();
```
###patial
> ##### ``` [Undefined] instance.partial( value[Number|String] , *anotherValue[Number|String] )```

``` javascript
catchAll.partial();
=>
```
###build
> ##### ``` [Undefined] instance.build( value[Number|String] , *anotherValue[Number|String] )```

``` javascript
catchAll.build();
=>
```
