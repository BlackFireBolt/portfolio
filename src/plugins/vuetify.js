import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.cyan.darken3,
                secondary: colors.teal.lighten1,
                background: colors.grey.lighten4
            },
            dark:{
                primary: colors.cyan.darken3,
                secondary: colors.teal.lighten1,
                background: colors.grey.lighten3
            }
        }
    }
});
//linear-gradient(0deg, grey, white 40%)