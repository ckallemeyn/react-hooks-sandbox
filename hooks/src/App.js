import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Chase',
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div className='main'>
        <h1>Welcome to React Hooks!!! </h1>
        <Counter name={name} initValue={0}/>
      </div>
    );
  }
}

export default App;
