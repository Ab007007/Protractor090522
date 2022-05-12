describe('Async Demo of JS', () => {

    function add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('First Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        add(5,5)
        add(15,15)
        add(25,25)
        
        // element(by.repeater(''));
        element.all(by.repeater('result in memory')).count().then(function(rowCount){
            console.log(`Total number of rows ${rowCount}`);
        });

        expect(element.all(by.repeater('result in memory')).count()).toBe(1)
      
    });
    it('Second Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        add(25,5)
        add(215,15)
        add(225,25)
        
        // element(by.repeater(''));
        element.all(by.repeater('result in memory')).count().then(function(rowCount){
            console.log(`Total number of rows ${rowCount}`);
        });

        expect(element.all(by.repeater('result in memory')).count()).toBe(3)
      
    });
    it('Third Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        add(5,5)
        add(15,125)
        add(225,25)
        
        // element(by.repeater(''));
        element.all(by.repeater('result in memory')).count().then(function(rowCount){
            console.log(`Total number of rows ${rowCount}`);
        });

        expect(element.all(by.repeater('result in memory')).count()).toBe(2)
      
    });
    it('Fourt Test', () => {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        add(5,5)
        add(15,215)
        add(25,225)
        
        // element(by.repeater(''));
        element.all(by.repeater('result in memory')).count().then(function(rowCount){
            console.log(`Total number of rows ${rowCount}`);
        });

        expect(element.all(by.repeater('result in memory')).count()).toBe(3)
      
    });
});