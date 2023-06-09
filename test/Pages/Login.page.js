class LoginPage{

    get usernameField(){

        return $("[name='username']")

    }

    get passwordField(){

        return $("[name='password']")
    }

    get submitBtn(){

        return $("button[type='submit']")
    }

   async login(userName, password){
    
        await this.usernameField().setValue(userName)
        await this.passwordField().setValue(password)
        await this.submitBtn().click()
    }

}
 
module.exports =  new LoginPage()