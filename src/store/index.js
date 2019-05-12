import Vue from 'vue'
import Vuex from 'vuex'

import contador from '@/resources/contador/_components/_store/index'
import tarefas from '@/resources/tarefas/_components/_store/index'

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