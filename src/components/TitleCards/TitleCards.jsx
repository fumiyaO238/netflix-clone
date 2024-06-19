import './TitleCards.css'
import { cards_data } from '../../assets/cards/Cards.data'
import { useRef } from 'react'
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const TitleCards = ({ title }) => {

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.addEventListener();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards