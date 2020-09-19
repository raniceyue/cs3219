import React, { Component } from "react";
import AppHeader from "./components/AppHeader.js";
import Figure from "./components/Figure.js";
import AddFigure from "./components/AddFigure.js";
import { Grid } from '@material-ui/core';
import axios from "axios";

class App extends Component {

	constructor(props) {
		super();
		this.state = { figures: [] };

		this.deleteFigure = this.deleteFigure.bind(this);
	}

	/**
	 * Update list after deletion
	 * @param {*} _id
	 */
	deleteFigure(_id) {
		this.setState(prevState => {
			const newFigures = prevState.figures.filter((figure)=>figure._id !== _id);
			return {
				figures: newFigures
			}
		})
	}

	getFigures = () => {
		axios
		.get('api/figures')
		.then(response => {
			console.log(response);
			this.setState({figures: response.data})
		})
		.catch(error => {console.log(error)});
	}

	addFigure = () => {
		this.getFigures();
	};

	componentDidMount() {
		this.getFigures();
	}	
	  
  
	/**
	 * Render all figures on the homepage
	 */

	render() {
		return(
		<div className="container">
			<AppHeader />
			<div className="row">
				<div className="col-md-3">
					<AddFigure addFigure={this.addFigure}/>
				</div>

				<div className="col-md-9">
					<Grid 
					container 
					spacing={1}
					direction="row"
					justify="flex-start"
					alignItems="flex-start" >

					{this.state.figures.map((figure) => (
						<Figure 
							key={figure._id}
							_id={figure._id} 
							name={figure.name} 
							price={figure.price} 
							brand={figure.brand} 
							toSell={figure.toSell} 
							deleteFigure={this.deleteFigure}
						/>
					))}

					</Grid>
				</div>
			</div>
		</div>
		);
  }
}

export default App;