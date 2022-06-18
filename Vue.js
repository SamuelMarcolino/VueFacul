const app = Vue.createApp({
    data: function () {
        return {
            tasks: [
                {
                    id: 1,
                    description: "Lançar notas",
                    situation: false
                },
                {
                    id: 2,
                    description: "Conferir caixa",
                    situation: true
                },
                {
                    id: 3,
                    description: "Fechar caixas",
                    situation: true
                },
                {
                    id: 4,
                    description: "Preparar malote",
                    situation: true
                },
                {
                    id:5,
                    description:"Entregar o malote",
                    situation: true
                },
                {
                    id:6,
                    description:"Despaixar motoboy",
                    situation: false
                }
            ]
        }
    }
});
app.mount("#app");