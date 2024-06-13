import React, {useState, useEffect} from 'react';
import './banner.css';
import bgImg from '../images/bg-transformer.jpg';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

function Banner() {
    const [movies, setMovies] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSlideChange = id => {
        const newMovies = movies.map(movie => {
            movie.active = false;
            if(movie._id === id){
                movie.active = true;
            }
            return movie;
        });
        setMovies(newMovies);
    }

  return (
    <div className="banner">
        {
            movies && movies.length > 0 && movies.map(movie => (
                <div className="movie">
                    <img 
                        src={movie.bgImg} 
                        alt="Background Image" 
                        className={`bgImg ${movie.active ? 'active' : undefined}`} 
                    />
                    <div className="container-fluid">
                        <div className="row col-md-12">
                            <div className="col-lg-6 ">
                                <MovieContent movie={movie}/>
                            </div>
                            <div className="col-lg-6">
                                {/* <MovieDate movie={movie}/> */}
                                <PlayBtn movie={movie}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        
        {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
    </div>
  )
}

export default Banner
