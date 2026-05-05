import LoginPage from '../pages/loginPage.js'
import database from '../../../data/database-seed.json'
import userTransfer from '../pages/userTransfer.js'


const loginPage = new LoginPage()
const usertransfer = new userTransfer()

  describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    usertransfer.sendMoneySucess() 
    
  });
});

  describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente - Bug encontrado, enviando sem saldo', () => {
    // Implemente os passos do caso de teste aqui
    loginPage.accessLoginPage()
    loginPage.loginWithUser(database.users[0].username)
    usertransfer.sendExceedAmount()
    // Foi identificado, que mesmo sem valor na conta bancária do usuário, o valor é enviado e recebido na conta destino.
    // Teste encontrou um bug. 
  });
});

