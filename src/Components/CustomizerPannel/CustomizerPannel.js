import React from "react";
// import { Link } from "react-router-dom";
// import AppContext from "../AppContext/AppContext";

import './CustomizerPannel.css'

export default class CustomizerPannel extends React.Component {
//   static contextType = AppContext;


    static defaultProps = {
        setWidth: {},
        setHeight: {},
        setBorder: {},
        width: 1,
        height: 1
    }

  render() {
    return (
        <div className="customizer-pannel">
        <form id="customizer-form">
          <div className="form-section">
            <label htmlFor="width">Number of Blocks Horizontally</label>
            <input type="number" min="1" step="1" id="width" value={this.props.width} onChange={e =>
                  this.props.setWidth(e.target.value)
            }
            />
          </div>
          <div className="form-section">
            <label htmlFor="height">Number of Blocks Vertically</label>
            <input type="number" min="1" step="1" id="height" value={this.props.height} onChange={e =>
                  this.props.setHeight(e.target.value)
            }/>
          </div>
          <div className="form-section">
            <label htmlFor="border-size">Size of border (in inches)</label>
            <input type="number" name="border-size" placeholder="0" onChange={e =>
                this.props.setBorder(e.target.value)
            }/>
          </div>
        </form>
        </div>
    );
  }
}
