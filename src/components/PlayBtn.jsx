import React from 'react'
import './playBtn.css';
import Modal from './Modal';

function PlayBtn({ movie }) {
  return (
    <>
      <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
          <a href="#" className="playBtn">
              <ion-icon name="play-outline"></ion-icon>
          </a>
          <p>Watch Trailer</p>
      </div>
      {movie.active && <Modal movie={movie} />}
    </>
  )
}

export default PlayBtn