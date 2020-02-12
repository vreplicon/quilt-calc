import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import config from "./config";
import AppContext from "./Components/AppContext/AppContext";
import LandingPage from "./Components/LandingPage/LandingPage";
import PatternSelect from "./Components/PatternSelect/PatternSelect";
import PatternCustomizer from "./Components/PatternCustomizer/PatternCustomizer";
import "./App.css";
import "./Variables.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patterns: [],
      selectedPattern: {}
    };
  }

contactApi(action, url, callback = null, body = null) {
    const options = {
      method: action,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {

        if (res.status === 404) {
          this.setState({retrivedPattern: null})
        }
        else if (!res.ok) {

          return res.json().then(error => {

            throw error;
          });
        } else if (res.status !== 204) {
          return res.json();
        }
      })
      .then(data => {

        if (callback) {
          callback(data);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  getPatterns(url, callback) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        } else {
          return res.json();
        }
      })
      .then(data => {
        callback(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getPatterns(`${config.API_ENDPOINT}/api/quilts`, this.setPatterns);
  }

  setPatterns = patterns => {
    this.setState({ patterns });
  };

  setSelectedPattern = pattern => {
    this.setState({ selectedPattern: pattern });
  };

  setRetrivedPattern = pattern => {
    this.setState({selectedPattern: pattern})
    this.props.history.push("/pattern-customization");
    
  };

  getQuiltFromCode = code => {
      this.contactApi(
      "GET",
      `${config.API_ENDPOINT}/api/quilts/${code}`,
      this.setRetrivedPattern
    );

  }

  render() {
    const contextValue = {
      patterns: this.state.patterns,
      selectedPattern: this.state.patterns,
      changeSelected: this.setSelectedPattern,
      retrivedPattern: this.state.retrivedPattern,
      getQuiltFromCode: this.getQuiltFromCode
    };
    return (
      <AppContext.Provider value={contextValue}>
        <main className="App">
          <Switch>
            <Route
              path="/pattern-customization"
              render={() => (
                <PatternCustomizer pattern={this.state.selectedPattern} />
              )}
            />
            <Route path="/pattern-select" component={PatternSelect} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </main>
      </AppContext.Provider>
    );
  }
}
export default withRouter(App);
