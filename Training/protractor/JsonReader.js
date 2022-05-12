var Objects = require('./data/Object.json')
describe('NON ANGULAR APPLICATIONS ', () => {


    it('Read data from json ', () => {
        browser.waitForAngularEnabled(false);
        browser.get(Objects.url);
        browser.driver.manage().window().maximize();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement())

        browser.actions().dragAndDrop(element(by.id(Objects.locators.jqueryPage.sourceEle)), element(by.id(Objects.locators.jqueryPage.destinationEle))).perform().then(function(){
            element(by.id(Objects.locators.jqueryPage.sourceEle)).getText().then(function(dtext){
                console.log(`Draggable Text : ${dtext}`);
            })
            element(by.id(Objects.locators.jqueryPage.destinationEle)).getText().then(function(dtext){
                console.log(`Droppable Text : ${dtext}`);
            })
        });
       
    });

});