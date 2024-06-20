import './Player.css'
import back_arrow_icon from '../../assets/back-arrow_icon.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })
 
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTJiZGZhODc0ZjhlZTQzNzk5MDkzNTI2OTA1ZDgxNSIsInN1YiI6IjY2NzNlYTgyZWUxYzg1MmUzNjc3ZGNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bUNaAorP3RLSdmwbAzARzrp0eh72BpYZqNn6J--Lzk'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));  
  }, [id])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player