import React, { Component } from 'react';
import './App.css';
import { fromJS } from 'immutable';
import axios from 'axios';

class App extends Component {
  state = {
    items: []
  }
  componentDidMount () {
    axios.get('//localhost:3000/data')
        .then(res => {
          this.setState({
            items: fromJS(res.data)
          });
        });
  }
  check = () => {
    console.log(this.state.items)
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.check}>Check</button>
      </div>
    );
  }
}

export default App;
