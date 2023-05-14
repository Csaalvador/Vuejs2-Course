
new Vue({
    el: '#desafio',
    data:{
        name: 'Cauã Salvador',
        idade: 18,
        image: 'https://th.bing.com/th?id=OSK.2798535e50f1732df8e047af11fbd13d&w=116&h=116&c=7&o=6&dpr=1.5&pid=SANGAM'
    },

    methods:{
        idade_x_3:function(){
            return this.idade*3
        },
        numero_aleatorio:function(){
            return Math.random()
        },
        input(event){
            event.target.value = 'olá'
        }
    }
})