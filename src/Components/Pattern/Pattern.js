import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";
import quiltImage from "./stripesQuilt.PNG";
import "./Pattern.css";

export default class Pattern extends React.Component {
  static contextType = AppContext;

  static defaultProps = {
    pattern: {}
  };

  render() {
    let pattern = this.props.pattern;

    return (
      <div className="pattern-item">
        <h3>{pattern.quilt_name}</h3>
        <img src={quiltImage} alt="Stripes Quilt" />
        <Link
          to="/pattern-customization"
          onClick={() => this.context.changeSelected(pattern)}
        >
          <button>Select</button>
        </Link>
      </div>
    );
  }
}
