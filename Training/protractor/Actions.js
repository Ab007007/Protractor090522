describe('NON ANGULAR APPLICATIONS ', () => {

    it('Simply form filling application', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');
        browser.driver.manage().window().maximize();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))), 2000);
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();

        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
    });

    it('Drag and Drop ', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://jqueryui.com/droppable/');
        browser.driver.manage().window().maximize();
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
       
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform();
       
    });
 
 
});