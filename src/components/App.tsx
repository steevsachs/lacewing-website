import { css } from 'emotion'
import AboutMe from './Sections/AboutMe'
import Divider from './Divider'
import Footer from './Footer'
import Header from './Header'
import Prices from './Sections/Prices'
import React from 'react'

const styles = {
  body: css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  main: css({}),
}

const App: React.FC = () => (
  <div className={styles.main}>
    <Header />
    <div className={styles.body}>
      <AboutMe />
      <Divider />
      <Prices />
    </div>
    <Footer />
  </div>
)

export default App
