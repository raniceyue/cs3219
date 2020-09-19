import React from 'react';
import {
  Grid, 
  Card, Typography, 
  CardActionArea, CardActions, CardContent,
  Button
} from '@material-ui/core';
import axios from 'axios';

/**
 * Component for displaying Figures on homepage
 */

var cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
	height: '20vw',
	bottom: 0
}

class Figure extends React.Component {

	handleDelete = id => {
		console.log("ID of Figure that has been deleted: " + id);

		axios
		
		.delete("/api/figures/" + id)

		.then(res =>  {
			console.log(res);
			this.props.deleteFigure(id);
		})

		.catch(error => {
			alert("Something went wrong");
		});
	}

    render() {
        return (
        	<Grid item xs={12} sm={8} md={4}>
				<Card style={cardStyle} >
				<CardActionArea>
					<CardContent>
						<Typography variant="caption" display="block" gutterBottom>
							{this.props._id}
						</Typography>

						<Typography variant="h6" display="block" gutterBottom>
							{this.props.name}
						</Typography>

						<Typography variant="subtitle1" display="block" gutterBottom>
							{this.props.brand}
						</Typography>

						<Typography variant="overline" display="block" gutterBottom>
							$ {this.props.price}
						</Typography>

						<Typography variant="body2" display="block" gutterBottom>
							{ !this.props.toSell &&
								<span>
								In Posession
								</span>
							}
							{ this.props.toSell &&
								<span>
								Listed for Sale
								</span>
							}              
						</Typography>
					</CardContent>
				</CardActionArea>
				
				<CardActions>
					<Button
						size="small"
						variant="outlined"
						onClick={e => {this.handleDelete(this.props._id)}}
						type="submit"
						color="primary"
					>
						Delete Figure
					</Button>
				</CardActions>
				
				</Card>
          	</Grid>
        );
    }
 }

 export default Figure;