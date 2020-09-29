import { css } from 'styled-components'

/**
 * Those are the constants that are used by Inter to calculate a dynamic letter
 * spacing and line height. Those values are not the same as the defaults on the
 * homepage of Inter, however we found out, those match our asthetics most.
 * @link: https://rsms.me/inter/dynmetrics/
 */
const a: number = -0.017
const b: number = 0.202
const c: number = -0.175
const baseLine: number = 1.3

/**
 * Interface that is returned by our `generateFontSize`, letterSpacing needs to
 * be a string, since it also can be negative, etc.
 */
interface IGenerateFontSize {
  fontSize: number
  lineHeight: number
  letterSpacing: string
}

/**
 * Generate the dynamic font metrics and get an object in return.
 *
 * @param size
 * @param lineHeightMultiplier
 *
 * @returns IGenerateFontSize
 */
export function generateFontSize(
  size: number,
  lineHeightMultiplier: number = baseLine
): IGenerateFontSize {
  // eslint-disable-next-line no-restricted-properties
  const letterSpacing = (a + b * Math.pow(Math.E, c * size)).toFixed(3)
  const lineHeight = Math.round(size * lineHeightMultiplier)

  return {
    fontSize: size,
    lineHeight,
    letterSpacing,
  }
}

/**
 * Generate a font size using this function, and get a styled-components `css`
 * template literal
 *
 * @param size
 * @param lineHeightMultiplier
 *
 * @returns TemplateLiteral
 */
export default function fontSize(
  size: number,
  lineHeightMultiplier: number = baseLine
): typeof css {
  // eslint-disable-next-line no-restricted-properties
  const { lineHeight, letterSpacing } = generateFontSize(
    size,
    lineHeightMultiplier
  )

  return css`
    font-size: ${size}px;
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}em;
  `
}
