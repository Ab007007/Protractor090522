describe('NON ANGULAR APPLICATIONS ', () => {

    it('Simply form filling application', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://formy-project.herokuapp.com/form');

        element(by.id('first-name')).sendKeys("FirstName");

        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        
    });
 
});