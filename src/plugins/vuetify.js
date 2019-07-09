import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const theme = {
    primary: '#4caf50',
    secondary: '#4caf50',
    tertiary: '#495057',
    accent: '#82B1FF',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#5cb860',
    warning: '#ffa21a'
};

Vue.use(Vuetify, {theme, iconfont: ['mdi', 'fa']});
