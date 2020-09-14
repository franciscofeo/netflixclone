import React from "react";
import "./Header.css";

export default () => {
    return (
        <header>
            <div className="header--logo">
                <a href="/"><img alt="logo da netflix" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21" /></a>

            </div>
            <div className="header--user">
                <a href="/"><img alt="imagem do usuario" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" /></a>

            </div>
        </header>
    )
}