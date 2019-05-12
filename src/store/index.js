import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/store/modules/contador'
import tarefas from '@/store/modules/tarefas'

Vue.use(Vuex);

const state = {
    usuario: "Henry Jacyzin"
};

const modules = {
    contador,
    tarefas
};

export default new Vuex.Store({
    state,
    modules
});