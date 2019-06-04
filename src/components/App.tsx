import { css } from 'emotion'
import Header from './Header'
import React from 'react'
import Section from './Section'
import TextWithDropCap from './TextWithDropCap'

const styles = {
  main: css({
    display: 'flex',
    flexDirection: 'column',
  }),
}

const App: React.FC = () => (
  <div className={styles.main}>
    <Header />
    <Section image="header_bg.jpg" title="About Me">
      <TextWithDropCap>
        I am a hospice nurse and a small scale producer of seasonal cut flower arrangements to
        brighten lives and local businesses in Wake County, NC
      </TextWithDropCap>
    </Section>
    <Section image="color_bg.jpg" />
  </div>
)

export default App
