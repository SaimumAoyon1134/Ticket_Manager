

## What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allowst o write HTML-like code inside React components. It looks like HTML but has the full power of JavaScript.

**Why is JSX used?**
- **Readable and Declarative:** Makes UI code easier to understand.
- **Efficient:** React transforms JSX into `React.createElement()` calls under the hood.
- **Dynamic:** You can embed JavaScript expressions inside JSX using `{}`.


```jsx
const name = "Saimum";
const greeting = <h1>Hello, {name}!</h1>;
```
## What is the difference between State and Props?


**Props**
- Props (short for "properties") are **read-only data** passed from a parent component to a child component.
- Props are **immutable** inside the child component.
- Used to **share data between components**.


```jsx
function Child({ name }) {
  return <p>Hello, {name}!</p>;
}

function Parent() {
  return <Child name="Saimum" />;
}
```
**State**
	•	State is local data managed within a component.
	•	State is mutable using setState (class component) or useState (functional component).
	•	Used to track dynamic data that changes over time.


```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

# What is the useState hook, and how does it work?

**What is useState?**
`useState` is a React Hook that allows **functional components** to have state.  
It lets **store and update data** that affects the component's rendering.


```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```
## How can you share state between components in React?


## Overview
In React, state is local to a component. To **share state between components**, I can lift the state up to a **common parent** or use **state management solutions**.


- Moving the state to the **closest common parent** of the components that need it.
- Passing the state and updater function as **props** to child components.


```jsx
import { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("Hello!");

  return (
    <div>
      <Child1 message={message} />
      <Child2 setMessage={setMessage} />
    </div>
  );
}

function Child1({ message }) {
  return <p>Message: {message}</p>;
}

function Child2({ setMessage }) {
  return <button onClick={() => setMessage("Hi there!")}>Update Message</button>;
}
```
## Event Handling in React


Event handling in React is similar to handling events in plain HTML/JavaScript, but with **syntactic differences** and some **React-specific rules**.


**CamelCase Syntax**: Event names use camelCase instead of lowercase.
   ```jsx
   onClick, onChange, onSubmit
   ```
**Handling a Click Event**

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```
**Event handlers using arrow functions**
```jsx
<button onClick={() => handleClick(5)}>Click Me</button>
```
