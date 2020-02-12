import React from "react";
// import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";


export default class Pattern extends React.Component {
  static contextType = AppContext;

  static defaultProps = {
    pattern: {}
  };

  render() {
    let pattern = this.props.pattern;

    return (
      <div className="quilt-saver">
        
      </div>
    );
  }
}
