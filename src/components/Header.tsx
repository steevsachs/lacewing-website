import { colors } from '../styles'
import { css } from 'emotion'
import Divider from './Divider'
import React from 'react'

const styles = {
  container: css({
    alignItems: 'center',
    backgroundImage: 'url("assets/main.jpg")',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
  }),
  headerInner: css({
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    display: 'flex',
    flexDirection: 'column',
    height: '50vh',
    justifyContent: 'center',
    maxWidth: 300,
    opacity: 0.9,
    outlineColor: colors.green,
    outlineOffset: -10,
    outlineStyle: 'double',
    padding: '2em',
  }),
  headerInnerText: css({
    textAlign: 'center',
  }),
  logo: css({
    margin: '2em',
  }),
}

const Header: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.headerInner}>
      <img className={styles.logo} src="assets/Lacewing300.png" />
      <Divider />
      <div className={styles.headerInnerText}>Local, home-grown flowers from Fuquay Varina, NC</div>
    </div>
  </div>
)

export default Header
