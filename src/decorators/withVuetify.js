import Vue from 'vue'
import Vuetify from 'vuetify'
import { makeDecorator } from '@storybook/addons'

// Utilities
import deepmerge from 'deepmerge'

// Vuetify
Vue.use(Vuetify)

export const VuetifyPlugin = {
  installed: false,
  install() {
    if (this.installed) return
    this.installed = true

    require('vuetify/dist/vuetify.min.css')
    require('@mdi/font/css/materialdesignicons.min.css')
  }
}

export const withVuetify = makeDecorator({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: (Story, context, { parameters = {} }) => {
    VuetifyPlugin.install()

    const theme = context.globals ? context.globals.theme : 'light'
    const isDark = theme === 'dark'

    const vuetify = new Vuetify(deepmerge({
      theme: { dark: isDark }
    }, parameters))

    const WrappedComponent = Story(context)

    return Vue.extend({
      vuetify,
      props: {
        light: { default: () => !isDark },
        dark: { default: () => isDark }
      },
      components: { WrappedComponent },
      watch: {
        dark: {
          immediate: true,
          handler(val) {
            this.$vuetify.theme.dark = val
          }
        }
      },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped-component />
          </v-container>
        </v-app>
      `
    })
  }
})
