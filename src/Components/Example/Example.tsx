import React, { Component } from "react";

import { connect } from "react-redux";

interface ExampleProps {
  view: __esri.MapView;
  setTitle: (title: string) => void;
}

class Example extends Component<ExampleProps, null> {
  componentDidUpdate() {
    console.log("VIEW FROM REDUX STORE: ", this.props.view);
  }

  render() {
    return <></>;
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Example);
