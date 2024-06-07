import React from 'react'
import './modal.css';

function Modal({ movie }) {
  return (
    <div className="movieModal">
        <a href="#" className="modalClose">
            <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe 
            width="1280"
            height="720"
            src={movie.video}
            title={`${movie.title} | Official Trailer`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default Modal