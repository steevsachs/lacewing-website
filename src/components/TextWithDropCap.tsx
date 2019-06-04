import { colors } from '../styles'
import { css } from 'emotion'
import React from 'react'

const styles = {
  withDropCap: css({
    '&:first-child:first-letter': {
      color: colors.green,
      fontSize: '250%',
    },
    lineHeight: '1.5em',
  }),
}

const TextWithDropCap: React.FC = ({ children }) => (
  <div className={styles.withDropCap}>{children}</div>
)

export default TextWithDropCap
