describe('Async Demo of JS', () => {

    it('First Test', () => {
        browser.get('https://juliemr.github.io/protractor-demo/')
        console.log('Wait for some time');
        browser.sleep(10000);
        console.log('Wait ended..');
        
    });
    
});