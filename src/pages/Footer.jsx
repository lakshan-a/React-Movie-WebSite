import React from 'react'
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
    const usefullLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of Servie',
        'Privacy Policy',
    ];
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculis',
    ];
  return (
    <footer id='footer' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>CINEMA</span>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Omnis, nostrum magni, consequuntur nam perspiciatis 
                            praesentium facilis quod eum quos expedita.
                        </p>
                        <div className="social-links mt-3">
                            <a href="" className="twitter">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="" className="facebook">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="" className="instagram">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="" className="youtube">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Lnks</h4>
                        <ul>
                            {usefullLinks.map(link => (
                                <FooterNavItem key={link} name={link}/>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Cinemas</h4>
                        <ul>
                            {locations.map(link => (
                                <FooterNavItem key={link} name={link}/>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>OContact Us</h4>
                        <p>
                            Street Name <br />
                            City Name, State 1234556 <br />
                            Sri lanka <br />
                            <strong>Phone:</strong>+94 713 988 628 <br />
                            <strong>Email:</strong>lakshan@gmail.com <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy: Copyright{''}
                <strong>
                    <span>DStudio Technology</span>
                </strong>
                .All Rights Reserver
            </div>
            <div className="credits">
                Desingned by   <a href="#">DStudio Technology</a>
            </div>
        </div>

    </footer>
  )
}

export default Footer