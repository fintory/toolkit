# `@fintory/utils`

## Available utilities

### `dynamicFontSize`

Example usage:

```js
import { fontSize } from '@fintory/utils'
// or `import fontSize from '@fintory/utils/es/dynamicFontSize'`

fontSize(16) // returns a css literal that can be used in `styled-components`
fontSize(16, 1.6) // also returns a css literal
```

**Hint:** You may only use the `fontSize` method, if you are also using `styled-components`. Otherwise, you can just use the `generateFontSize` function, which is also exported and can be used like this:

```js
import { generateFontSize } from '@fintory/utils'
// or `import { generateFontSize } from '@fintory/utils/es/dynamicFontSize'`

generateFontSize(16) // returns an object which can be used in any CSS-in-JS toolkit
generateFontSize(16, 1.6) // also returns an object
```

## Usage of only some parts of the package

To enable tree-shaking for specific parts of your application, you may need to scope the package a little more like `@fintory/utils/es/dynamicFontSize` instead of `@fintory/utils` (with spread).
