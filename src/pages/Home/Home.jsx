import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/cards/card_img1.jpg'
import hero_title from '../../assets/cards/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Rose, who is being forced to marry a wealthy man, falls in love with Jack, a talented artist, aboard the unsinkable Titanic. Unfortunately, the ship hits an iceberg, endangering their lives. Unfortunately he dies.</p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
    </div>
  )
}

export default Home