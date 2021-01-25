# `theme-ui-preset-geist`

[Theme UI](https://theme-ui.com) theme preset, derived from [Geist UI](https://geist-ui.dev).

```bash
yarn add theme-ui-preset-geist
# npm i theme-ui-preset-geist
```

- Dark mode included
- Syntax highlighting theme included
- Variants inspired by Geist components:
  - Avatars
  - Badges
  - Buttons
  - Cards
  - Containers
  - Forms: input, textarea, select, radio, checkbox

See a preview/documentation: [**theme-ui-preset-geist.vercel.app**](https://theme-ui-preset-geist.vercel.app)

## Usage

```js
import { ThemeProvider } from 'theme-ui'
import theme from 'theme-ui-preset-geist'

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
```

Making your own modifications:

```js
import { ThemeProvider, merge } from 'theme-ui'
import theme from 'theme-ui-preset-geist'

const brandTheme = merge(theme, {
  colors: {
    brand: '#ff6d00',
  },
})

export default ({ children }) => (
  <ThemeProvider theme={brandTheme}>{children}</ThemeProvider>
)
```

## Contributing

All types of contributions welcome!

1. Fork this repo & clone it
2. Run `yarn` to install the development dependency ([microbundle](https://github.com/developit/microbundle))
3. Run `yarn link` so docs site can use your local version
4. Run `yarn watch` to continuously compile changes
5. In the docs directory, `yarn link theme-ui-preset-geist` to use the local version instead of the published package, then `yarn` to install dependencies & `yarn dev` to see your changes live

MIT License
