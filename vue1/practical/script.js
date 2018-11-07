var app = new Vue({
    el: '#app',
    data: {
        guess: 0,
        number:0
    },
    methods: {
        showAlert: function () {
            if(this.$data.number == this.$data.guess){
               alert ('User guess is correct!')
            }
            else{
                alert("Your guess is incorrect try again a number between 1 and 10")
            }
        }
    }
})

app.guess = Math.round (Math.random() * 10)

console.log(app.guess)



