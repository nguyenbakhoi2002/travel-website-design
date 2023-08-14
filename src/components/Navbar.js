import styles from './Navbar.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from './Button';

const cx= classNames.bind(styles)
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = ()=>setClick(!click)
    const closeMobileMenu = ()=>setClick(false)
    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    return ( 
        <>
            <nav className={cx('navbar')}>
                <div className={cx("navbar-container")}>
                    <Link to="/" className={cx('navbar-logo') } onClick={closeMobileMenu}>
                        TRVL <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                    <div className={cx('menu-icon')} onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faCircleXmark : faBars}/>
                    </div>
                    <ul className={cx('nav-menu', {'active' : click})}>
                        <li className={cx('nav-item')}>
                            <Link to="/" className={cx('nav-links')} onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/services" className={cx('nav-links')} onClick={closeMobileMenu} >
                                Services
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/products" className={cx('nav-links')} onClick={closeMobileMenu} >
                                Products
                            </Link>
                        </li>
                        <li className={cx('nav-item')}>
                            <Link to="/sign-up" className={cx('nav-links-mobile')} onClick={closeMobileMenu} >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
            
        </>
     );
}

export default Navbar
