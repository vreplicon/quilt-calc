import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";
import Pattern from "../Pattern/Pattern"
import './PatternSelect.css'

export default class PatternSelect extends React.Component {
  static contextType = AppContext;

  render() {
      let patternList = this.context.patterns.map((p, i) => {
        return (
          <li className="pattern-option" key={i}>
            <Pattern pattern={p}/>
          </li>
        );
    });
    return (
      <div className="patterns">
        <header role="banner" className="banner">
          <Link to="/">
            <button>Go Back to Landing Page</button>
          </Link>
          <h1>Patterns</h1>
        </header>
      
      <section className="patterns-section">
        <section className="patternHeader">
            <h2>Select one to continue</h2>
        </section>
        <ul className="pattern-list">
        {patternList}
        </ul>
      </section>

      </div>
    );
  }
}
