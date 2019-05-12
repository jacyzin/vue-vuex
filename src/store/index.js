import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_store/index'

Vue.use(Vuex);

const state = {
    usuario: "Henry Jacyzin"
};

const modules = {
    contador
};

export default new Vuex.Store({
    state,
    modules
});