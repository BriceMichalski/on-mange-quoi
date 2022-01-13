import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#32502E',
        secondary: '#406343',
        third: '#ECE7B4',
        fourth: '#F3EFCC',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
