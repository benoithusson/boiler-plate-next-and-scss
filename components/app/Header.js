import React from 'react'
import Link from 'next/link'
import styles from '../../styles/layouts/Header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header__container}>
        <div className={styles.header}>
          <div className={styles.header__brand}>
            <Link href="/">
              <a>LOGO BRAND</a>
            </Link>
          </div>
          <div className={styles.header__nav}>
            <Link href="/our-products">
              <a className={styles.nav__item}>Our products</a>
            </Link>
            <Link href="/about-us">
              <a className={styles.nav__item}>About us</a>
            </Link>
            <Link href="/contacts">
              <a className={styles.nav__item}>Contacts</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
