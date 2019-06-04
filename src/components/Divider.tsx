import { colors } from '../styles'
import { css } from 'emotion'
import React from 'react'

const styles = {
  divider: css({
    backgroundColor: colors.green,
    height: 1,
    margin: '1em 0',
    width: '80%',
  }),
}

const Divider: React.FC = () => <div className={styles.divider} />

export default Divider
