import Vue from 'vue'
import { makeDecorator } from '@storybook/addons'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

export const withThemeProvider = makeDecorator({
  name: 'withThemeProvider',
  parameterName: 'themeProvider',
  wrapper(Story, context) {
    const theme = context.globals ? context.globals.theme : 'light'
    const isDark = theme === 'dark'

    const WrappedComponent = Story(context)

    return Vue.extend({
      components: { WrappedComponent },
      props: {
        light: { default: () => !isDark },
        dark: { default: () => isDark }
      },
      template: `
        <v-theme-provider :light="light" :dark="dark">
          <wrapped-component />
        </v-theme-provider>
      `
    })
  }
})
