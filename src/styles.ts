import { CSSObject } from '@emotion/css'
import { css, injectGlobal } from 'emotion'

type Font = {
  fontFamily: string
  fontWeight?: number
  filename: string
}

const colors = {
  green: '#354726',
  offWhite: '#f8f8f8',
  white: '#fff',
}

const formats = ['ttf', 'woff']

const fonts: Font[] = [{ fontFamily: '"Avenir Book"', filename: 'Avenir-Book' }]

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

const textStyles = {}

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
      fontFamily: '"Avenir Book", sans-serif',
      fontSize: 18,
      margin: 0,
      padding: 0,
    }),
  },
]

injectGlobal(globalStyles)

export { colors, textStyles }
