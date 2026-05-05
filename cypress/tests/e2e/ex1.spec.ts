import LoginPage from '../pages/loginPage.js'
import database from '../../../data/database-seed.json'
import SignUpPage from '../pages/signUpPage.js'



const loginPage = new LoginPage()
const signUpPage = new SignUpPage()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
      // Implemente os passos do caso de teste aqui
      loginPage.accessLoginPage()
      loginPage.loginWithUser(database.users[0].username)  
  });

  describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui\
    loginPage.accessLoginPage()
    loginPage.loginWithUser("teste", "teste")
    loginPage.loginWithWrongCredentials()
  });
  });

  describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    signUpPage.signUpField()

  });
});

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    signUpPage.signUpFieldError()
  });
});

});