import Divider from './Divider'
import React from 'react'
import { css } from 'emotion'

const styles = {
  container: css({
    alignItems: 'center',
    display: 'flex',
    fontSize: '.75em',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  text: css({
    padding: '1em 0 3em 0',
  })
}

const Footer: React.FC = () => (
  <div className={styles.container}>
    <Divider />
    <div className={styles.text}>Copyright 2019 Lacewing Floral</div>
  </div>
)

export default Footer
