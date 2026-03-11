import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>

            <ul className='footer-list'>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
           
            <div className="allrightsContainer">
      <p className="allRights">©<span id="year"></span>FlowCRM.  All rights reserved.</p>
      <span>|</span>
      <p className="signature">Created with ❤️ by <a href="https://www.linkedin.com/in/lyes-medjahed" target="_blank" rel="noopener noreferrer" className="author"> Lyes Medjahed</a></p>
    </div>
        </div>
    );
}