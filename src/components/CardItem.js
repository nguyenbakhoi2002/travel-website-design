import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './CardItem.module.scss'

const cx = classNames.bind(styles)
function CardItem(props) {
  return (
    <>
        <li className={cx('cards__item')}>
            <Link className={cx('cards__item__link')} to={props.path}> 
            <figure className={cx('cards__item__pic-wrap')} data-category={props.label}>
                    <img src={props.src} alt='travel' className={cx('cards__item__img')}/>
                </figure>
                <div className={cx('cards__item__info')}>
                    <h5 className={cx('cards__item__text')}>
                        {props.text}
                    </h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem