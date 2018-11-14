var app = new Vue ({
    el: "#app",
    data: {
        username:"",
        password:"",
        usernameError: false,
        passwordError: false,
        usernameErrorMessage: []
    },
    methods:{
        login: function(){
            this.usernameError = false
            this.passwordError = false 
            this.usernameErrorMessage = []
            this.passwordErrorMessage = []


            if(this.password.length < 6) {
                this.passwordError = true
                this.passwordErrorMessage.push ({msg:'Passwowrd is too short' , date: Date.now()})
                var errorMessage = {
                    msg: 'new Error Message',
                    date: Date.now()
                }
                this.passwordErrorMessage.push(errorMessage)
            }
            //
            //if(!this.password.includes("")) {
            //    this.passwordError = true
            //    this.passwordErrorMessage.push ({msg:'Passwowrd is too short' , date: Date.now()})
            //    var errorMessage = {
            //        msg: 'new Error Message',
            //        date: Date.now()
            //    }
            //    this.passwordErrorMessage.push(errorMessage)
            //}

            if(this.username.length < 3) {
                this.usernameError = true
                this.usernameErrorMessage.push ({msg:'Username is too short' , date: Date.now()})
                var errorMessage = {
                    msg: 'new Error Message',
                    date: Date.now()
                }
                this.usernameErrorMessage.push(errorMessage)
            }


            if(!this.username.includes("@")){
                this.usernameError = true
                this.usernameErrorMessage.push ({msg:'Username must be a valid email address' , date: Date.now()})
            
               
            }
        } 
        
        

    }
})

// app.js

window.addEventListener('load', function() {

    var webAuth = new auth0.WebAuth({
      domain: 'zmkontwana.auth0.com',
      clientID: 'sv3auzm3X_K3pgrda5ewaxO-fxnVhYDc',
      responseType: 'token id_token',
      scope: 'openid',
      redirectUri: window.location.href
    });
  
    var loginBtn = document.getElementById('login');
  
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      webAuth.authorize();
    });
  
  });