<!-- Here is all Ques: and Ans : -->

- What is JSX, and why is it used?

  Ans: JSX stands for JavaScript XML,
  It is a syntax extension for JavaScript that lets write HTML-like code inside JavaScript files. JSX is primarily used with React to describe what the UI User Interface should look like.
  Reason Explanation

1. Easier to Read & Write :
   JSX looks like HTML, which is familiar to web developers. It’s more intuitive than manually writing React.createElement().
2. Combines Logic + Layout
   JSX lets you mix HTML-like syntax with JavaScript logic in the same file. This keeps components self-contained and easier to manage.

- What is the difference between State and Props?

  Ans: In React, both State and Props are used to manage and pass data in components — but they serve different purposes.
  1.Definition
  State: Internal data storage of a component
  Props: Data passed from parent to child
  2.Usage Example
  State:Tracking form input, toggling UI
  Props: Sending data to a child component
  3.Lifespan
  State: Lives as long as the component lives
  Props: Lives as long as the parent owns it

- What is the useState hook, and how does it work?

Ans: useState is a React Hook that allows functional components to have and manage their own state.

Before Hooks, only class components could use state.
Now, with useState, functional components can do it too — in a much simpler way.
import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0); // count starts at 0

return (

<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}

Multiple useState Hooks : Use useState multiple times in the same component for different state variables:
const [name, setName] = useState('');
const [age, setAge] = useState(0);

- How can you share state between components in React?

Ans: Sharing state between components in React is a common challenge, especially as app grows. Here’s a breakdown of the main ways can share state between components:

1. Lift State Up : Move the shared state to the closest common parent of the components that need access
   function Parent() {
   const [count, setCount] = useState(0);

return (
<>
<ChildA count={count} />
<ChildB setCount={setCount} />
</>
);
}

function ChildA({ count }) {
return <p>Count: {count}</p>;
}

function ChildB({ setCount }) {
return <button onClick={() => setCount(prev => prev + 1)}>Increment</button>;
}

2. Use Context API :React's Context API allows to share state across many components without passing props manually at every level.
   // Create Context
   const CountContext = createContext();

// Provider Component
function Parent() {
const [count, setCount] = useState(0);

return (
<CountContext.Provider value={{ count, setCount }}>
<ChildA />
<ChildB />
</CountContext.Provider>
);
}

// Consumers
function ChildA() {
const { count } = useContext(CountContext);
return <p>Count: {count}</p>;
}

function ChildB() {
const { setCount } = useContext(CountContext);
return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

- How is event handling done in React?

| Ans:       | Native HTML Event | React Event Handler |
| ---------- | ----------------- | ------------------- |
| `onclick`  | `onClick`         |
| `onchange` | `onChange`        |
| `onsubmit` | `onSubmit`        |

Button Click:

function MyButton() {
function handleClick() {
alert('Button clicked!');
}

return (
<button onClick={handleClick}>
Click me
</button>
);
}

Even Object:

function MyInput() {
function handleChange(event) {
console.log('Input value:', event.target.value);
}

return <input type="text" onChange={handleChange} />;
}
