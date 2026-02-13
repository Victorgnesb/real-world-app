import LoginPage from "../pages/loginPage.js"
import userdata from "../fixtures/users/userdata.json"
import SignUpPage from "../pages/signUpPage.js"
import UserTransfer from "../pages/userTransfer.js"

const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const userTransfer = new UserTransfer()

describe('Login com sucesso', () => {
  
  it('Deve fazer login com um usuário válido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userdata.user[0].username, userdata.userSucess.accPassword)
    loginPage.loginSucess()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userdata.userFail.username, userdata.userFail.password)
    loginPage.loginError()
    
  })
})

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    loginPage.accessLoginPage()
    signUpPage.signUpField()
    
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    loginPage.accessLoginPage()
    signUpPage.signUpFieldError()
    
  });
});

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userdata.user[1].username, userdata.userSucess.accPassword)
    userTransfer.balanceCheck()
    userTransfer.newTransfer()

  });
});