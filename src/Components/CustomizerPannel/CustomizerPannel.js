import React from "react";
import ValidationError from '../ValidationError/ValidationError';
import './CustomizerPannel.css'

export default class CustomizerPannel extends React.Component {
    static defaultProps = {
        setWidth: {},
        setHeight: {},
        setBorder: {},
        width: 1,
        height: 1
    }

    constructor(props) {
    super(props);

    this.state = {
      width: {value: this.props.width, touched: false},
      height: {value: this.props.height, touched: false},
      border: {value: 0, touched: false}
    };
  }


    updateWidth(width) {
        
        this.setState({ width: { value: width, touched: true } });
        this.props.setWidth(width)
    }

    updateHeight(height) {

        this.setState({ height: { value: height, touched: true } });
        this.props.setHeight(height)
    }

    updateBorder(border) {
        this.setState({ border: { value: border, touched: true } });
        this.props.setBorder(border)
    }

    validateBorder() {
        const border = this.state.border.value;
        if (border < 0) {
          return "Border must be greater than 0";
        } 
        
      }

      validateWidth() {
        const width = this.state.width.value
        const numWidth = Number(width)
        
        if (width < 1 || !Number.isInteger(numWidth)) {
          return "Must be an integer or 1 or more"
        }
      }

      validateHeight() {
        const height = this.state.height.value
        const numHeight = Number(height)
        
        if (height < 1 || !Number.isInteger(numHeight)) {
          return "Must be an integer or 1 or more"
        }
      }

  render() {

    const borderError = this.validateBorder();
    const widthError = this.validateWidth()
    const heightError = this.validateHeight()

    return (
        <div className="customizer-pannel">
        <form id="customizer-form">
          <div className="form-section">
            <label htmlFor="width">Number of Pattern Repititions Horizontally</label>
            <input type="number" min="1" step="1" id="width" value={this.props.width} onChange={e =>
                  this.updateWidth(e.target.value)
            }
            />
            {this.state.width.touched && <ValidationError message={widthError}/>}
          </div>
          <div className="form-section">
            <label htmlFor="height">Number of Pattern Repititions Vertically</label>
            <input type="number" min="1" step="1" id="height" value={this.props.height} onChange={e =>
                  this.updateHeight(e.target.value)
            }/>
            {this.state.height.touched && <ValidationError message={heightError}/>}
          </div>
          <div className="form-section">
            <label htmlFor="border-size">Size of border (in inches)</label>
            <input type="number" min="0" name="border-size" placeholder="0" onChange={e =>
                this.updateBorder(e.target.value)
            }/>
            {this.state.border.touched && <ValidationError message={borderError}/>}
          </div>
        </form>
        </div>
    );
  }
}
