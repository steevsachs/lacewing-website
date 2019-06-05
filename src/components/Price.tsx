import { colors, textStyles } from '../styles'
import { css } from 'emotion'
import React from 'react'

const styles = {
  text: css(textStyles.header, {
    backgroundColor: colors.green,
    borderRadius: 30,
    color: colors.white,
    fontSize: '2em',
    marginTop: 10,
    maxWidth: 'min-content',
    padding: '.25em',
  }),
}

const Price: React.FC = ({ children }) => <div className={styles.text}>{children}</div>

export default Price
