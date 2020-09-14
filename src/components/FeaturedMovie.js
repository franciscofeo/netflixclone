import React from "react";
import Button from "./Button";
import "./FeaturedMovie.css";

export default ({ item }) => {

    

    // Criando um array com o nome dos generos para depois juntá-los

    let genresArr = [];
    let genresReq = item.genres;

    genresReq.forEach(element => {
        genresArr.push(element.name);
    });

    let description = item.overview;
    if(description.length > 210){
        description = description.substring(0, 210) + "...";
    }

    return (
        <div className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }
        }>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">
                            {
                                item.first_air_date.slice(0, 4)
                            }
                        </div>
                        <div className="featured--season">
                            {item.number_of_seasons} temporada{item.number_of_seasons > 1 ? "s" : ""}
                        </div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                            <Button title="► Assistir" link={item.homepage} bkColor="white" ftColor="black" />
                            <Button title="+ Minha Lista" link={item.id} bkColor="#333" ftColor="white" />
                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>
                        {genresArr.join(", ")}
                    </div>
                </div>

            </div>
        </div>
    )
}