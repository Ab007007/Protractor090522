describe('Async Demo of JS', () => {

    it('First Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        element(by.model('first')).sendKeys('55');
        element(by.model('second')).sendKeys('55');
        element(by.id('gobutton')).click();
        

        element(by.model('first')).sendKeys('15');
        element(by.model('second')).sendKeys('25');
        element(by.id('gobutton')).click();
        

        element(by.model('first')).sendKeys('53');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();
        
        
        browser.sleep(20000).then(function(){
            console.log("END");    
        })
        
        // element(by.repeater(''));
        element.all(by.repeater('result in memory')).count().then(function(rowCount){
            console.log(`Total number of rows ${rowCount}`);
        });

        expect(element.all(by.repeater('result in memory')).count()).toBe(3)
        console.log("Validation Complete");
    });
    
});