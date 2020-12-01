const drupalBasePages = [
    'https://innovation.org',
    'https://innovation.org/about-us',
    'https://innovation.org/combatting-childhood-cancer',
    'https://innovation.org/diseases',
    'https://innovation.org/how-cancer-research-helping-develop-covid-19-treatments',
    'https://innovation.org/latest-articles',
    'https://innovation.org/sign-up',
    'https://innovation.org/study-shows-lung-cancer-survival-rates-improving-thanks-new-treatments',
    'https://innovation.org/tackling-worlds-number-one-killer',
    'https://innovation.org/takeaction',
    'https://innovation.org/terms-of-use',
    'https://innovation.org/votersforcures',
    'https://innovation.org/votersforcures-h-r-3-is-the-wrong-approach-for-patients-like-me',
    'https://innovation.org/when-supporting-medical-innovation-becomes-personal-for-patients',
];

const sitecoreBasePages = [
    'https://qa-innovation.mrmdigital.com',
    'https://qa-innovation.mrmdigital.com/about-us',
    'https://qa-innovation.mrmdigital.com/combatting-childhood-cancer',
    'https://qa-innovation.mrmdigital.com/diseases',
    'https://qa-innovation.mrmdigital.com/how-cancer-research-helping-develop-covid-19-treatments',
    'https://qa-innovation.mrmdigital.com/latest-articles',
    'https://qa-innovation.mrmdigital.com/sign-up',
    'https://qa-innovation.mrmdigital.com/study-shows-lung-cancer-survival-rates-improving-thanks-new-treatments',
    'https://qa-innovation.mrmdigital.com/tackling-worlds-number-one-killer',
    'https://qa-innovation.mrmdigital.com/takeaction',
    'https://qa-innovation.mrmdigital.com/terms-of-use',
    'https://qa-innovation.mrmdigital.com/votersforcures',
    'https://qa-innovation.mrmdigital.com/votersforcures-h-r-3-is-the-wrong-approach-for-patients-like-me',
    'https://qa-innovation.mrmdigital.com/when-supporting-medical-innovation-becomes-personal-for-patients',
];

const {
    Builder,
    Capabilities,
    By,
    Key,
    until,
    Window,
    Actions
} = require('selenium-webdriver');

const driver = new Builder().forBrowser('firefox').build();
const caps = new Capabilities();
const assert = require('assert');
caps.setPageLoadStrategy('normal');

async function navigate() {
    try {
        // await driver.manage().setTimeouts({
        //     implicit: 30000
        // });
        await driver.get(drupalBasePages[0]);
        
        
        let array = new Array; 
        
        await driver.executeScript('window.scrollTo(0, 900)');
        (await driver).sleep(3000);
        let popArticles = await (await driver).findElement(By.xpath('//*[@id="paragraph-23038"]/div/div/div/div/h2'));
       
       

        let headerText = popArticles.getText();
        console.log(headerText);
        
        array.push(headerText);
       
        
        

       


    } catch (error) {
        console.log(error);
    } finally {
        // (await driver).quit();
    }


}
navigate();