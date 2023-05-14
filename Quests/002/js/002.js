new Vue({
    el: '#desafio',
    data:{
        valor:'',
        valor2:''
    },
    methods:{
        alert:function(event) {
         alert('Exibindo mensagem')
        },

        armazenando:function(event) {
            this.valor2 = event.target.value
        },

    }
})