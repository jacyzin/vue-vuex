export default {
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
}