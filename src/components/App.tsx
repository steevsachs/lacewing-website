import { css } from 'emotion'
import React from 'react'

const styles = {
  logo: css({
    width: '90%',
  }),
  main: css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
}

const App: React.FC = () => (
  <div className={styles.main}>
    <img className={styles.logo} src="assets/Lacewing.png" />
  </div>
)

export default App
