import React from 'react';
import {
  Card,
  Typography,
} from '@material-ui/core';

/**
 * Component for displaying Figures on homepage
 */

 class Figure extends React.Component {
    render() {
        return (
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
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
              </h6>
            </div>
          </div>
        );
    }
 }

 export default Figure;