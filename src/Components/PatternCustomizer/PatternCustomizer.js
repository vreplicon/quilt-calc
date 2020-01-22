import React from "react";
// import { Link } from "react-router-dom";
// import AppContext from "../AppContext/AppContext";
import PatternResults from '../PatternResults/PatternResults'
import CustomizerPannel from '../CustomizerPannel/CustomizerPannel'
import QuiltDisplay from '../QuiltDisplay/QuiltDisplay'
import './PatternCustomizer.css'

export default class PatternCustomizer extends React.Component {
//   static contextType = AppContext;
static defaultProps = {
    pattern: {}
  };


  constructor(props) {
    super(props);

    this.state = {
      width : this.props.pattern.width,
      height : this.props.pattern.height,
      border : 0
    };
  }


setWidth = width => {
    this.setState({ width });
  };

setHeight = height => {
    this.setState({ height });
  };

setBorder = border => {
    this.setState({ border });
  };



  render() {

    let width = this.state.width
    let height = this.state.height
    let border = this.state.border
    let pattern = this.props.pattern
    return (
        <div className="pattern-customizer">
        <h1>Pattern Customization</h1>
        {/* <h3>{this.props.pattern.name}</h3> */}
        <div className="container">
        <CustomizerPannel width={width} height={height} setWidth={this.setWidth} setHeight={this.setHeight} setBorder={this.setBorder}/>
        <PatternResults pattern={pattern} border={border} width={width} height={height}/>
        </div>
        <QuiltDisplay width={width} height={height} border={border} pattern={pattern}/>
        
        </div>
    );
  }
}
