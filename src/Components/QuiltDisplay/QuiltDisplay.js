import React from "react";
import './QuiltDisplay.css'



export default class QuiltDisplay extends React.Component {

static defaultProps = {
    width: 0,
    height: 0,
    border: 0,
    pattern: {}
  };



  render() {

    const pattern = this.props.pattern
    const classes = pattern.class_name + ' quilt-block'
    const borderWidth = (5 * this.props.border) + 'px'
    const borderHeight = (5 * pattern.blockheight) + 'px'
    const borderRowWidth = (5 * (2 * this.props.border + pattern.blockwidth * this.props.width)) + 'px'
    const borderStyle = {
        width: borderWidth,
        height: borderHeight
    }
    
    const borderRowStyle = {
        height: borderWidth,
        width: borderRowWidth
    }


      let row = []
      row.push(<div className="border-block" style={borderStyle} key={1}></div>)
      for (let i = 0; i < this.props.width; i++) {
          row.push(<div className={classes}  key={i+2}></div>)
      }
      row.push(<div className="border-block" style={borderStyle} key={row.length + 1}></div>)

        let allRows = []
        allRows.push(<div className="border-row" style={borderRowStyle} key={1}></div>)
        for (let i = 0; i < this.props.height; i++) {
        allRows.push(<div className="quilt-row" key={i+2}>{row}</div>)
      }
  allRows.push(<div className="border-row" style={borderRowStyle} key={allRows.length + 1}></div>)
    return (
        <div className="quilt-display">
        <div className="quilt-container" style={{width: borderRowWidth}}>
            {allRows}
            </div>
        </div>
    );
  }
}
