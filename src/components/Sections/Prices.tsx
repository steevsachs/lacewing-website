import { css } from 'emotion'
import React from 'react'
import { colors, textStyles } from '../../styles'
import Price from '../Price'

const styles = {
  column: css({
    alignItems: 'center',
    backgroundColor: colors.white,
    display: 'flex',
    flexBasis: '33%',
    flexGrow: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2em',
    padding: '2em',
  }),
  columnContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
  }),
  container: css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  header: css(textStyles.header, {
    display: 'flex',
    fontSize: '4em',
    justifyContent: 'center',
  }),
  image: css({
    '& img': {
      height: 400,
    },
    display: 'flex',
    justifyContent: 'center',
    outline: `.5px solid ${colors.green}`,
    outlineOffset: 5,
  }),
  text: css(textStyles.header, {
    marginTop: '1em',
  }),
}

const Prices: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.columnContainer}>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src="assets/flowers3.jpg" />
        </div>
        <div className={styles.text}>Small</div>
        <Price>$#</Price>
      </div>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src="assets/flowers2.jpg" />
        </div>
        <div className={styles.text}>Medium</div>
        <Price>$#</Price>
      </div>
      <div className={styles.column}>
        <div className={styles.image}>
          <img src="assets/flowers1.jpg" />
        </div>
        <div className={styles.text}>Large</div>
        <Price>$#</Price>
      </div>
    </div>
  </div>
)

export default Prices
