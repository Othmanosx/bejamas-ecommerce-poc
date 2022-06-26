import Cart from 'assets/Cart'
import Logo from 'assets/Logo'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <Cart />
      </div>
      <hr />
    </header>
  )
}

export default Header
