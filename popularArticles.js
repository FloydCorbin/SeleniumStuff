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
const { elementIsVisible } = require('selenium-webdriver/lib/until');
caps.setPageLoadStrategy('normal');

const selectorDr = {
    "header": ".mb-45",
    "firstArticle": "div.col-lg-7:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "secondArticle": "div.img-small-size:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "thirdArticle": "div.img-small-size:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "fourthArticle": "div.col-lg-5:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "fifthArticle": "div.col-lg-7:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "sixthArticle": "div.img-middle-size:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "seventhArticle": "div.img-middle-size:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
}

const selectorSc = {
    "header": "h2.text-left.mb-45",
    "firstArticle": "div.col-lg-7:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "secondArticle": "div.img-small-size:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "thirdArticle": "div.img-small-size:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "fourthArticle": "div.col-lg-5:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "fifthArticle": "div.col-lg-7:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "sixthArticle": "div.img-middle-size:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
    "seventhArticle": "div.img-middle-size:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(3)",
}
let arraySc = new Array; 
let arrayDr = new Array; 

async function mainDr() {
    try {
        await driver.get(drupalBasePages[0]);
        
        
        
        
        await driver.executeScript('window.scrollTo(0, 900)');
                    
        let headerText = await (await driver.wait(until.elementLocated(By.css(selectorDr.header)), 5000)).getText();
        arrayDr.push(headerText);
       
        let firstArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.firstArticle)), 5000)).getText();
        arrayDr.push(firstArticle);

        let secondArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.secondArticle)), 5000)).getText();
        arrayDr.push(secondArticle);

        let thirdArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.thirdArticle)), 5000)).getText();
        arrayDr.push(thirdArticle);
        
        let fourthArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.fourthArticle)), 5000)).getText();
        arrayDr.push(fourthArticle);

        let fifthArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.fifthArticle)), 5000)).getText();
        arrayDr.push(fifthArticle);

        let sixthArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.sixthArticle)), 5000)).getText();
        arrayDr.push(sixthArticle);

        let seventhArticle = await (await driver.wait(until.elementLocated(By.css(selectorDr.seventhArticle)), 5000)).getText();
        arrayDr.push(seventhArticle);

        // console.log(arrayDr);
        
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
    } finally {
        (await driver).quit();
    }
}

async function mainSc() {
    try {
        await driver.get(sitecoreBasePages[0]);
        
        
        
        
        await driver.executeScript('window.scrollTo(0, 900)');
                    
        let headerText = await (await driver.wait(until.elementLocated(By.css(selectorSc.header)), 5000)).getText();
        arraySc.push(headerText);
       
        let firstArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.firstArticle)), 5000)).getText();
        arraySc.push(firstArticle);

        let secondArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.secondArticle)), 5000)).getText();
        arraySc.push(secondArticle);

        let thirdArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.thirdArticle)), 5000)).getText();
        arraySc.push(thirdArticle);
        
        let fourthArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.fourthArticle)), 5000)).getText();
        arraySc.push(fourthArticle);

        let fifthArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.fifthArticle)), 5000)).getText();
        arraySc.push(fifthArticle);

        let sixthArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.sixthArticle)), 5000)).getText();
        arraySc.push(sixthArticle);

        let seventhArticle = await (await driver.wait(until.elementLocated(By.css(selectorSc.seventhArticle)), 5000)).getText();
        arraySc.push(seventhArticle);

        // console.log(arraySc);

    } catch (error) {
        console.log(error);
    } finally {
        // (await driver).quit();
        mainDr();
    }
}

mainSc();