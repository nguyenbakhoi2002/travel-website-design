import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './HeroSection.module.scss'
import classNames from 'classnames/bind'
import {Button} from './Button.js'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
const cx = classNames.bind(styles)



function HeroSection() {
  return (
    <div className={cx('hero-container')}>
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <h1>ADVENTURE AWAITS </h1>
        <p>What are you waiting for ? </p>
         <div className={cx('hero-btns')}>
            <Button
                className={cx('btns')}
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
            >
                GET STARTED
            </Button>
            <Button
                className={cx('btns')}
                buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'
            >
                WATCH TRAILER <FontAwesomeIcon className={cx('fa-cricle-play')} icon={faCirclePlay} />
            </Button>
         </div>
    </div>
  )
}

export default HeroSection