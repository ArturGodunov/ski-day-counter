import React, { Component } from 'react';
import './App.css';

import storeFactory from './store';
import {
    addDay,
    removeDay,
    setGoal,
    addError,
    clearError,
    changeSuggestions,
    clearSuggestions,
    randomGoals,
    suggestResortNames
} from './actions';

const store = storeFactory();

// store.dispatch(
//     addDay('Mt Shasta', '2016-10-28')
// );
//
// store.dispatch(
//     removeDay('2016-10-28')
// );
//
// store.dispatch(
//     setGoal(55)
// );
//
// store.dispatch(
//     addError("something went wrong")
// );
//
// store.dispatch(
//     clearError(0)
// );
//
// store.dispatch(
//     changeSuggestions(['One', 'Two', 'Three'])
// );
//
// store.dispatch(clearSuggestions());
//
// store.dispatch(
//     randomGoals()
// );
//
// store.dispatch(
//     randomGoals()
// );

store.dispatch(
    suggestResortNames('hea')
);

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
