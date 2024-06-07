import React from 'react'

function TrendCard({ slide }) {
  return (
    <div className="trend">
        <img className='img-fluid' src={slide.previewImg} alt="" />
        <a href="#">
            Add to calendar <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard