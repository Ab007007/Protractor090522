describe('NON ANGULAR APPLICATIONS ', () => {

    it('Simply form filling application', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://formy-project.herokuapp.com/form');

        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        
        browser.driver.manage().window().maximize();
        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        browser.driver.navigate().back()
        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        browser.driver.navigate().forward()
        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        
        browser.sleep(20000).then(function(){
            console.log("URL !!!"  + browser.driver.getCurrentUrl());
        })
        
        element(by.id('first-name')).sendKeys("FirstName");

        browser.sleep(20000).then(function(){
            console.log("Completed!!!");
        })
        
    });
 
});