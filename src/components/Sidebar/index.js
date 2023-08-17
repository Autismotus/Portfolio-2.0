import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/img/4486976.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <h2 className='nav-title'>Thorström</h2>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faAddressBook} color="4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="4d4d4e" />
            </NavLink>
        </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/isak-thorström

">
                <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Autismotus">
                <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
        </li>
    </ul>
    
    </div>
)


export default Sidebar;