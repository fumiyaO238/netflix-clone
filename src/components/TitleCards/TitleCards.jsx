import './TitleCards.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.addEventListener();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTJiZGZhODc0ZjhlZTQzNzk5MDkzNTI2OTA1ZDgxNSIsInN1YiI6IjY2NzNlYTgyZWUxYzg1MmUzNjc3ZGNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bUNaAorP3RLSdmwbAzARzrp0eh72BpYZqNn6J--Lzk'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [category])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards