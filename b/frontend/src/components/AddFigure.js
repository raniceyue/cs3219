import React from 'react';
import axios from "axios";
import { Button, FormControl, FormControlLabel, RadioGroup, Radio, TextField } from '@material-ui/core';

class AddFigure extends React.Component {
    
    state = {
        name: "",
        price: "",
        brand: "",
        toSell: false
    };

    // Handle post new info
    handleFormSubmit = () => {
        
        const { addNewItemToParentState } = this.props;

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
            .then(res => console.log(res), () => {
                addNewItemToParentState({
                    name,
                    price,
                    brand,
                    toSell
                });
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
            <div>
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
                    error={name === ""}
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
                error= {
                    price === "" ||
                    price < 0
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
                error={brand === ""}
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
                disabled={
                    name === "" ||
                    price === "" ||
                    brand === "" ||
                    toSell === "" 
                }
            >
                Submit
            </Button>

            </div>
        );
    }
}

export default AddFigure;