import { CSSObject } from '@emotion/css'
import { css, injectGlobal } from 'emotion'

type Font = {
  fontFamily: string
  fontWeight: number
  filename: string
}

const formats = ['ttf', 'woff']

const fonts: Font[] = [
  { fontFamily: '"Final Fantasy 3/6 Font"', fontWeight: 900, filename: 'final_fantasy_36_font' },
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
  blueText: css({
    color: 'rgb(0, 200, 255)',
  }),
  whiteText: css({
    color: '#f8f8f8',
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
    body: css(textStyles.blueText, {
      '& #root': {
        height: 'calc(100% - 5px)',
        minHeight: 'calc(100vh - 5px)',
      },
      '& a': {
        '&:hover': css(textStyles.blueText, {
          transition: 'color .5s ease',
        }),
        transition: 'color .5s ease',
      },
      fontFamily: 'sans-serif',
      fontSize: '4vw',
      margin: 2,
      padding: 0,
    }),
  },
]

injectGlobal(globalStyles)

export { textStyles }
