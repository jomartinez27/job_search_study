Explain event delegation.
    - Event delegation allows avoiding adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

Explain how 'this' works in JavaScript.
    - 'this' keyword behaves differently in JavaScript compared to other languages. In OO languages, the 'this' keyword referes to the current instance of the class. In JavaScript the value of 'this' is determined mostly by the invocation context of function (contenxt.function()) and where it is called.

    global: referes to window

    object: refers to the immediate enclosing object

    invoking context-less function: using 'this' inside function that is invoked wihtout any context it is bound to the global object (window)

    used inside constructor: 'this' refers to the object being constructed

    used inside function defined on prototype chain: if the method is on an object's prototype chain, 'this' inside method refers to the object the method was called on.

    inside call(), apply(), bind(): All these methods are defined on Function.prototype, they allow to specify the value of 'this' which will be used while the function is being invoked.

Explain how prototypal inheritance works:
    Prototypal inheritance: an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties

What do you think of AMD vs CommonJs? 
    AMD is better for browser, hence the name 'Asynchronous' as it loads each distinct module in async instead of loading in one large file. No extra steps are required to use AMD

    CommonJs: is a standard mostly used in servers and it loads modules synchronously though extra step is required if you want your JS file size to be minified and compressed