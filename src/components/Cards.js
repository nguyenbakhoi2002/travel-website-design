import React from 'react'
import styles from './cards.module.scss'
import classNames from 'classnames/bind'
import CardItem from './CardItem'
const cx = classNames.bind(styles)
function Cards() {
  return (
    <div className={cx('cards')}>
        <h1>Check out these EPIC Destinations!</h1>
        <div className={cx('cards__container')}>
            <div className={cx('cards__wrapper')}>
                <ul className={cx('cards__items')}>
                    <CardItem
                    src="/images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label = 'Adventure'
                    path='/services'
                    />
                    <CardItem
                    src="/images/img-2.jpg"
                    text="Travel through the Islands of Bali in a Private Cruise"
                    label = 'Luxury'
                    path='/services'
                    />
                </ul>
                <ul className={cx('cards__items')}>
                    <CardItem
                    src="/images/img-3.jpg"
                    text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                    label = 'Mystery'
                    path='/services'
                    />
                    <CardItem
                    src="/images/img-4.jpg"
                    text="Experience Football on Top of the Himilayan Mountains"
                    label = 'Advanture'
                    path='/products'
                    />
                    <CardItem
                    src="/images/img-8.jpg"
                    text="Ride through the Sahara Desert on a guided camel tour"
                    label = 'Adrenaline'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards