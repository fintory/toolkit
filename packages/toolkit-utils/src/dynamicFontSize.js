// @flow
import { css } from 'styled-components'

const a: number = -0.017
const b: number = 0.202
const c: number = -0.175
const baseLine: number = 1.3

export default function calculateFontSize(fontSize: number, lineHeight: number = baseLine): * {
  // eslint-disable-next-line no-restricted-properties
  const tracking = (a + b * Math.pow(Math.E, c * fontSize)).toFixed(3)
  const leading = Math.round(fontSize * lineHeight)

  return css`
    font-size: ${fontSize}px;
    line-height: ${leading}px;
    letter-spacing: ${tracking}em;
  `
}
