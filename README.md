# @socheatsok78/storybook-addon-vuetify

Storybook's Vuetify Addon

**Install**

```sh
yarn add -D @socheatsok78/storybook-addon-vuetify
```

**Usage**

Add `@socheatsok78/storybook-addon-vuetify` addon to `.storybook/main.js`

```js
module.exports = {
  addons: [
    '@socheatsok78/storybook-addon-vuetify'
  ]
}
```

Add `vueitfy` decorator to `.storybook/preview.js`

```js
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const decorators = [
  withVuetify
]
```

You can add `withThemeProvider` to use `vuetify` theme settings. But make sure to add `globalTypes` as shown.

```js
import { withVuetify, withThemeProvider } from '@socheatsok78/storybook-addon-vuetify/dist/decorators'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

export const decorators = [
  withThemeProvider,
  withVuetify
]
```
