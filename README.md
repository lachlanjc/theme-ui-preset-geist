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

1. Clone, run `yarn` to install dev dependency ([microbundle](https://github.com/developit/microbundle))
2. While editing, run `yarn watch`
3. In the docs directory, `yarn` then `yarn dev` to see your changes live

MIT License
