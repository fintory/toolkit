# `@fintory/decorators`

## Available decorators

### `withSizes`

Example usage:

```js
import { withSizes } from '@fintory/decorators'
// or `import withSizes from '@fintory/decorators/es/withSizes'`

const Component = <span />

// <Component /> will have `isMobile` and `isTablet` props now.
export default withSizes(Component)
```

## Usage of only some parts of the package

To enable tree-shaking for specific parts of your application, you may need to scope the package a little more like `@fintory/decorators/es/withSizes` instead of `@fintory/decorators` (with spread).
