new Vue({
    el: '#desafio',
    data: {
        number: 0,
        valor: 0,
    },
    watch:{
        valor(novo, antigo){
            setTimeout(() =>{
                console.log(novo,antigo)
                return this.valor = 0
            },5000)
        },

    },
    methods:{
        resultado: function() {
            return this.number != 37 ? 
            'Diferente' : 'igual'
        },
    }
})