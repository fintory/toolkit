import * as validator from '../src/isEmailValid'

/**
 * We are only assuming that there is something in front and a domain after the
 * "@", so we are not testing any unicodes.
 */

const WHITELIST = [
  'foo@foo.bar',
  'foo@foo.berlin',
  'f.o.o.b.a.r@foo.berlin',
  'foo+123@foo.berlin',
  '2983cn(*&3@foo.berlin',
  '2983cn(*&3@foo.berlin.subdomain',
]

const BLACKLIST = [
  'foo[at]foo.bar',
  'foo<at>foo',
  'foo{at}foo.bar',
  '$@foo',
  '#&3@foo',
]

describe('isEmailValid', () => {
  it('has `isEmailValid` method', () => {
    expect(typeof validator.isEmailValid).toEqual('function')
  })

  it('has `isEmail` alias', () => {
    expect(typeof validator.isEmail).toEqual('function')
  })

  describe('whitelist', () => {
    WHITELIST.forEach(email =>
      it(`works with email '${email}'`, () => {
        expect(validator.isEmail(email)).toEqual(true)
      })
    )
  })

  describe('blacklist', () => {
    BLACKLIST.forEach(email =>
      it(`does not work with email '${email}'`, () => {
        expect(validator.isEmail(email)).toEqual(false)
      })
    )
  })
})
