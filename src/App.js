import React, { Component } from 'react';
import './App.css';

import C from './constants';
import appReducer from './store/reducers';
import { createStore } from 'redux';

const store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
    type: C.ADD_DAY,
    payload: {
      'resort': 'qwe',
      'date': '2016-10-11',
      'powder': false,
      'backcountry': true
    }
});



class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
