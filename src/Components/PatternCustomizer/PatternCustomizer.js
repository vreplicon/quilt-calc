import React from "react";
import { Link } from "react-router-dom";
import PatternResults from "../PatternResults/PatternResults";
import CustomizerPannel from "../CustomizerPannel/CustomizerPannel";
import QuiltDisplay from "../QuiltDisplay/QuiltDisplay";
import "./PatternCustomizer.css";

export default class PatternCustomizer extends React.Component {
  static defaultProps = {
    pattern: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      width: this.props.pattern.width,
      height: this.props.pattern.height,
      border: this.props.pattern.border,
      displayWidth: this.props.pattern.width,
      displayHeight: this.props.pattern.height
    };
  }

  setWidth = width => {
    const numWidth = Number(width);
    if (numWidth > 0 && Number.isInteger(numWidth)) {
      this.setState({ displayWidth: width });
    }

    this.setState({ width });
  };

  setHeight = height => {
    const numHeight = Number(height);
    if (numHeight > 0 && Number.isInteger(numHeight)) {
      this.setState({ displayHeight: height });
    }
    this.setState({ height });
  };

  setBorder = border => {
    if (border >= 0) {
      this.setState({ border });
    }
  };

  render() {
    let width = this.state.width;
    let height = this.state.height;
    let border = this.state.border;
    let pattern = this.props.pattern;
    let displayWidth = this.state.displayWidth;
    let displayHeight = this.state.displayHeight;
    return (
      <div className="pattern-customizer">
        <header role="banner" className="banner">
          <Link to="/pattern-select">
            <button>Go Back</button>
          </Link>
          <h1>Customize Your Pattern</h1>
        </header>
        <section className="input-results">
          <CustomizerPannel
            width={width}
            height={height}
            border={border}
            setWidth={this.setWidth}
            setHeight={this.setHeight}
            setBorder={this.setBorder}
          />
          <PatternResults
            pattern={pattern}
            border={border}
            width={displayWidth}
            height={displayHeight}
          />
        </section>
        <h1>Quilt Preview</h1>
        <QuiltDisplay
          width={displayWidth}
          height={displayHeight}
          border={border}
          pattern={pattern}
        />
      </div>
    );
  }
}
