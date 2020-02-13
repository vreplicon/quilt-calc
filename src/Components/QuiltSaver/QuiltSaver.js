import React from "react";
import uuid from "uuid";
import AppContext from "../AppContext/AppContext";


export default class QuiltSaver extends React.Component {
  static contextType = AppContext;

  static defaultProps = {
    pattern: {}
  };

constructor(props) {
    super(props);

    this.state = {
      lookupId : null
    };
  }



    saveQuilt() {
        if (this.props.pattern.id) delete this.props.pattern.id
        const newId = uuid.v4()
        this.setState({lookupId : newId})
        this.context.saveQuilt({...this.props.pattern, lookup_id : newId, standard_pattern: false})
    }


  render() {
    let lookupId = this.state.lookupId;

    return (
      <div className="quilt-saver">
        <h3>Want to save your pattern for later?</h3>
        <button onClick={() => this.saveQuilt()}>Save</button>
        {lookupId ? <p>Use code {lookupId} on landing page to access this pattern</p> : null}
      </div>
    );
  }
}
