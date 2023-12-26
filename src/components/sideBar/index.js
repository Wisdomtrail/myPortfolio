import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../assests/images/logo-s.png';
import { faGithub, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import LogoSubtitle from '../../assests/images/logo_sub.png';

const SideBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to={'/'}>
        <img src={LogoS} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
      </Link>
      <nav>
        <NavLink exact={true} activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact={true} activeClassName="active" to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/sunday-emmanuel-29a92b253/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Wisdomtrail" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCIzKwIyuO1zq32NLC8JbHBw" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/09152652431" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
