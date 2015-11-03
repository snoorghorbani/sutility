# attach
> ##### ``` id[Number] _.attach(selctor[String || Element], state[String], fn[Function])```

```javascript
var id = _.attach('.menu > .item', 'click' , function( event[Event] , el[Element] ){});
var id = _.attach(document.body.querySelectorAll('.menu > .item'), 'click' , function( event[Event] , el[Element] ){});
```
----------------------------------------------------
- [ ] impelement detach function
