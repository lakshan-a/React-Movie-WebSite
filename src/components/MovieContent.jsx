import React from 'react'
import './movieContent.css';
import titleImg from '../images/transformer-title.png';
import Button from './Button';


function MovieContent() {
  return (
    <div className="content active">
        <img src={titleImg} alt="Movie Title" className="movie-title" />
        <h4>
            <span>Year</span>
            <span><i>age</i></span>
            <span>lenght</span>
            <span>category</span>
        </h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Saepe sed culpa expedita eum! Odit natus dolore quis 
            deleniti aliquam, esse placeat eveniet obcaecati, repellat, 
            hic architecto ut reprehenderit expedita velit? Doloremque 
            aperiam debitis corporis perferendis? Odio minus maiores 
            perspiciatis nobis labore quis eum ducimus, fugiat commodi 
            magnam? Numquam, cum voluptatem.
        </p>
        <div className="button">
          <Button 
            icon={<ion-icon name="bookmark-outline"></ion-icon>} 
            name='book' 
            color='#ff3700' 
            bgColor='#fff'
          />
          <Button 
            icon={<ion-icon name="add-outline"></ion-icon>} 
            name='My List' 
          />
        </div>
    </div>
  )
}

export default MovieContent