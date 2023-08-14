import React from 'react'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind'
import {Button} from './Button.js' 
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const cx = classNames.bind(styles)
function Footer() {
  return (
    <div className={cx('footer-container')}>
        <section className={cx('footer-subcription')}>
            <p className={cx('footer-subcription-heading')}>
                Join the Advrenture newsletter to the receive our best vacation deals
            </p>
            <p className={cx('footer-subcription-text')}>
                You can unsubcribe at any time
            </p>
            <div className={cx('input-area')}>
                <form>
                    <input type='email' name="email" placeholder='Your Email' className={cx('footer-input')}/>
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className={cx('footer-links')}>
            <div className={cx('footer-link-wrapper')}>
                <div className={cx('footer-link-items')}>
                    <h2>About us</h2>
                    <Link to='sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className={cx('footer-link-items')}>
                    <h2>Contact Us</h2>
                    <Link to=''>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>destination</Link>
                    <Link to='/'>Sponorships</Link>
                </div>
            </div>
            <div className={cx('footer-link-wrapper')}>
                <div className={cx('footer-link-items')}>
                    <h2>Video</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className={cx('footer-link-items')}>
                    <h2>Social Media  </h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twister</Link>
                </div>
            </div>
        </div>
        <section className={cx('social-media')}>
            <div className={cx('social-media-wrap')}>
                <div className={cx('footer-logo')}>
                    <Link to='/' className={cx('social-logo')}>
                        TRVL <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                </div>
                <small className={cx('website-rights')}>
                    TRVL 2023
                </small>
                <div className={cx('social-icons')}>
                    <Link className={cx('social-icons-link facebook')}
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <FontAwesomeIcon icon={faFacebook} className={cx('socials')}/>
                    </Link>
                    <Link className={cx('social-icons-link instagram')}
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <FontAwesomeIcon icon={faInstagram} className={cx('socials')}/>
                    </Link>
                    <Link className={cx('social-icons-link instagram')}
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <FontAwesomeIcon icon={faYoutube} className={cx('socials')}/>
                    </Link>
                    <Link className={cx('social-icons-link instagram')}
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <FontAwesomeIcon icon={faTwitter} className={cx('socials')}/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer