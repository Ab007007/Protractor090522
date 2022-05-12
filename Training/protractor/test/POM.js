let homepage = require('../page/calculatorHomePage')
let Objects = require('../data/Object.json')
describe('POM TEST', () => {
    it('First POM', () => {
        browser.get(Objects.angularUrl);
        homepage.enterFN(20);
        homepage.enterSN(30);
        homepage.Go();
        homepage.verifyResults()


    });
});