import React, { useEffect, useState } from 'react';
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow.js";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  // colocamos o estado inicial como null pois queremos que ele apareça somente
  // quando tiver dados, se fosse um [] ainda apareceria pois um array vazio ainda tem
  // um valor, já o null não tem.

  useEffect(() => {

    // Pegando a Lista Total
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured Movie Aleatoriamente

      let originals = list.filter(i => i.slug === "originals");
      let randomNumb = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let randomMovie = originals[0].items.results[randomNumb];
      let movieChosen = await Tmdb.getMovieInfo(randomMovie.id, 'tv');


      setFeaturedData(movieChosen);

    }

    loadAll();
  }, []);

  console.log(movieList)

  return (
    <div className="page">

      <Header />
      {
        featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key} />
        ))}
      </section>

      <footer>
        <p>Feito com muito carinho por <a href="https://github.com/franciscofeo">Francisco Angelo</a></p>
        <p>Informações retiradas do site <a href="https://www.themoviedb.org/">The Movie Database</a></p>
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
          <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading" />
      </div>
      }
    </div>
  )

}

export default App;
