import React, { Component } from 'react';
import './App.css';
import { fromJS } from 'immutable';
import axios from 'axios';
import Child from './Child';

class App extends Component {
  state = {
    items: [],
    editingId: undefined
  };
  componentDidMount () {
    axios.get('//localhost:3000/data')
        .then(res => {
          this.setState({
            items: fromJS(res.data)
          });
        });
  }
  editing = (editingId) => {
    this.setState({ editingId });
  };
  onChange = ({ e, id, about }) => {
    const targetIndex = this.state.items.findIndex(item => item.get('_id') === id);
    const items = this.state.items.update(targetIndex, item => item.set('about', about));
    this.setState({ items });
  };
  render() {
    const {
      items,
      editingId
    } = this.state;
    return (
      <div className="App">
        {items.map((item) => (
            <Child
                key={item.get('_id')}
                id={item.get('_id')}
                editingId={editingId}
                about={item.get('about')}
                editing={this.editing}
                onChange={this.onChange}
            />
        ))}
      </div>
    );
  }
}

export default App;
