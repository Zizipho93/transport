var app = new Vue({
    el: '#app',
    data: {
        guess: 0,
        number:0
    },
    methods: {
        reverseMessage: function () {
            if(this.$data.number == this.$data.guess){
               alert ('User guess is correct!')
            }
        }
    }
})

app.guess = Math.round (Math.random() * 10)

console.log(app.guess)



