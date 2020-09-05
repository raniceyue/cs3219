import React, { Component } from "react";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { figures: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3333/api/figures')
    .then(res => res.json())
    .then((data) => {
      this.setState({ figures: data })
      console.log(this.state.figures)
    })
    .catch(console.log)
  }
  
  render() {
    return(
      <div className="container">
        <div className="col-xs-12">
        <h1>CS3219 Assignment B</h1>
        {this.state.figures.map((figure) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{figure.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { !figure.toSell &&
                <span>
                In Posession
                </span>
              }
              { figure.toSell &&
                <span>
                  Listed for Sale
                </span>
              }              
              </h6>
            </div>
          </div>
        ))}
        </div>
     </div>
    );
  }

}

export default App;