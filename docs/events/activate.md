# activate
> ##### ``` void _.activate(selector[String || Element], classname[String || Array of String], fn[Function])```


```javascript
_.activate('.menu > .item', 'active' , function( activate[Event] , el[Element] ){});
_.activate(document.body.querySelectorAll('.menu > .item'), "['active', 'red']" , function( event[Event] , el[Element] ){});
```
