describe('Async Demo of JS', () => {

    it('First Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        element(by.model('first')).sendKeys('55');
        element(by.model('second')).sendKeys('55');
        element(by.id('gobutton')).click();
        browser.sleep(20000).then(function(){
            element(by.binding('latest')).getText().then(function(result){
                console.log(`Sum of two numbers is ${result}`);
                expect('110').toBe(result);
                console.log("Test Ended");
            });
            
        })
        
        
    });
    
});