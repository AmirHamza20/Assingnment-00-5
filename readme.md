getElementById: Finds a single element by its unique id.
getElementsByClassName: Finds all elements that share a specific class name.
querySelector: Finds the first element that matches a specified CSS selector.
querySelectorAll: Finds all elements that match a specified CSS selector.




To create and insert a new element:
Create: Use document.createElement('tagName') (e.g., document.createElement('div')).
Insert: Use methods like appendChild(), insertBefore(), after(), or prepend() on an existing parent element to add your new element.



Event Bubbling: When an event happens on an element (like a click), it first runs on that element. Then, it "bubbles up" to its parent, then its grandparent, and so on, all the way up to the document object. This means clicking a button can also trigger click handlers on its parent div or even the body.



Event Delegation: Instead of adding an event listener to every child element, you add just one event listener to their common parent. When an event bubbles up to the parent, you can then check which specific child element actually triggered the event.
Useful because: It's more efficient for performance, especially with many child elements, and it automatically handles events for elements that are added to the DOM after the page loads.



preventDefault(): Stops the default action of an event. For example, if you click a link (<a>), preventDefault() stops it from navigating to a new page. If you submit a form, preventDefault() stops the form from reloading the page.
stopPropagation(): Stops the event from bubbling up to parent elements. If you click a child element and call stopPropagation(), the event will not trigger any event listeners on its parent, grandparent, etc.