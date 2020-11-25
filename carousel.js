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

//PSEUDO CODE
/*
For a given component
findElement[n] and getText on Sitecore page
findElement[n] and getText on Drupal page
Compare each element text value
*/

//Homepage [0]

//PAGE VARIABLES
let carouselArrDr = [];
let carouselArrSc = [];

//FUNCTIONS
async function readArray() {
    console.log(carouselArrDr);
}

async function nextSlide() {
    await (await driver).findElement(By.css('#carouselHero > div.container.arrow > div > div > div > div > div > a.carousel-control-next > i')).click();
}

/*
CAROUSEL
<H2>
div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2
div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2
div.carousel-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2
<P>
div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p
div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p
div.carousel-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p

div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a
div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a
div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a
*/

//MAIN FUNCTION
async function mainDrupal() {
    await driver.manage().setTimeouts({
        implicit: 30000
    });
    await driver.get(drupalBasePages[0]);

    try {

        //Slide ONE
        let slideOneH2 = await (await driver).findElement(By.css('div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2')).getText();
        carouselArrDr.push(slideOneH2);

        await driver.sleep(500);


        let slideOneP = await (await driver).findElement(By.css('div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p')).getText();
        carouselArrDr.push(slideOneP);
        await driver.sleep(500);

        let readMore = await (await driver).findElement(By.css('div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a')).getText();
        carouselArrDr.push(readMore);

        await driver.sleep(5000);

        nextSlide();

        await driver.sleep(500);


        readArray();


        //Slide TWO

        
        let waitH2 = await driver.wait(until.elementLocated(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2')));
        let slideTwoH2 = await waitH2.getText();
        carouselArrDr.push(slideTwoH2);

        await driver.sleep(500);


        let slideTwoP = await (await driver).findElement(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p')).getText();
        carouselArrDr.push(slideTwoP);

        await driver.sleep(500);


        let readMoreTwo = await (await driver).findElement(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a')).getText();
        carouselArrDr.push(readMoreTwo);

        await driver.sleep(500);

        await driver.sleep(5000);

        nextSlide();

        await driver.sleep(500);

        readArray();

        //Slide THREE
        let slideThreeH2 = await (await driver).findElement(By.css('div.carousel-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2')).getText();
        carouselArrDr.push(slideThreeH2);
        
        await driver.sleep(500);

        let slideThreeP = await (await driver).findElement(By.css('div.carousel-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p')).getText();
        carouselArrDr.push(slideThreeP);
        
        await driver.sleep(500);
        
        let readMoreThree = await (await driver).findElement(By.css('div.carousel-item:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a')).getText();
        carouselArrDr.push(readMoreThree);
        
        await driver.sleep(500);

        readArray();


    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();

    }
}

mainDrupal();