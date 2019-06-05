import { colors, textStyles } from '../styles'
import { css } from 'emotion'
import React from 'react'

type SectionProps = {
  title?: string
}

const styles = {
  container: css({
    marginBottom: '8em',
    margin: '2em 5vh',
    maxWidth: 1200,
    outlineColor: colors.green,
    outlineOffset: -10,
    outlineStyle: 'double',
  }),
  sectionContainer: css({
    alignItems: 'center',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '4em 2em',
  }),
  sectionContent: css({
    alignItems: 'center',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-1em',
    padding: '2em',
    zIndex: 1,
  }),
  titleContent: css(textStyles.header, {}),
}

const Section: React.FC<SectionProps> = ({ children, title }) => (
  <div className={styles.container}>
    <div className={styles.sectionContainer}>
      {title && <div className={styles.titleContent}>{title}</div>}
      <div className={styles.sectionContent}>{children}</div>
    </div>
  </div>
)

export default Section
