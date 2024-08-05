import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <a href=""><img src={facebook} alt='facebook' style={{width:"40px"}}/></a>
        <a href=""><img src={instagram} alt='instagram' style={{width:"40px"}}/></a>
        <a href=""><img src={twitter} alt='twitter' style={{width:"40px"}}/></a>
      </div>
      <p>Copyright &copy; 2024.All rights reserved</p>
    </div>
  );
}

export default Footer;
