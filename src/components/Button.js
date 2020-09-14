import React from "react";
import "./Button.css";

export default ({ title, link, bkColor, ftColor }) => {

    console.log(link)

    return (
        <a href={link} className="button" style={
            {
                backgroundColor: bkColor,
                color: ftColor
            }
        }>
            {title}
        </a>
    )
}