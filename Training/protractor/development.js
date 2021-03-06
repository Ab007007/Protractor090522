var Objects = require("./data/Object.json")
var using = require('jasmine-data-provider');

describe('Async Demo of JS', () => {

    function perform(a,b,operation) {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='" + operation + "']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    function testdata() {
        return [
            {a:120, b: 11},
            {a:120, b: 131}
        ]
    }

    beforeEach(function() {
        browser.get(Objects.angularUrl)
        browser.driver.manage().window().maximize();
        console.log("Before Each " + Objects.angularUrl);
    })
    using(testdata,function(data){
        it('Mathemetical Operation Test', () => {
           perform(data.a, data.b,'SUBTRACTION')
           // element(by.repeater(''));
           element(by.binding('latest')).getText().then(function(result){
                console.log(`SUBTRACTION Result :  ${result}`);
            });
        });
    })

    it('Mathemetical Operation Test', () => {
        perform(11, 22,'ADDITION')
        // element(by.repeater(''));
        element(by.binding('latest')).getText().then(function(result){
             console.log(`SUBTRACTION Result :  ${result}`);
         });
     });
});