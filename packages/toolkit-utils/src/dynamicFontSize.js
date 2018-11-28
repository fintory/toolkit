// @flow
import { css } from 'styled-components'

const a: number = -0.017
const b: number = 0.202
const c: number = -0.175
const baseLine: number = 1.3

export function generateFontSize(size: number, lineHeightMultiplier: number = baseLine): Object {
  // eslint-disable-next-line no-restricted-properties
  const letterSpacing = (a + b * Math.pow(Math.E, c * size)).toFixed(3)
  const lineHeight = Math.round(size * lineHeightMultiplier)

  return {
    fontSize: size,
    lineHeight,
    letterSpacing,
  }
}

export default function fontSize(size: number, lineHeightMultiplier: number = baseLine): * {
  // eslint-disable-next-line no-restricted-properties
  const { lineHeight, letterSpacing } = generateFontSize(size, lineHeightMultiplier)

  return css`
    font-size: ${size}px;
    line-height: ${lineHeight}px;
    letter-spacing: ${letterSpacing}em;
  `
}
