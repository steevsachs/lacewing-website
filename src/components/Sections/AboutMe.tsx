import { colors } from '../../styles'
import { css } from 'emotion'
import Divider from '../Divider'
import Facebook from '../Social/Facebook'
import Instagram from '../Social/Instagram'
import React from 'react'
import Section from '../Section'
import TextWithDropCap from '../TextWithDropCap'

const styles = {
  icon: css({
    border: `.5px solid ${colors.green}`,
    borderRadius: 5,
    fill: colors.green,
    height: 24,
    margin: '1em .25em 0 .25em',
    padding: '.25em',
    width: 24,
  }),
  icons: css({
    display: 'flex',
    justifyContent: 'center',
  }),
}

const AboutMe: React.FC = () => (
  <Section image="header_bg.jpg" title="About Me">
    <TextWithDropCap>
      I am a hospice nurse and a small scale producer of seasonal cut flower arrangements to
      brighten lives and local businesses in Wake County, NC
    </TextWithDropCap>
    <Divider />
    <div className={styles.icons}>
      <Facebook className={styles.icon} />
      <Instagram className={styles.icon} />
    </div>
  </Section>
)

export default AboutMe
