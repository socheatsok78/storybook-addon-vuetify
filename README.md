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
import { addDecorator } from '@storybook/vue'
import { withVuetify } from '@socheatsok78/storybook-addon-vuetify/dist/register'

addDecorator(withVuetify)
```
