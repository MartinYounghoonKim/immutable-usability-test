import React, { Component } from 'react';
import './App.css';
import { fromJS } from 'immutable';
import axios from 'axios';
import Child from './Child';

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
  update = ({ id, about }) => {
    const targetIndex = this.state.items.findIndex(item => item.get('_id') === id);
    const items = this.state.items.update(targetIndex, item => item.set('about', 'test'));
    this.setState({ items });
  }
  render() {
    const {
      items
    } = this.state;
    return (
      <div className="App">
        {items.map((item) => (
            <Child
                key={item.get('_id')}
                id={item.get('_id')}
                about={item.get('about')}
                onClick={this.update}
            />
        ))}
      </div>
    );
  }
}

export default App;
