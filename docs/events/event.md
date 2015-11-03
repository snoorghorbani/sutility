# event
> ##### ``` void _.event(selector[String || Element], state[String], fn[Function])```
> ###### state[String] :
- click
- mouseenter
- mouseleave
- mouseover
- ...

```javascript
_.attach('.menu > .item', 'click' , function( event[Event] , el[Element] ){});
_.attach(document.body.querySelectorAll('.menu > .item'), 'click' , function( event[Event] , el[Element] ){});
```
