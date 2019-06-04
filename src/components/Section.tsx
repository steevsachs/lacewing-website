import { colors } from '../styles'
import { css } from 'emotion'
import React from 'react'

type SectionProps = {
  image: string
  title?: string
}

const styles = {
  container: css({
    marginBottom: '8em',
    width: '100%',
  }),
  headerImage: (image: string) =>
    css({
      backgroundImage: `url("assets/${image}")`,
      backgroundPosition: 'center',
      height: 250,
      width: '100%',
    }),
  sectionContainer: css({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-3em',
  }),
  sectionContent: css({
    borderRadius: 4,
    fontSize: '1.4em',
    marginTop: '-1em',
    padding: '2em',
    width: '60%',
    zIndex: 1,
  }),
  titleContent: css({
    backgroundColor: colors.white,
    borderRadius: 4,
    fontSize: '2em',
    padding: '1.25em',
    zIndex: 2,
  }),
}

const Section: React.FC<SectionProps> = ({ children, image, title }) => (
  <div className={styles.container}>
    <div className={styles.headerImage(image)} />
    <div className={styles.sectionContainer}>
      {title && <div className={styles.titleContent}>{title}</div>}
      <div className={styles.sectionContent}>{children}</div>
    </div>
  </div>
)

export default Section
