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
        /// Chain locator
        element.all(by.repeater('result in memory')).each(function(row){
            row.element(by.binding('result.value')).getText().then(function(sum){
                console.log(`Date : ${sum}`);
            })
        })

        element.all(by.repeater('result in memory')).each(function(row){
            row.element(by.binding('result.timestam')).getText().then(function(date){
                console.log(`Sum : ${date}`);
            })
        })
    });
    
});