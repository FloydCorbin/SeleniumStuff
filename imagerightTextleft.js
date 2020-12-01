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
    until
} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
const caps = new Capabilities();
caps.setPageLoadStrategy('eager');

// SELECTORS (CSS)
const selectorDr = {
    "header1": "#paragraph-23038 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)",
    "paragraph1": "#paragraph-23038 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3)",
    "header2": "#paragraph-20146 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)",
    "paragraph2": "#paragraph-20146 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3)",
}

const selectorSc = {
    "header1": "#content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)",
    "paragraph1": "#content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(3)",
    "header2": "div.promo:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)",
    "paragraph2": "div.promo:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
}

//TARGET ARRAYS
let arrayDr = [];
let arraySc = [];


/*DRUPAL*/
async function mainDr(){

    try {
        
        await driver.get(drupalBasePages[0]);
        
        let header1 = await (await driver.wait(until.elementLocated(By.css(selectorDr.header1)), 5000)).getText();
        arrayDr.push(header1);

        let paragraph1 = await (await driver.wait(until.elementLocated(By.css(selectorDr.paragraph1)), 5000)).getText();
        arrayDr.push(paragraph1);

        (await driver).executeScript('window.scrollTo(0, 1800)');

        let header2 = await (await driver.wait(until.elementLocated(By.css(selectorDr.header2)), 5000)).getText();
        arrayDr.push(header2);

        let paragraph2 = await (await driver.wait(until.elementLocated(By.css(selectorDr.paragraph2)), 5000)).getText();
        arrayDr.push(paragraph2);

        if (arraySc.toString === arrayDr.toString)  {
            console.log('The arrays match in length')
            for (let i = 0; i < arraySc.length; i++) {
                console.log(arrayDr[i]);
                console.log(arraySc[i]);  
            };
        } else {
            console.log('The text doesn\'t match');
        }
        
    } catch (error) {
        console.log(error);
    } finally{
        await (await driver).quit();

    }
}

/*SITECORE*/
async function mainSc(){

    try {
        
        await driver.get(sitecoreBasePages[0]);
        
        let header1 = await (await driver.wait(until.elementLocated(By.css(selectorSc.header1)), 5000)).getText();
        arraySc.push(header1);

        let paragraph1 = await (await driver.wait(until.elementLocated(By.css(selectorSc.paragraph1)), 5000)).getText();
        arraySc.push(paragraph1);

        (await driver).executeScript('window.scrollTo(0, 1800)');

        let header2 = await (await driver.wait(until.elementLocated(By.css(selectorSc.header2)), 5000)).getText();
        arraySc.push(header2);

        let paragraph2 = await (await driver.wait(until.elementLocated(By.css(selectorSc.paragraph2)), 5000)).getText();
        arraySc.push(paragraph2);

        console.log(arraySc)  
        
    } catch (error) {
        console.log(error);
    } finally{
        mainDr();


    }
}

mainSc();

