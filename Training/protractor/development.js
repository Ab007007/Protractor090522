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

        expect(element.all(by.repeater('result in memory')).count()).toBe(3)
        console.log("Validation Complete");

        /// Chain locator
        element.all(by.repeater('result in memory')).each(function(row){
            row.element(by.binding('result.value')).getText().then(function(sum){
                console.log(`Sum : ${sum}`);
            })
        })

        // Iterate each row and print the date
        element.all(by.repeater('result in memory')).each(function(row){
            row.element(by.binding('result.timestam')).getText().then(function(date){
                console.log(`Date : ${date}`);
            })
        })

        //Printing the first row date 
        element.all(by.repeater('result in memory')).
            get(0).element(by.binding('result.timestam')).getText().then(function(date){
            console.log(`First Row Date  : ${date}`);
        })

         //Printing the Last row date 
         element.all(by.repeater('result in memory')).
         last().element(by.binding('result.timestam')).getText().then(function(date){
         console.log(`Last Row Date  : ${date}`);
        })

        //print the entire table
        element.all(by.repeater('result in memory')).getText().then(function(table){
            console.log("Table : " +  table);
        })


        //print the entire table - Customized
        element.all(by.repeater('result in memory')).getText().then(function(table){
            for (const row of table) {
                console.log(row);
            }
        })
    });
    
});