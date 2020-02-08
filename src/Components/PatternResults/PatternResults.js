import React from "react";
// import { Link } from "react-router-dom";
// import AppContext from "../AppContext/AppContext";

import './PatternResults.css'

export default class PatternResults extends React.Component {
//   static contextType = AppContext;

 static defaultProps = {
     pattern : {},
     width : 0,
     height : 0,
     border : 0
 }
areaCalc = () => {
  const totBlocks = this.props.width * this.props.height;
  const fabrics = this.props.pattern.fabric
  const neededFabric = fabrics.map(x => {

    return {[x.fabric_name] : x.amount * totBlocks}
  });
  return neededFabric
}

  render() {

      let fabrics = this.areaCalc().map((f, i) => {
        let name = Object.keys(f)
        let area = f[name]
        let neededYards = area / (48 * 36)
        let result = neededYards.toFixed(2) + ' yards'

        return (
           <div className="fabric-item" key={i}>
            <dt>{name}</dt>
      <dd>{result}</dd>
      </div>
        )
  })


    const quiltWidth = this.props.width * this.props.pattern.blockwidth
    const quiltHeight = this.props.height * this.props.pattern.blockheight
    const widthWithBorder = quiltWidth + (2 * this.props.border) + ' in'
    const heightWithBorder = quiltHeight + (2 * this.props.border) + ' in'
    const borderArea = (2 * quiltWidth + 2 * quiltHeight) * this.props.border 
    const borderInYards = (borderArea/ (48 * 36)).toFixed(2) + ' yards'
    return (
        <div className="results">   
          
                    <h2>Finished Quilt Top Dimensions:</h2>
          <dl className="quilt-dimensions">
          <div className="fabric-item">
          <dt>Width</dt>
            <dd>{widthWithBorder}</dd>
            </div>
            <div className="fabric-item">
          <dt>Height</dt>
          <dd>{heightWithBorder}</dd>
          </div>
          </dl>
          

           <h2>Fabric Needed:</h2>         
          <dl className="quilt-yardage">

            {fabrics}
            <div className="fabric-item">
            <dt>Border Fabric</dt>
            <dd>{borderInYards}</dd>
      </div>
          </dl>
        </div>
    );
  }
}