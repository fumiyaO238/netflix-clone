import './Navbar.css'
import logo from '../../assets/logo.png'
import serch_icon from '../../assets/serch_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} style={{width: "20%"}} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={serch_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} style={{width: 16}} alt="" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} style={{width: 40}} alt="" className='profile' />
          <img src={caret_icon} style={{width: 16}} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar