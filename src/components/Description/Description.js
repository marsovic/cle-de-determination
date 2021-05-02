import React, { Component } from "react";

import styles from "./Description.module.css"

class Description extends Component {
    render() {

        var toReturn = null;
        if(this.props.caracteres !== null ) {
            toReturn = this.props.caracteres.map(caract => {
                return (
                       <li> {caract} </li>
                );
            })
        }

        console.log(toReturn)
        
        return (
            <div className={styles.Global}>
                <p>Liste des caractères déjà découverts: </p>
                <ul>
                {toReturn}
                </ul>
            </div>
        );
    }
}

export default Description;
