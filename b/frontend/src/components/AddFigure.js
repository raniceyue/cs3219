import React from 'react';
import axios from "axios";
import { 
        Card, CardHeader, CardContent,
        Button, FormControl, 
        FormControlLabel, RadioGroup, 
        Radio, TextField } from '@material-ui/core';

class AddFigure extends React.Component {
    
    state = {
        name: "",
        price: "",
        brand: "",
        toSell: false
    };

    // Handle post new info
    handleFormSubmit = () => {
        
        const { addFigure } = this.props;

        const {
            name,
            price,
            brand,
            toSell
        } = this.state;

        if (name !== "" &&
            price !== "" &&
            brand !== "" &&
            toSell !== "") {
            
            axios
            
            .post("/api/figures", {
                name,
                price,
                brand,
                toSell
            })

            .then(res => 
                console.log(res), 
                () => { 
                    addFigure()
                })
            .catch(error => {
                alert("Something went wrong");
            });
        }
    }

    render() {
        const {
            name,
            price,
            brand,
            toSell
        } = this.state;

        return (
                <Card variant="outlined">
                    <CardContent>
                        <CardHeader 
                            title="Add Figure to Collection"
                        />
                        <FormControl>
                            <TextField
                                required
                                autoFocus
                                value={name}
                                onChange={ e =>
                                    this.setState({
                                        name: e.target.value
                                    })
                                }
                                helperText={
                                    this.state.name === ""
                                    ? "Please enter name of figure to add"
                                    : " "
                                }
                                label="Figure Name"
                                type="string"
                            />
                            
                        </FormControl>

                        <TextField
                            id="standard-number"
                            required
                            autoFocus
                            value={price}
                            onChange={ e =>
                                this.setState({
                                    price: e.target.value
                                })
                            }
                            helperText={
                                price === ""
                                ? "Please enter price of figure"
                                : " "
                            }
                            label="Price"
                            type="number"
                            
                        />

                        <TextField
                            required
                            autoFocus
                            value={brand}
                            onChange={ e =>
                                this.setState({
                                    brand: e.target.value
                                })
                            }
                            helperText={
                                this.state.name === ""
                                ? "Please enter breand of figure to add"
                                : " "
                            }
                            label="Brand"
                            type="string"
                        
                        />
                        <RadioGroup
                            value={toSell}
                            onChange={ e =>
                                this.setState({
                                    toSell: e.target.value
                                })
                            }
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio/>}
                                label="Mark for Sale"
                            />

                            <FormControlLabel
                                value="false"
                                control={<Radio/>}
                                label="Keep"
                            />

                        </RadioGroup>

                        <Button
                            onClick={this.handleFormSubmit}
                            type="submit"
                            color="primary"
                            disabled={
                                name === "" ||
                                price === "" ||
                                brand === "" ||
                                toSell === "" 
                            }
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>        
        );
    }
}

export default AddFigure;