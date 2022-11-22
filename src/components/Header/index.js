// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="home">
    <img
      className="img-size"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="ul-container">
      <Link to="/" className="links">
        <li className="li-items">Home</li>
      </Link>
      <Link to="/product" className="links">
        <li className="li-items">Products</li>
      </Link>
      <Link to="/cart" className="links">
        <li className="li-items">Cart</li>
      </Link>
      <Link to="/login">
        <li className="li-items">
          <button className="button-logout" type="button">
            Logout
          </button>
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
