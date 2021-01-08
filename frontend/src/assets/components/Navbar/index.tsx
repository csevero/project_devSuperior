import {Link} from 'react-router-dom';

import './index.css';

import logoIcon from '../../images/vector/logo.svg';

function NavBar() {
   return(
      <nav className="main-navbar">
         <img src={logoIcon} alt="logo ds" />
         <Link to="/">
            DS Delivery
         </Link>
      </nav>
   )
}

export default NavBar;