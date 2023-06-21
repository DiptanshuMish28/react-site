
import Logo from '../assets/pizzaLogo.png'
import {Link} from "react-router-dom";
import '../styles/navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
function Navbar() {
  return (
    <div className="navbar">
        <div className='leftSide'>
            <img src={Logo}/>

        </div>
        <div className='RightSide'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <ReorderIcon/>

        </div>
    </div>
  );
}

export default Navbar   