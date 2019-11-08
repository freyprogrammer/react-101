import React from 'react';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'

function App() {
  return (
    <div className="App">
      
      {/* <Message/> */}
      {/* <Greet name="Dante" weapon="Rebellion">
      <button>SSS</button>
      </Greet> */}
      {/* <Greet name="Vergil" weapon="Yamato"/>
      <Greet name="Nero" weapon="Red Queen"/> */}

      {/* <Welcome name="Dante" weapon="Rebellion"/>
      <Welcome name="Vergil" weapon="Yamato"/>
      <Welcome name="Nero" weapon="Red Queen"/> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet /> */}
      {/* <Form /> */}
      <LifecycleA />
    </div>
  );
}

export default App;
