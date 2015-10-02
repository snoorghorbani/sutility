# catchAll
> ##### ``` instance[Object] _.catchAll(*config[Object])```

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

``` javascript
catchall.key('pageno', { multi: false })
catchall.key('feature', { multi: true });
```
