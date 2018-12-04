import fontSize, { generateFontSize } from '../src/dynamicFontSize'

describe('dynamicFontSize', () => {
  describe('fontSize', () => {
    it('returns a function', () => {
      expect(typeof fontSize).toEqual('function')
    })

    it('function returns an css literal', () => {
      const css = fontSize(16)
      expect(typeof css).toEqual('object')
    })
  })

  describe('generateFontSize', () => {
    it('returns a function', () => {
      expect(typeof generateFontSize).toEqual('function')
    })

    it('returns an object with right numbers', () => {
      const value = generateFontSize(16)

      expect(value.fontSize).toEqual(16)
      expect(value.lineHeight).toEqual(21)
      expect(value.letterSpacing).toEqual('-0.005')
    })

    it('accepts second attribute for line height', () => {
      const value = generateFontSize(16, 1.5)

      expect(value.fontSize).toEqual(16)
      expect(value.lineHeight).toEqual(24)
      expect(value.letterSpacing).toEqual('-0.005')
    })
  })
})
