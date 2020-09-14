import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// if e else não são aceitos dentro do JSX, por isso utilizei condicional ternario ali embaixo! =D

export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-460);

    const handleLeftArrow = () => {
        let changePos = scrollX + Math.round(window.innerWidth / 2);
        if ( changePos > 0){
            changePos = 0
        }
        setScrollX(changePos);
        
    }

    const handleRightArrow = () => {
        let changePos = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 180;
        if((window.innerWidth - listW) > changePos){
            changePos = window.innerWidth - listW - 60;
        }
        setScrollX(changePos);
    }

    

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={() => handleLeftArrow()}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={() => handleRightArrow()}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieRow--listArea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 180
                }}>
                    {items.results.length > 0 ? items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    )) : null}
                </div>
            </div>
        </div>
    );
}