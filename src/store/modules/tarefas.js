const state = {
    tarefas: []
};

const getters = {
    tarefasConcluidas: (state, getters, rootState, rootGetters) => {
        console.log("Getters: state:", state, rootState);
        return state.tarefas.filter(t => t.concluido)
    },
    tarefasAFazer: state => state.tarefas.filter(t => !t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorId: state => id => state.tarefas.find(t => t.id === id)
};

const actions = {
    buscarTarefas: (context, payload) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, titulo: "Aprender Vue", concluido: true },
                    { id: 2, titulo: "Aprender Vue Router", concluido: true },
                    { id: 3, titulo: "Aprender Vuex", concluido: false }
                ])
            })
        }, 2000)
    },
    listarTarefas: ({ commit, dispatch }, payload) => {
        console.log("Action: listarTarefas");
        return dispatch("buscarTarefas")
            .then(tarefas => {
                console.log("Mutation: listarTarefas");
                commit("listarTarefas",  { tarefas })
            })
    }
};

const mutations = {
    listarTarefas: (state, { tarefas }) => {
        state.tarefas = tarefas
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}