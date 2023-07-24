import './App.css';
import { React } from 'react';
import { useState } from 'react';

// function App() {
function App() {
  const [number, setNumber] = useState(0)
  const data = [
    { id: 1, name: 'Use Array.map' },
    { id: 2, name: 'Not a for loop' },
    { id: 3, name: 'Give each item a unique key' },
    { id: 4, name: 'Avoid using array index as the key' },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  function increment() {
    return setNumber(number + 1)
  }
  function decrement() {
    return setNumber(number - 1)
  }
  function reset() {
    return setNumber(0)
  }

  return (
    <div className="App">
      <h1><a href='' >Reactjs intro</a></h1>
      <hr></hr>
      <div className='rj'>
        <h2>1- What is React js?</h2>
        <p>React is a JavaScript library created by Facebook</p>
        <p>React is a User Interface (UI) library</p>
        <p>React is a tool for building UI components</p>
        <hr></hr>
        <h2>2- What is NPM in React js?</h2>
        <p>NPM, the Node package manager is used for managing and sharing the packages for either React or Angular.</p>
        <p>NPM will be installed along with Nodejs. Node.</p>
        <p>js can be downloaded and installed from the official NodeJs website.</p>
        <hr></hr>
        <h2>3- What is Role of Node Js in react Js?</h2>
        <p>Node. js enables the creation of scalable and quick back-end RESTful APIs.</p>
        <p>It is used as backend service where javascript works on the server-side of the application.</p>
        <p>React is a front-end library that creates interactive user interfaces.</p>
        <p>If we combine React and Node.js, it will be highly advantageous for developers creating full-stack web applications.</p>
        <p>Node.js is created on JavaScript engine V8 in Google Chrome.</p>
        <p> It's an open-source programming language that can run on multiple platforms and reduce development process and time, respectively.</p>
        <hr></hr>
        <h2>4- What is CLI command in React Js?</h2>
        <p>Command-line interfaces (CLIs) built-in Node. js authorize automating repetitive tasks while leveraging the Node. js ecosystem.</p>
        <p>A command-line interface (CLI) is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer.</p>
        <p>Command-line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces.</p>
        <p>React have its own CLI but currently they are only supporting creating an app (create-react-app).</p>
        <hr></hr>
        <h2>5- What is Components in React Js?</h2>
        <p>A Component is one of the core building blocks of React.</p>
        <p>In other words, we can say that every application you will develop in React will be made up of pieces called components.</p>
        <p>Components make the task of building UIs much easier.</p>
        <p>They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
        <p>Components come in two types, 1.Class components and 2.Function components.</p>
      </div>
      <hr></hr>
      <h2>6- What is Header and Content Components in React Js?</h2>
      <p>Headers are compositions that extend standard navbar functionalities</p>
      <p>They contain additional components like a jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.</p>
      <p>Components are independent and reusable bits of code.</p>
      <p> They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
      <p> Components come in two types, Class components and Function components.</p>
      <hr></hr>
      <h2>7-  How to install React Js on Windows, Linux Operating System? How to Install
        NPM and How to check version of NPM?</h2>
      <p>step 1- install Node.js<br></br>
        step 2- go to directory where u want to create react app<br></br>
        step 3- open terminal and run this command "npx create-react-app (project name)"<br></br>
        step 4- "cd (project name)"<br></br>
        step 5- to start your app run this command "npm start"
        install React JS in Linux OS</p>
      <p> install react through your terminal using following command<br></br>
        step-1 - "sudo apt install nodejs" for install node js<br />
        step-2 - "sudo apt install npm" its package manager for nodejs<br />
        step-3 - "npx create-react-app (project name)" create react project<br />
        step-4 - "cd (project name)"<br />
        step-5 - "npm start" to run the project</p>
      <p>install NPM and check its version
        for widows - install "npm install -g create-react-app"; version check "create-react-app --version"<br></br>
        for linux os - install "sudo apt install npm"; version check "npm -v"
      </p>
      <hr></hr>
      <h2>8- How to check version of React Js?</h2>
      <p>To check which React version is your project using,<br></br>
        package.json file<br></br>
        You need to open the 'package.json'. Take a look under the dependencies section. It should list all of the dependencies of your project and one of those should be React.
      </p>
      <p>command line<br></br>
        "npm view react version"<br></br>
        the version property of default import from react<br></br>
        pass this command line in your react app "React.version"
      </p>
      <hr></hr>
      <h2>9- How to change in components of React Js?</h2>
      <p>A component is updated whenever there is change in component's state or props.</p>
      <p>React has five built-in methods that gets called, in this order, when a component is updated:
        getDerivedStateFromProps()<br></br>
        shouldComponentUpdate()<br></br>
        render()<br></br>
        getSnapshotBeforeUpdate()<br></br>
        componentDidUpdate()<br></br>
        The render() method is required and will always be called, the others are optional and will be called if you define them.
      </p>
      <hr></hr>
      <h2>10- How to Create a List View in React Js?</h2>
      <p>
        <div className='box'>
          {data.map((item) => (
            //  Use the 'id' field as the unique key for each list item
            <div key={item.id}>
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </p>
      <hr></hr>
      <h2>11- Create Increment decrement state change by button click?</h2>
      <p><div className='box counter'>
        {number}
        <br />
        <button onClick={increment} id='add'>Increment</button>
        <button onClick={decrement} id='sub'>Decrement</button>
        <br />
        <button onClick={reset} id='zero'>Reset</button>
      </div>
      </p>
      <hr></hr>
    </div>
  );
}

export default App;
