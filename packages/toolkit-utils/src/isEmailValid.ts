type ICallbackMethod = (returnValue: boolean) => void

/**
 * Just a noop for spoofing a default Function
 * @return {void}
 */
const noop: ICallbackMethod = () => {}

export const EMAIL_REGEX = /\S+@\S+\.\S+/

/**
 * isEmailValid is the main function of this module, it validates an email with
 * a simple regex
 *
 * @param  {String}    email  Email that should be validated
 * @param  {Function}  [cb]   Optional callback method
 *
 * @returns {Boolean}          Is the email valid?
 */
export const isEmailValid = (
  email: string,
  cb: ICallbackMethod = noop
): boolean => {
  const isValid = EMAIL_REGEX.test(email)
  if (isValid) cb(true)
  return isValid
}

export default isEmailValid

/**
 * isEmail is an alias for isEmailValid
 *
 * @returns {Boolean}
 */
export const isEmail = isEmailValid
