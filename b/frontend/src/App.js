import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={apiResponse:"Nothing Received"};
  }


  callAPI() {
    fetch("http://localhost:3333/api/figures")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return(
        <p>{this.state.apiResponse}</p>
      
    );
  }

}

export default App;