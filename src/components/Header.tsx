import { css } from 'emotion'
import Divider from './Divider'
import React from 'react'

const styles = {
  container: css({
    height: 300,
    width: '100%',
  }),
  headerInner: css({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  }),
  logo: css({
    height: 225,
    margin: '2em',
  }),
}

const Header: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.headerInner}>
      <Divider />
      <img className={styles.logo} src="assets/Lacewing300.png" />
      <Divider />
    </div>
  </div>
)

export default Header
