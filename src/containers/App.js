import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import WorkPage from './WorkPage';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={<HomePage removeState={this.removeState} />}
        />
        <Route
          path="/work"
          element={<WorkPage removeState={this.removeState} />}
        />
      </Routes>
    );
  }

  removeState() {
    window.history.replaceState({}, document.title);
  }
}

export default App;
