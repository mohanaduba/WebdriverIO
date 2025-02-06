class Loginpage{

    get usernameTextbox(){
        return $('#username')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginbutton(){
        return $('button[type="submit"]')
    }
    get loginMessage(){
        return $('#flash')
    }

    async login(username, password){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginbutton.click()
    }

    async checkMessage(msg) {
        const flashText = await $('#flash').getText();
    }
    
}
module.exports = new Loginpage()