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
###add
> ##### ``` [Undefined] instance.key( name[String ] , *config[Object] )```
####config object
| name | default | description |
|----|-------|-----------|
|multi|false||
``` javascript
catchAll.key('pageno', { multi: false })
catchAll.key('feature', { multi: true });
```
