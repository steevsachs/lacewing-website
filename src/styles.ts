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
      '& #root': {
        alignItems: 'center',
        display: 'flex',
        height: 'calc(100% - 5px)',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 5px)',
      },
      '& a': {
        '&:hover': css({
          transition: 'color .5s ease',
        }),
        transition: 'color .5s ease',
      },
      fontFamily: 'sans-serif',
      fontSize: 18,
      margin: 2,
      padding: 0,
    }),
  },
]

injectGlobal(globalStyles)

export { textStyles }
