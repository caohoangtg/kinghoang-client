import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer__menu">
                <div className="footer__menu-item">
                    <div>About Us</div>
                    <div>Contact Us</div>
                    <div>Term & Conditions</div>
                </div>
                <div className="footer__menu-item">
                    <div>Delivery Information</div>
                    <div>Return & Exchange</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
            <div className="footer__copyright">
                <strong>© 2021 SAMPLE 1A.</strong>
                <p>
                    Powered by <strong>Getz</strong>.
                </p>
            </div>
        </footer>
    )
}

export default Footer
