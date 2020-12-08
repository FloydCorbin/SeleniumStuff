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
]

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
    "componentHeader": ".explore-topics-home > div:nth-child(1) > h2:nth-child(1)",
    "column1_row1": "div.tag-secondary:nth-child(1)",
    "column1_row2": "div.tag-secondary:nth-child(4)",
    "column1_row3": "div.tag-secondary:nth-child(7)",
    "column1_row4": "div.tag-secondary:nth-child(10)",
    "column2_row1": "div.tag-secondary:nth-child(2)",
    "column2_row2": "div.tag-secondary:nth-child(5)",
    "column2_row3": "div.tag-secondary:nth-child(8)",
    "column2_row4": "div.tag-secondary:nth-child(11)",
    "column3_row1": "div.tag-secondary:nth-child(3)",
    "column3_row2": "div.tag-secondary:nth-child(6)",
    "column3_row3": "div.tag-secondary:nth-child(9)",
    "column3_row4": "div.tag-secondary:nth-child(12)",
    "tag": ".field--name-field-featured-taxonomy-term",
}

const selectorSc = {
    "componentHeader": ".explore-title",
    "column1_row1": "div.field-title:nth-child(1)",
    "column1_row2": "div.field-title:nth-child(4)",
    "column1_row3": "div.field-title:nth-child(7)",
    "column1_row4": "div.field-title:nth-child(10)",
    "column2_row1": "div.field-title:nth-child(2)",
    "column2_row2": "div.field-title:nth-child(5)",
    "column2_row3": "div.field-title:nth-child(8)",
    "column2_row4": "div.field-title:nth-child(11)",
    "column3_row1": "div.field-title:nth-child(3)",
    "column3_row2": "div.field-title:nth-child(6)",
    "column3_row3": "div.field-title:nth-child(9)",
    "column3_row4": "div.field-title:nth-child(12)",
    "tag": ".explore-card > a:nth-child(2)",
}

//TARGET ARRAYS
let arrayDr = [];
let arraySc = [];




/*DRUPAL*/

async function mainDr() {

    try {

        await driver.get(drupalBasePages[0]);

        await driver.executeScript('window.scrollTo(0, 3900)');



        let componentHeader = await (await driver.wait(until.elementLocated(By.css(selectorDr.componentHeader)), 5000)).getText();
        arrayDr.push(componentHeader);

        let column1_row1 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column1_row1)), 5000)).getText();
        arrayDr.push(column1_row1);


        let column1_row2 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column1_row2)), 5000)).getText();
        arrayDr.push(column1_row2);

        let column1_row3 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column1_row3)), 5000)).getText();
        arrayDr.push(column1_row3);

        let column1_row4 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column1_row4)), 5000)).getText();
        arrayDr.push(column1_row4);

        let column2_row1 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column2_row1)), 5000)).getText();
        arrayDr.push(column2_row1);

        let column2_row2 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column2_row2)), 5000)).getText();
        arrayDr.push(column2_row2);

        let column2_row3 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column2_row3)), 5000)).getText();
        arrayDr.push(column2_row3);

        let column2_row4 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column2_row4)), 5000)).getText();
        arrayDr.push(column2_row4);

        let column3_row1 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column3_row1)), 5000)).getText();
        arrayDr.push(column3_row1);

        let column3_row2 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column3_row2)), 5000)).getText();
        arrayDr.push(column3_row2);

        let column3_row3 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column3_row3)), 5000)).getText();
        arrayDr.push(column3_row3);

        let column3_row4 = await (await driver.wait(until.elementLocated(By.css(selectorDr.column3_row4)), 5000)).getText();
        arrayDr.push(column3_row4);

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

        // if (arraySc.toString === arrayDr.toString) {

        //     for (let i = 0; i < selectorSc.length; i++) {
        //         if (arrayDr[i] === arraySc[i]) {
        //             console.log("CONTENT MATCH (˵ ͡° ͜ʖ ͡°˵)");
        //             console.log(arrayDr[i]);
        //             console.log(arraySc[i]);
        //         } else {
        //             console.log("CONTEXT DOESN\'T MATCH (︶︹︶)")
        //         }

        //     }
        // } else {
        //     console.log('The text doesn\'t match');
        // }

    } catch (error) {
        console.log(error);
    } finally {
        await (await driver).quit();

    }
}



/*SITECORE*/



async function mainSc() {

    try {

        await driver.get(sitecoreBasePages[0]);

        await driver.executeScript('window.scrollTo(0, 3900)');

        let componentHeader = await (await driver.wait(until.elementLocated(By.css(selectorSc.componentHeader)), 5000)).getText();
        arraySc.push(componentHeader);

        let column1_row1 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column1_row1)), 5000)).getText();
        arraySc.push(column1_row1);

        let column1_row2 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column1_row2)), 5000)).getText();
        arraySc.push(column1_row2);

        let column1_row3 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column1_row3)), 5000)).getText();
        arraySc.push(column1_row3);

        let column1_row4 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column1_row4)), 5000)).getText();
        arraySc.push(column1_row4);

        let column2_row1 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column2_row1)), 5000)).getText();
        arraySc.push(column2_row1);

        let column2_row2 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column2_row2)), 5000)).getText();
        arraySc.push(column2_row2);

        let column2_row3 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column2_row3)), 5000)).getText();
        arraySc.push(column2_row3);

        let column2_row4 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column2_row4)), 5000)).getText();
        arraySc.push(column2_row4);

        let column3_row1 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column3_row1)), 5000)).getText();
        arraySc.push(column3_row1);

        let column3_row2 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column3_row2)), 5000)).getText();
        arraySc.push(column3_row2);

        let column3_row3 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column3_row3)), 5000)).getText();
        arraySc.push(column3_row3);

        let column3_row4 = await (await driver.wait(until.elementLocated(By.css(selectorSc.column3_row4)), 5000)).getText();
        arraySc.push(column3_row4);

        console.log(arraySc)

    } catch (error) {
        console.log(error);
    } finally {
        mainDr();
    }
}

mainSc();

