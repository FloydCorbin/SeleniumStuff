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
    'https://staging-innovation.mrmdigital.com',
    'https://staging-innovation.mrmdigital.com/about-us',
    'https://staging-innovation.mrmdigital.com/combatting-childhood-cancer',
    'https://staging-innovation.mrmdigital.com/diseases',
    'https://staging-innovation.mrmdigital.com/how-cancer-research-helping-develop-covid-19-treatments',
    'https://staging-innovation.mrmdigital.com/latest-articles',
    'https://staging-innovation.mrmdigital.com/sign-up',
    'https://staging-innovation.mrmdigital.com/study-shows-lung-cancer-survival-rates-improving-thanks-new-treatments',
    'https://staging-innovation.mrmdigital.com/tackling-worlds-number-one-killer',
    'https://staging-innovation.mrmdigital.com/takeaction',
    'https://staging-innovation.mrmdigital.com/terms-of-use',
    'https://staging-innovation.mrmdigital.com/votersforcures',
    'https://staging-innovation.mrmdigital.com/votersforcures-h-r-3-is-the-wrong-approach-for-patients-like-me',
    'https://staging-innovation.mrmdigital.com/when-supporting-medical-innovation-becomes-personal-for-patients',
];

const {
    Builder,
    Capabilities,
    By,
    Key,
    until
} = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();
const caps = new Capabilities();
caps.setPageLoadStrategy('eager');

// SELECTORS (CSS)
const selectorDr = {
    "sectionTitle_a": "#taxonomy-term-6 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "descriptionText_a": "#taxonomy-term-6 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldArticleTitle1_a": "#taxonomy-term-126 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription1_a": "#taxonomy-term-126 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta1_a": "#paragraph-18896 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle2_a": "#taxonomy-term-101 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription2_a": "#taxonomy-term-101 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta2_a": "#paragraph-18896 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle3_a": "#taxonomy-term-41 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription3_a": "#taxonomy-term-41 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta3_a": "#paragraph-18896 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a:nth-child(1)",
    "sectionButton_a": "#paragraph-18896 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",

    "sectionTitle_b": "#taxonomy-term-206 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "descriptionText_b": "#taxonomy-term-206 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldArticleTitle1_b": "#taxonomy-term-211 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription1_b": "#taxonomy-term-211 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta1_b": "#paragraph-18786 > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle2_b": "#taxonomy-term-286 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription2_b": "#taxonomy-term-286 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta2_b": "#paragraph-18786 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle3_b": "#taxonomy-term-221 > h2:nth-child(1) > a:nth-child(1) > div:nth-child(1)",
    "fieldDescription3_b": "#taxonomy-term-221 > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)",
    "fieldCta3_b": "#paragraph-18786 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)",
    "sectionButton_b": "#paragraph-18786 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
}

const selectorSc = {
    "sectionTitle_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)",
    "descriptionText_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    "fieldArticleTitle1_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription1_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta1_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle2_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription2_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta2_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle3_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription3_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta3_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "sectionButton_a": "div.innovation-featured-topics:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
    
    "sectionTitle_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)",
    "descriptionText_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    "fieldArticleTitle1_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription1_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta1_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle2_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription2_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta2_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "fieldArticleTitle3_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(1) > div:nth-child(2)",
    "fieldDescription3_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > p:nth-child(1)",
    "fieldCta3_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1)",
    "sectionButton_b": "div.innovation-featured-topics:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)",
}


//TARGET ARRAYS
let arrayDr = [];
let arraySc = [];


/*DRUPAL*/
async function mainDr(){

    try {
        
        await driver.get(drupalBasePages[0]);

        await driver.executeScript('window.scrollTo(0, 3100)');

        await driver.sleep(5000);

        let sectionTitle_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.sectionTitle_a)), 5000)).getText();
        arrayDr.push(sectionTitle_a);

        let descriptionText_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.descriptionText_a)), 5000)).getText();
        arrayDr.push(descriptionText_a);

        let fieldArticleTitle1_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle1_a)), 5000)).getText();
        arrayDr.push(fieldArticleTitle1_a);

        let fieldDescription1_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription1_a)), 5000)).getText();
        arrayDr.push(fieldDescription1_a);

        let fieldCta1_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta1_a)), 5000)).getText();
        arrayDr.push(fieldCta1_a);

        let fieldArticleTitle2_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle2_a)), 5000)).getText();
        arrayDr.push(fieldArticleTitle2_a);

        let fieldDescription2_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription2_a)), 5000)).getText();
        arrayDr.push(fieldDescription2_a);

        let fieldCta2_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta2_a)), 5000)).getText();
        arrayDr.push(fieldCta2_a);

        let fieldArticleTitle3_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle3_a)), 5000)).getText();
        arrayDr.push(fieldArticleTitle3_a);

        let fieldDescription3_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription3_a)), 5000)).getText();
        arrayDr.push(fieldDescription3_a);

        let fieldCta3_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta3_a)), 5000)).getText();
        arrayDr.push(fieldCta3_a);

        let sectionButton_a = await (await driver.wait(until.elementLocated(By.css(selectorDr.sectionButton_a)), 5000)).getText();
        arrayDr.push(sectionButton_a);

        await driver.executeScript('window.scrollTo(0, 3500)');

        await driver.sleep(5000);

        let sectionTitle_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.sectionTitle_b)), 5000)).getText();
        arrayDr.push(sectionTitle_b);

        let descriptionText_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.descriptionText_b)), 5000)).getText();
        arrayDr.push(descriptionText_b);

        let fieldArticleTitle1_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle1_b)), 5000)).getText();
        arrayDr.push(fieldArticleTitle1_b);

        let fieldDescription1_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription1_b)), 5000)).getText();
        arrayDr.push(fieldDescription1_b);

        let fieldCta1_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta1_b)), 5000)).getText();
        arrayDr.push(fieldCta1_b);

        let fieldArticleTitle2_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle2_b)), 5000)).getText();
        arrayDr.push(fieldArticleTitle2_b);

        let fieldDescription2_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription2_b)), 5000)).getText();
        arrayDr.push(fieldDescription2_b);

        let fieldCta2_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta2_b)), 5000)).getText();
        arrayDr.push(fieldCta2_b);

        let fieldArticleTitle3_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldArticleTitle3_b)), 5000)).getText();
        arrayDr.push(fieldArticleTitle3_b);

        let fieldDescription3_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldDescription3_b)), 5000)).getText();
        arrayDr.push(fieldDescription3_b);

        let fieldCta3_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.fieldCta3_b)), 5000)).getText();
        arrayDr.push(fieldCta3_b);

        let sectionButton_b = await (await driver.wait(until.elementLocated(By.css(selectorDr.sectionButton_b)), 5000)).getText();
        arrayDr.push(sectionButton_b);

        console.log(arrayDr);

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

        await driver.executeScript('window.scrollTo(0, 2500)');

        await driver.sleep(5000);

        let sectionTitle_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.sectionTitle_a)), 5000)).getText();
        arraySc.push(sectionTitle_a);

        let descriptionText_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.descriptionText_a)), 5000)).getText();
        arraySc.push(descriptionText_a);

        let fieldArticleTitle1_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle1_a)), 5000)).getText();
        arraySc.push(fieldArticleTitle1_a);

        let fieldDescription1_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription1_a)), 5000)).getText();
        arraySc.push(fieldDescription1_a);

        let fieldCta1_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta1_a)), 5000)).getText();
        arraySc.push(fieldCta1_a);

        let fieldArticleTitle2_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle2_a)), 5000)).getText();
        arraySc.push(fieldArticleTitle2_a);

        let fieldDescription2_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription2_a)), 5000)).getText();
        arraySc.push(fieldDescription2_a);

        let fieldCta2_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta2_a)), 5000)).getText();
        arraySc.push(fieldCta2_a);

        let fieldArticleTitle3_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle3_a)), 5000)).getText();
        arraySc.push(fieldArticleTitle3_a);

        let fieldDescription3_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription3_a)), 5000)).getText();
        arraySc.push(fieldDescription3_a);

        let fieldCta3_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta3_a)), 5000)).getText();
        arraySc.push(fieldCta3_a);

        let sectionButton_a = await (await driver.wait(until.elementLocated(By.css(selectorSc.sectionButton_a)), 5000)).getText();
        arraySc.push(sectionButton_a);

        await driver.executeScript('window.scrollTo(0, 3100)');

        await driver.sleep(5000);

        let sectionTitle_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.sectionTitle_b)), 5000)).getText();
        arraySc.push(sectionTitle_b);

        let descriptionText_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.descriptionText_b)), 5000)).getText();
        arraySc.push(descriptionText_b);

        let fieldArticleTitle1_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle1_b)), 5000)).getText();
        arraySc.push(fieldArticleTitle1_b);

        let fieldDescription1_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription1_b)), 5000)).getText();
        arraySc.push(fieldDescription1_b);

        let fieldCta1_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta1_b)), 5000)).getText();
        arraySc.push(fieldCta1_b);

        let fieldArticleTitle2_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle2_b)), 5000)).getText();
        arraySc.push(fieldArticleTitle2_b);

        let fieldDescription2_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription2_b)), 5000)).getText();
        arraySc.push(fieldDescription2_b);

        let fieldCta2_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta2_b)), 5000)).getText();
        arraySc.push(fieldCta2_b);

        let fieldArticleTitle3_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldArticleTitle3_b)), 5000)).getText();
        arraySc.push(fieldArticleTitle3_b);

        let fieldDescription3_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldDescription3_b)), 5000)).getText();
        arraySc.push(fieldDescription3_b);

        let fieldCta3_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.fieldCta3_b)), 5000)).getText();
        arraySc.push(fieldCta3_b);

        let sectionButton_b = await (await driver.wait(until.elementLocated(By.css(selectorSc.sectionButton_b)), 5000)).getText();
        arraySc.push(sectionButton_b);

        console.log(arraySc)  
        
    } catch (error) {
        console.log(error);
    } finally{
        mainDr();
    }
}


mainSc();

