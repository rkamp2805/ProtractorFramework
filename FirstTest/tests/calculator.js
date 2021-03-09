
let homepage = require('../pages/homepage');
describe('demo calculator', function(){

    it('addition test', function() {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(1000);    
        //element(by.model('first')).sendKeys('3');
        //element(by.model('second')).sendKeys('11');
        //element(by.css('[ng-click="doAddition()"]')).click();
        //let result = element(by.cssContainingText('.ng-binding','14'));
        //expect(result.getText()).toEqual('14');
        //browser.sleep(2000);

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('6');
        homepage.enterSecondNumber('5');
        homepage.clickGo();
        homepage.verifyResult('11');
        browser.sleep(2000);

    });



   
});