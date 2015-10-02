# catchAll
> ##### ``` instance[singleton Object] _.catchAll(*config[Object])```
####config object
| name | default | description |
|----|-------|-----------|
|urlPrefix|/filter||
|routePrefix|/filter/filterresult||
```javascript
var catchall = _.catchall({
    prefix: '/filter',
    partialPrefix: '/filter/filterresult'
});
```

##Methods

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
###getRoute
> ##### ``` url[String] instance.getRoute()```

``` javascript
catchAll.partial();
=> "{{window.location.origin}}/filter/filterresult/pageno-1/price-2000-3000"
```
###getUrl
> ##### ``` routePath[String] instance.getUrl()```

``` javascript
catchAll.build();
=> "{{window.location.origin}}/filter/pageno-1/price-2000-3000"
```

----------------------------------------------------
- [ ] get keys array in config parameter
