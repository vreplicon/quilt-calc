import React from "react";
import './PatternDetails.css'

export default class PatternDetails extends React.Component {

static defaultProps = {
    size: {},
    fabric: {}
  };

  render() {
    return (
      <div className="pattern-details">
        <dl className="details-list">
              <div className="detail-item">
                <dt>Size:</dt>
  <dd>{this.props.size.width}x{this.props.size.height}</dd>
              </div>
    
              <div className="detail-item">
                <dt>Fabric:</dt>
                <dd>10 yards of main color and 5 yards of accent color</dd>
              </div>
            </dl>
      </div>
    );
  }
}
