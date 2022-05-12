describe('NON ANGULAR APPLICATIONS ', () => {
    it('Simply form filling application', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://formy-project.herokuapp.com/switch-window');
        browser.driver.manage().window().maximize();
       
        element(by.id('alert-button')).click();

        browser.switchTo().alert().getText().then(function(textonalert){
                console.log(`Text on alert :  ${textonalert}`);
        })
    })
    it('Drag and Drop ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        browser.driver.manage().window().maximize();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement())
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform().then(function(){
            element(by.id('draggable')).getText().then(function(dtext){
                console.log(`Draggable Text : ${dtext}`);
            })
            element(by.id('droppable')).getText().then(function(dtext){
                console.log(`Droppable Text : ${dtext}`);
            })
        });
       
    });
    it('Multi window Handling', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
        browser.driver.manage().window().maximize();
        element(by.linkText('Contact Us')).click();
        
        
        browser.getAllWindowHandles().then(function(windowIds){

            console.log(`Parent window :  ${windowIds[0]} and Child Window id : ${windowIds[1]}`);
            browser.switchTo().window(windowIds[1])
            element.all(by.tagName('a')).each(function(emailID) {
                emailID.getText().then(function(emailText){
                    console.log(`Email : ${emailText}`);
                })
            });
            browser.switchTo().window(windowIds[0])
            element.all(by.tagName('a')).each(function(emailID) {
                emailID.getText().then(function(emailText){
                    console.log(`LINK--------------------- : ${emailText}`);
                })
            });
        })
       

    })



});