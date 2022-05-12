let homepage = function() {

    let fn = element(by.model('first'));
    let sn = element(by.model('second'))
    let go = element(by.id('gobutton'))

    this.enterFN = function(firstNum) {
        fn.sendKeys(firstNum)
    }

    this.enterSN = function(secNum) {
        sn.sendKeys(secNum)
    }

    this.Go = function() {
        go.click()
    }

    this.verifyResults = function (result) {
            element(by.binding('latest')).getText().then(function(result){
            console.log(`Sum of two numbers is ${result}`);
            })
    }
}

module.exports = new homepage()