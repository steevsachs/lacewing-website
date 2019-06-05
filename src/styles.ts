import { CSSObject } from '@emotion/css'
import { css, injectGlobal } from 'emotion'

type Font = {
  fontFamily: string
  fontWeight?: number
  filename: string
}

const colors = {
  black: '#303030',
  green: '#354726',
  // green: '#306728',
  offWhite: '#f6f6f6',
  white: '#fefefe',
}

const formats = ['ttf']

const fonts: Font[] = [
  { fontFamily: '"DancingScript"', filename: 'DancingScript-Regular' },
  { fontFamily: '"Raleway"', filename: 'Raleway-Regular' },
]

const fontFaceSrc = (filename: string) =>
  formats
    .map(
      (format: string): string =>
        `url('/fonts/${filename}.${format}') format('${format === 'ttf' ? 'truetype' : format}')`
    )
    .join(',')

const createFontFace = ({ fontFamily, fontWeight, filename }: Font): CSSObject => ({
  '@font-face': {
    fontFamily,
    fontStyle: 'normal',
    fontWeight,
    src: fontFaceSrc(filename),
    textRendering: 'optimizeLegibility',
  },
})

const textStyles = {
  header: css({
    fontFamily: '"DancingScript", serif',
    fontSize: '2em',
  }),
}

const globalStyles: CSSObject[] = [
  ...fonts.map(createFontFace),
  {
    a: {
      '&:visited': {
        color: 'inherit',
      },
      color: 'inherit',
      textDecoration: 'none',
    },
    body: css({
      '& a': {
        '&:hover': css({
          transition: 'color .5s ease',
        }),
        transition: 'color .5s ease',
      },
      background: colors.offWhite,
      color: colors.black,
      fontFamily: '"Raleway", sans-serif',
      fontSize: 16,
      letterSpacing: '.1em',
      margin: 0,
      padding: 0,
    }),
  },
]

injectGlobal(globalStyles)

export { colors, textStyles }
