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
const selectorDr = {
    "componentHeader": "h2.pl-3",
    "nextArrow": "div.row:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3) > i:nth-child(1)",
    "slide1Header": "div.owl-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide1Paragraph": "div.owl-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide1Quote": "div.owl-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide1Button": "div.owl-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
    "slide2Header": "div.owl-item:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide2Paragraph": "div.owl-item:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide2Quote": "div.owl-item:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide2Button": "div.owl-item:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
    "slide3Header": "div.owl-item:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide3Paragraph": "div.owl-item:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide3Quote": "div.owl-item:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide3Button": "div.owl-item:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
}

const selectorSc = {
    "componentHeader": ".cmp-video-carousel > div:nth-child(1) > h2:nth-child(1)",
    "nextArrow": "div.next:nth-child(3) > i:nth-child(1)",
    "slide1Header": "div.slick-current:nth-child(3) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide1Paragraph": "div.slick-current:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide1Quote": "div.slick-current:nth-child(3) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide1Button": "div.slick-current:nth-child(3) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
    "slide2Header": "div.slick-current:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide2Paragraph": "div.slick-current:nth-child(4) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide2Quote": "div.slick-current:nth-child(4) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide2Button": "div.slick-current:nth-child(4) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
    "slide3Header": "div.slick-current:nth-child(5) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)",
    "slide3Paragraph": "div.slick-current:nth-child(5) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)",
    "slide3Quote": "div.slick-current:nth-child(5) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)",
    "slide3Button": "div.slick-current:nth-child(5) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)",
}


//TARGET ARRAYS
let arrayDr = [];
let arraySc = [];


/*DRUPAL*/
async function mainDr() {

    try {

        await driver.get(drupalBasePages[0]);

        (await driver).executeScript('window.scrollTo(0, 2000)');

        let componentHeader = await (await driver.wait(until.elementLocated(By.css(selectorDr.componentHeader)), 5000)).getText();
        arrayDr.push(componentHeader);

        let slide1Header = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide1Header)), 5000)).getText();
        arrayDr.push(slide1Header);

        let slide1Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide1Paragraph)), 5000)).getText();
        arrayDr.push(slide1Paragraph);

        let slide1Quote = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide1Quote)), 5000)).getText();
        arrayDr.push(slide1Quote);

        let slide1Button = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide1Button)), 5000)).getText();
        arrayDr.push(slide1Button);

        await (await driver).findElement(By.css(selectorDr.nextArrow)).click();

        let slide2Header = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide2Header)), 5000)).getText();
        arrayDr.push(slide2Header);

        let slide2Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide2Paragraph)), 5000)).getText();
        arrayDr.push(slide2Paragraph);

        let slide2Quote = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide2Quote)), 5000)).getText();
        arrayDr.push(slide2Quote);

        let slide2Button = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide2Button)), 5000)).getText();
        arrayDr.push(slide2Button);

        await (await driver).findElement(By.css(selectorDr.nextArrow)).click();

        let slide3Header = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide3Header)), 5000)).getText();
        arrayDr.push(slide3Header);

        let slide3Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide3Paragraph)), 5000)).getText();
        arrayDr.push(slide3Paragraph);

        let slide3Quote = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide3Quote)), 5000)).getText();
        arrayDr.push(slide3Quote);

        let slide3Button = await (await driver.wait(until.elementLocated(By.css(selectorDr.slide3Button)), 5000)).getText();
        arrayDr.push(slide3Button);

        await (await driver).findElement(By.css(selectorDr.nextArrow)).click();

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
    } finally {
        await (await driver).quit();

    }
}

/*SITECORE*/
async function mainSc() {

    try {
        await driver.get(sitecoreBasePages[0]);

        (await driver).executeScript('window.scrollTo(0, 2000)');

        let componentHeader = await (await driver.wait(until.elementLocated(By.css(selectorSc.componentHeader)), 5000)).getText();
        arraySc.push(componentHeader);

        let slide1Header = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide1Header)), 5000)).getText();
        arraySc.push(slide1Header);

        let slide1Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide1Paragraph)), 5000)).getText();
        arraySc.push(slide1Paragraph);

        let slide1Quote = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide1Quote)), 5000)).getText();
        arraySc.push(slide1Quote);

        let slide1Button = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide1Button)), 5000)).getText();
        arraySc.push(slide1Button);

        await (await driver).findElement(By.css(selectorSc.nextArrow)).click();

        let slide2Header = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide2Header)), 5000)).getText();
        arraySc.push(slide2Header);

        let slide2Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide2Paragraph)), 5000)).getText();
        arraySc.push(slide2Paragraph);

        let slide2Quote = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide2Quote)), 5000)).getText();
        arraySc.push(slide2Quote);

        let slide2Button = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide2Button)), 5000)).getText();
        arraySc.push(slide2Button);

        await (await driver).findElement(By.css(selectorSc.nextArrow)).click();

        let slide3Header = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide3Header)), 5000)).getText();
        arraySc.push(slide3Header);

        let slide3Paragraph = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide3Paragraph)), 5000)).getText();
        arraySc.push(slide3Paragraph);

        let slide3Quote = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide3Quote)), 5000)).getText();
        arraySc.push(slide3Quote);

        let slide3Button = await (await driver.wait(until.elementLocated(By.css(selectorSc.slide3Button)), 5000)).getText();
        arraySc.push(slide3Button);

        await (await driver).findElement(By.css(selectorSc.nextArrow)).click();



        console.log(arraySc)

    } catch (error) {
        console.log(error);
    } finally {
        mainDr();
    }
}

mainSc();
// mainDr();