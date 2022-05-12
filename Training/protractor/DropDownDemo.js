describe('Async Demo of JS', () => {

    function perform(a,b,operation) {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='" + operation + "']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('SUBTRACTION Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       //MODULO,ADDITION,MULTIPLICATION,SUBTRACTION
       perform(230,30,'SUBTRACTION')
        
        // element(by.repeater(''));
        element(by.binding('latest')).getText().then(function(result){
            console.log(`SUBTRACTION Result :  ${result}`);
        });

        expect(element(by.binding('latest')).getText()).toBe('200')
      
    });
    it('Division Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       //MODULO,ADDITION,MULTIPLICATION,SUBTRACTION
        perform(5,5,'DIVISION')
              
        // element(by.repeater(''));
        element(by.binding('latest')).getText().then(function(result){
            console.log(`Division Result :  ${result}`);
        });

        expect(element(by.binding('latest')).getText()).toBe('1')
      
    });
    it('MODULO Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       //MODULO,ADDITION,MULTIPLICATION,SUBTRACTION
        perform(15,15,'MODULO')
                
        // element(by.repeater(''));
        element(by.binding('latest')).getText().then(function(result){
            console.log(`Module Result :  ${result}`);
        });

        expect(element(by.binding('latest')).getText()).toBe('0')
      
    });
    it('MULTIPLICATION Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       //MODULO,ADDITION,MULTIPLICATION,SUBTRACTION
        perform(25,25,'MULTIPLICATION')
        
        // element(by.repeater(''));
        element(by.binding('latest')).getText().then(function(result){
            console.log(`MULTIPLICATION Result :  ${result}`);
        });

        expect(element(by.binding('latest')).getText()).toBe('625')
      
    });
});