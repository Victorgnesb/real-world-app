import LoginPage from '../pages/loginPage.js'
import database from '../../../data/database-seed.json'
import SignUpPage from '../pages/signUpPage.js'
import userTransfer from '../pages/userTransfer.js'
import HistoryPage from '../pages/HistoryPage.js'


const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const usertransfer = new userTransfer()
const historyPage = new HistoryPage()

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

  describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    usertransfer.sendMoneySucess() 
    
  });
});

  describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    usertransfer.sendExceedAmount()
    // Foi identificado, que mesmo sem valor na conta bancária do usuário, o valor é enviado e recebido na conta destino.
    // Teste encontrou um bug. 
  });
});

  describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    historyPage.myHistory()
  });
});

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    historyPage.chekcEmptyHistory()

  });
});



});

