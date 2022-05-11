describe('Async Demo of JS', () => {

    it('First Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
        console.log('Wait for some time');
        browser.sleep(10000).then(function(){
            console.log('Wait ended..');
        });
        
        
    });
    
});