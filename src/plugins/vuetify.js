import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#EDDB3B', 
          secondary: '#3B4DED', 
          accent: '#000000', 
        },
      },
      options: { customProperties: true },
    },
  })
