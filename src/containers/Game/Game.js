import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from "./Game.module.css";

import Choix from "../../components/Choix/Choix"
import Description from "../../components/Description/Description"
import Carte from "../../components/Carte/Carte"


class Game extends Component {
    state = {
        loading: true,
        speciesID: parseInt(sessionStorage.getItem("specieID")),
        species: require("../../assets/species/data.json"),
        tour: JSON.parse(sessionStorage.getItem("caractere")) === null ? 0 : JSON.parse(sessionStorage.getItem("caractere")).length,
        caracteres: JSON.parse(sessionStorage.getItem("caractere"))
    }

    deleteAll = () => {
        sessionStorage.removeItem("caractere")
        sessionStorage.removeItem("specieID")
    }

    render() {
        return (
            <div class={styles.Global}>
                {/*  */}
                <div className={styles.Title}>
                    <p>Retrouve mon espèce</p>
                </div>

                <div class="row">
                    {/*  */}
                    <div class="col-md">
                    <Description 
                        caracteres={this.state.caracteres} />
                    </div>

                    {/*  */}
                    <div class="col-md">
                    <Carte 
                        specie={this.state.species[this.state.speciesID]} 
                        tour={this.state.tour} />
                    </div>

                    {/*  */}
                    <div class="col-md">
                    <Choix 
                        specie={this.state.species[this.state.speciesID]} 
                        tour={this.state.tour}/>
                    </div>
                </div>
                {/*  */}
                <a href="/" onClick={this.deleteAll}> Menu principal </a>
                
            </div>
        );
    }
}

export default Game;