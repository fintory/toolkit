import fontSize, { generateFontSize } from '../src/dynamicFontSize'

describe('dynamicFontSize', () => {
  describe('fontSize', () => {
    test('returns a function', () => {
      expect(typeof fontSize).toEqual('function')
    })

    test('function returns an css literal', () => {
      const css = fontSize(16)
      expect(typeof css).toEqual('object')
    })
  })

  describe('generateFontSize', () => {
    test('returns a function', () => {
      expect(typeof generateFontSize).toEqual('function')
    })

    test('returns an object with right numbers', () => {
      const value = generateFontSize(16)

      expect(value.fontSize).toEqual(16)
      expect(value.lineHeight).toEqual(21)
      expect(value.letterSpacing).toEqual('-0.005')
    })

    test('accepts second attribute for line height', () => {
      const value = generateFontSize(16, 1.5)

      expect(value.fontSize).toEqual(16)
      expect(value.lineHeight).toEqual(24)
      expect(value.letterSpacing).toEqual('-0.005')
    })
  })
})
