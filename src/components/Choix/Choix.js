import React, { Component } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Choix.css"
import styles from "./Choix.module.css"

class Choix extends Component {
    state = {
        tour: this.props.tour,
        caractere: JSON.parse(sessionStorage.getItem("caractere")),
        selectedOption: "",
        value: false
    };

    handleFormSubmit = (formSubmitEvent) => {
        if(this.state.value === "true") {
            var temp = this.state.caractere
            if(temp === null) {
                temp = []
            }
            temp.push(this.state.selectedOption)
            sessionStorage.setItem("caractere", JSON.stringify(temp) );
        } else {
            formSubmitEvent.preventDefault()
            toast.error('Mauvaise réponse', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.name,
          value: changeEvent.target.value
        });
    }

    render() {
        var toReturn = null;
        if(this.props.specie["caracteres"].length > this.state.tour) {
            toReturn = (
            <div>
                <p>
                    Choisis la description qui me correspond le plus parmi :
                </p>
                <form onSubmit={this.handleFormSubmit}>
                    <div className={styles.radio}>
                        <label>
                            <input
                                type="radio"
                                name={this.props.specie[this.props.specie["caracteres"][this.state.tour]][1]["name"]}
                                value={(this.props.specie[this.props.specie["caracteres"][this.state.tour]][1]["value"])}
                                checked={ (this.state.selectedOption) === (this.props.specie[this.props.specie["caracteres"][this.state.tour]][1]["name"]) }
                                onChange={this.handleOptionChange}
                            />
                            <coucou className={styles.nomRadio}>{this.props.specie[this.props.specie["caracteres"][this.state.tour]][1]["name"]} </coucou>
                        </label>
                    </div>
                    <div className={styles.radio}>
                        <label>
                            <input
                                type="radio"
                                name={this.props.specie[this.props.specie["caracteres"][this.state.tour]][2]["name"]}
                                value={(this.props.specie[this.props.specie["caracteres"][this.state.tour]][2]["value"])}
                                checked={(this.state.selectedOption) === (this.props.specie[this.props.specie["caracteres"][this.state.tour]][2]["name"])}
                                onChange={this.handleOptionChange}
                            />
                            <coucou className={styles.nomRadio}>{this.props.specie[this.props.specie["caracteres"][this.state.tour]][2]["name"]}</coucou>
                        </label>
                    </div>
                    <div className={styles.Button}>
                    <button class="styled blue" type="submit" disabled={!this.state.value}>Suivant</button>
                    </div>
                </form>
            </div>
            )
        } else {
            console.log(this.props.specie.cache)
            toReturn = (
                <div>
                    <p> Bravo !</p>
                    <p> Tu as trouvé <b>{this.props.specie.espece}</b> (<i>{this.props.specie.latin}</i>) </p>
                </div>
            )
        }
        return (
            <div className={styles.Global}>
                {toReturn}
                <ToastContainer />
            </div>
        );
    }
}

export default Choix;
