// @flow
import withSizes from 'react-sizes'

export type Sizes = {
  isMobile: boolean,
  isTablet: boolean,
}

const enhancer = withSizes(
  (sizes: *): Sizes => ({
    isMobile: withSizes.isMobile(sizes),
    isTablet: !withSizes.isTabletAndSmaller(sizes),
  })
)

export default enhancer
