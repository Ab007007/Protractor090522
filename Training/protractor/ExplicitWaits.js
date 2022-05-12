describe('NON ANGULAR APPLICATIONS ', () => {

    it('Simply form filling application', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.flipkart.com/');
        browser.sleep(10000).then(function() {
            console.log('wait');
        })
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))), 5000);
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
    });
 
});