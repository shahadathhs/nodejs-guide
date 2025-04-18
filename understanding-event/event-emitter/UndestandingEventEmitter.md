### Understanding EventEmitter in Node.js: A Step-by-Step Guide with Examples

The `EventEmitter` in Node.js is a powerful tool for creating event-driven applications. At its core, it works as an object that maintains a list of callback functions (listeners) for different event names. Let's break it down step by step with examples to see how it works under the hood.

---

### Step 1: The Empty EventEmitter Object

When you initialize an `EventEmitter`, it starts as an empty object with no listeners.

```javascript
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

console.log(myEmitter); // Initially, no listeners are attached
```

**Output:**
```
EventEmitter { _events: undefined, _eventsCount: 0, _maxListeners: undefined }
```

At this point:
- `_events` is undefined because no events are registered yet.
- `_eventsCount` is `0`, indicating there are no listeners.

---

### Step 2: Adding Listeners with `.on()`

The `.on()` method allows you to register a callback function for a specific event name. These callbacks are stored as arrays within the `_events` object, with the event name as the key.

#### Example: Adding Listeners for the `"foo"` Event

```javascript
myEmitter.on("foo", () => {
  console.log("Foo listener 1 called");
});

myEmitter.on("foo", () => {
  console.log("Foo listener 2 called");
});

console.log(myEmitter); // Check the structure after adding listeners
```

**Output of `myEmitter`:**
```
EventEmitter {
  _events: { foo: [ [Function], [Function] ] },
  _eventsCount: 1,
  _maxListeners: undefined
}
```

At this point:
- `_events` now contains an array under the `"foo"` key, storing the two listener functions.
- `_eventsCount` is `1` because one event name (`foo`) has listeners.

---

### Step 3: Emitting Events with `.emit()`

The `.emit()` method triggers all the listeners registered for a specific event name. It loops through the array of listeners under the corresponding event name and invokes each function.

#### Example: Emitting the `"foo"` Event

```javascript
myEmitter.emit("foo");
```

**Output:**
```
Foo listener 1 called
Foo listener 2 called
```

Here’s what happens:
1. The `emit` method looks for the `"foo"` array in `_events`.
2. It loops through the array and calls each listener function.

---

### Step 4: Using `.once()` for One-Time Listeners

The `.once()` method registers a listener that will only be called the first time the event is emitted. After that, the listener is removed.

#### Example: Adding a `"bar"` Event with `.once()`

```javascript
myEmitter.once("bar", () => {
  console.log("Bar listener called");
});

console.log(myEmitter); // Check the structure after adding the once listener
myEmitter.emit("bar"); // Emit the event for the first time
myEmitter.emit("bar"); // Emit the event again
```

**Output:**
```
Bar listener called
```

**Explanation:**
1. When the `"bar"` event is emitted the first time, the listener is called.
2. The `once` wrapper automatically removes the listener from the `_events` object after execution.

**Structure After `.once()` Registration:**
```
EventEmitter {
  _events: { foo: [ [Function], [Function] ], bar: [ [Function: onceWrapper] ] },
  _eventsCount: 2,
  _maxListeners: undefined
}
```

After the first emission of `"bar"`, the `"bar"` key is removed from `_events`.

---

### Step 5: Managing Multiple Event Names

The `EventEmitter` can handle multiple event names, each with its own array of listeners.

#### Example: Adding and Emitting `"foo"` and `"bar"`

```javascript
myEmitter.on("foo", () => {
  console.log("Another Foo listener");
});

myEmitter.on("bar", () => {
  console.log("Another Bar listener");
});

// Emitting events
myEmitter.emit("foo");
myEmitter.emit("bar");
```

**Output:**
```
Foo listener 1 called
Foo listener 2 called
Another Foo listener
Another Bar listener
```

**Structure After Adding Both Events:**
```
EventEmitter {
  _events: {
    foo: [ [Function], [Function], [Function] ],
    bar: [ [Function] ]
  },
  _eventsCount: 2,
  _maxListeners: undefined
}
```

- The `"foo"` event has three listeners.
- The `"bar"` event has one listener.

---

### Summary

Here’s the lifecycle of an `EventEmitter` object:

1. **Initialization:** Starts as an empty object.
2. **Adding Listeners with `.on()` or `.once()`:** Adds arrays of listener functions under keys corresponding to event names.
3. **Triggering Events with `.emit()`:** Loops through the listeners for a given event name and executes them.
4. **Using `.once()` for One-Time Listeners:** Adds a temporary listener that removes itself after the first execution.

---

### Final Example: Combining It All

```javascript
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Adding listeners for "foo"
myEmitter.on("foo", () => console.log("Foo listener 1"));
myEmitter.on("foo", () => console.log("Foo listener 2"));

// Adding listeners for "bar"
myEmitter.once("bar", () => console.log("Bar listener 1 (once)"));
myEmitter.on("bar", () => console.log("Bar listener 2"));

// Emitting events
console.log("Emitting 'foo':");
myEmitter.emit("foo");

console.log("\nEmitting 'bar':");
myEmitter.emit("bar");
myEmitter.emit("bar");
```

**Output:**
```
Emitting 'foo':
Foo listener 1
Foo listener 2

Emitting 'bar':
Bar listener 1 (once)
Bar listener 2
Bar listener 2
```

This shows how multiple event names and listener types work together in a real-world scenario.