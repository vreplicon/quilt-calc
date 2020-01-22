import React from 'react';
import { Route, Switch } from "react-router-dom";
import {patterns} from './data'
import AppContext from "./Components/AppContext/AppContext";
import LandingPage from './Components/LandingPage/LandingPage'
import PatternSelect from './Components/PatternSelect/PatternSelect'
import PatternCustomizer from './Components/PatternCustomizer/PatternCustomizer'
import './App.css'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patterns : [],
      selectedPattern : {}
    };
  }

componentDidMount() {
  this.setPatterns(patterns)
}


setPatterns = patterns => {
    this.setState({ patterns });
};

setSelectedPattern = pattern => {
  this.setState({selectedPattern : pattern})
}

render() {

  const contextValue = {
    patterns: this.state.patterns,
    selectedPattern: this.state.patterns,
    changeSelected: this.setSelectedPattern
  }
  return (
    <AppContext.Provider value={contextValue}>
    <main className="App">
          <Switch>
            <Route path="/pattern-customization" 
            render={() => <PatternCustomizer pattern={this.state.selectedPattern}/>} />
            <Route path="/pattern-select" component={PatternSelect} />
            <Route path="/" component={LandingPage} />


          </Switch>
        </main>
    </AppContext.Provider>
  );
}

}
export default App;