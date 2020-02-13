import React, {Component} from 'react';
import './App.css';
import PageContainer from "./components/PageContainer/PageContainer";
import {BreakpointProvider} from "react-socks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BreakpointProvider>
          <PageContainer/>
        </BreakpointProvider>
      </div>
    );
  }
}

export default App;
