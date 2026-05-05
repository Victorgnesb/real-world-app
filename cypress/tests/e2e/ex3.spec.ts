import LoginPage from '../pages/loginPage.js'
import database from '../../../data/database-seed.json'
import HistoryPage from '../pages/HistoryPage.js'


const loginPage = new LoginPage()
const historyPage = new HistoryPage()

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




