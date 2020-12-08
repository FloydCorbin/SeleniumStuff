const drupalBasePages = [
    'https://innovation.org',
    'https://innovation.org/about-us',
    'https://innovation.org/combatting-childhood-cancer',
    'https://innovation.org/diseases',
    'https://innovation.org/latest-articles',
    'https://innovation.org/sign-up',
    'https://innovation.org/study-shows-lung-cancer-survival-rates-improving-thanks-new-treatments',
    'https://innovation.org/tackling-worlds-number-one-killer',
    'https://innovation.org/how-cancer-research-helping-develop-covid-19-treatments',
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
]

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
//  tiles from left to right, top to bottom
const selectorDr = {
    "tileOne": "div.col-sm-12:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileOneH2": "div.col-sm-12:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileOneP": "div.col-sm-12:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > p:nth-child(1)",
    "tileOneA": "div.col-sm-12:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)",
    "tileTwo": "div.col-sm-12:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileTwoH2": "div.col-sm-12:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileTwoP": "div.col-sm-12:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > p:nth-child(1)",
    "tileTwoA": "div.col-sm-12:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)",
    "tileThree": "div.col-sm-12:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileThreeH2": "div.col-sm-12:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileThreeP": "div.col-sm-12:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > p:nth-child(1)",
    "tileThreeA": "div.col-sm-12:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)",
    "tileFour": "div.col-sm-12:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileFourH2": "div.col-sm-12:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileFourP": "div.col-sm-12:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > p:nth-child(1)",
    "tileFourA": "div.col-sm-12:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)",
    "tileFive": "div.col-sm-12:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileFiveH2": "div.col-sm-12:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileFiveP": "div.col-sm-12:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > p:nth-child(1)",
    "tileFiveA": "div.col-sm-12:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(4)",
}

const selectorSc = {
    "tileOne": "div.col-md-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileOneH2": "div.col-md-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileOneP": "div.col-md-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)",
    "tileOneA": "div.col-md-6:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)",
    "tileTwo": "div.col-md-6:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileTwoH2": "div.col-md-6:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileTwoP": "div.col-md-6:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)",
    "tileTwoA": "div.col-md-6:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)",
    "tileThree": "div.col-md-6:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileThreeH2": "div.col-md-6:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileThreeP": "div.col-md-6:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)",
    "tileThreeA": "div.col-md-6:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)",
    "tileFour": "div.col-md-6:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileFourH2": "div.col-md-6:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileFourP": "div.col-md-6:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)",
    "tileFourA": "div.col-md-6:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)",
    "tileFive": "div.col-md-6:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)",
    "tileFiveH2": "div.col-md-6:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)",
    "tileFiveP": "div.col-md-6:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)",
    "tileFiveA": "div.col-md-6:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)",
}


//TARGET ARRAYS
let arrayDr = [];
let arraySc = [];


/*DRUPAL*/

async function mainDr() {

    try {

        await driver.get(drupalBasePages[1]);

        // Store 'Gmail' anchor web element
        let gmailLink = driver.findElement(By.css(selectorDr));
        const actions = driver.actions({
            async: true
        });
        // Performs mouse move action onto the element
        await actions.move({
            origin: gmailLink
        }).perform();


        console.log(arrayDr);

        if (arraySc.toString === arrayDr.toString) {
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
        await (await driver).quit();

    }
}

/*SITECORE*/
async function mainSc() {

    try {
        await driver.get(sitecoreBasePages[1]);





        console.log(arraySc)

    } catch (error) {
        console.log(error);
    } finally {
        mainDr();
    }
}

mainSc();