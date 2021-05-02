import React, { Component } from "react";

import styles from "./MainMenu.module.css"
class MainMenu extends Component {
    render() {

        const min = 1;
        const max = 8;
        const rand = Math.floor(min + Math.random() * (max - min))

        sessionStorage.setItem("specieID", rand)

        return (
            <div className={styles.Main}>
                Clé de determination <br/>
                Jeu de carte imaginé par Chloé Pereira <br/>
                <a href="/qui-suis-je"> Aller au jeu </a>
            </div>
        );
    }
}

export default MainMenu;