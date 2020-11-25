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


//Drupal Array
let textArrayD = [];

//Sitecore Array
let textArrayS = [];


/*DRUPAL*/
async function mainD(){

    try {
        await driver.manage().setTimeouts( { implicit: 30000 } );
        await driver.get(drupalBasePages[0]);
        
        let waitH2 = await driver.wait(until.elementLocated(By.xpath('//*[@id="paragraph-23038"]/div/div/div/div/h2')));
        let imageLeftH2 = await waitH2.getText();
        textArrayD.push(`Drupral: ${imageLeftH2}`);

        let imageLeftP = await (await (await driver).findElement(By.xpath('//*[@id="paragraph-23038"]/div/div/div/div/p[2]'))).getText();
        textArrayD.push(`Drupal: ${imageLeftP}`);

        console.log(textArrayD)  

        await (await driver).quit();
        return textArrayD;
    } catch (error) {
        console.log(error);
    }
}

/*SITECORE*/
// async function mainS(){

//     try {
//         await driver.manage().setTimeouts( { implicit: 30000 } );
//         await driver.get(sitecoreBasePages[0]);
        
//         let waitH2 = await driver.wait(until.elementLocated(By.xpath('//*[@id="content"]/div[2]/div/div[1]/div/div/div[1]/h2')), 10000);
//         let imageLeftH2 = await waitH2.getText();
//         textArrayS.push(`Sitecore: ${imageLeftH2}`);

//         let imageLeftP = await (await (await driver).findElement(By.xpath('//*[@id="content"]/div[2]/div/div[1]/div/div/div[1]/p[2]'))).getText();
//         textArrayS.push(`Sitecore: ${imageLeftP}`);

//         console.log(textArrayS)  

//         await (await driver).quit();
//         return textArrayS;
//     } catch (error) {
//         console.log(error);
//     }
// }

mainD();
// mainS();

