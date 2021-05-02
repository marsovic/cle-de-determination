import React, { Component } from "react";

import styles from "./Carte.module.css"

class Carte extends Component {
    render() {
        var toReturn = null;
        var tempCarac = null
        if( this.props.specie.caracteres === null) {
            tempCarac = 0;
        } else {
            tempCarac = this.props.specie.caracteres.length;
        }
        if( tempCarac === this.props.tour ) {
            toReturn = <img alt={this.props.specie.espece} src={this.props.specie.image} />
        } else {
            toReturn = <img alt={this.props.specie.espece} src={this.props.specie.cache} />
        }

        console.log( )
        
        return (
            <div className={styles.Img}>
                {toReturn}
            </div>
        );
    }
}

export default Carte;
