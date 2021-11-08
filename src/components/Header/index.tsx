import Image from 'next/image'

import styles from './style.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="100" height="50" />

        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Post</a>
        </nav>
      </div>
    </header>
  )
}