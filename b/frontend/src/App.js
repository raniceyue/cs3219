import React, { Component } from "react";
import AppHeader from "./components/AppHeader.js";
import Figure from "./components/Figure.js";
import AddFigure from "./components/AddFigure.js"

class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = { figures: [] };
  }

  componentDidMount() {
    fetch('/api/figures')
    .then(res => res.json())
    .then((data) => {
      this.setState({ figures: data })
      console.log(this.state.figures)
    })
    .catch(console.log)
  }
  
  /**
   * Render all figures on the homepage
   */

  render() {
    return(
      <div className="container">
        <div class="row">
          <div className="col-md-8">
          <AppHeader />
          {this.state.figures.map((figure) => (
            <Figure name={figure.name} toSell={figure.toSell} />
          ))}
          </div>

          <div className="col-md-4">
            <AddFigure/>
          </div>
        </div>
     </div>
    );
  }
}

export default App;