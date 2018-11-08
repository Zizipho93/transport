function generateGuess(){
  return Math.round(Math.random() * 10)
}
const app = new Vue({
  el: "#app",
  data: {
    timer: 1,
    computerGuess: generateGuess(),
    userGuess: 0,
    errors: [],
    showModal : false,
    failure: true,
    success: true,
    customMessage:""
    
  },
  methods: {
    enter: function(){
      if(this.$data.userGuess == this.$data.computerGuess){
        alert ('User guess is correct!')
        this.timer = 5
        this.computerGuess = generateGuess()
     }
     else{
       this.errors.push(true)
       if(this.errors.length >= 3){
       alert("you failed!")
        this.timer = 60
        this.errors = []
        this.computerGuess = generateGuess()
      

        }
      
       }
     }
    }
})
  
function countDown(){
  app.timer--
  if(app.timer == 0){
    app.showModal = true
    app.failure = true
    app.success = false
    app.timer = 5
    app.customMessage= "The correct value was " + app.computerGuess
  
  }
}

setInterval(countDown, 1000)

console.log(app.computerGuess)

