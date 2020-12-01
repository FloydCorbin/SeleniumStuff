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
const assert = require('assert');
caps.setPageLoadStrategy('eager');

//PAGE VARIABLES
let carouselArrDr = [];
let carouselArrSc = [];

//FUNCTIONS

async function nextSlide(arrowSelector) {
    var arrowSelector;
    await (await driver).findElement(By.css(arrowSelector)).click();
}

//MAIN FUNCTIONS

//DRUPAL
async function mainDrupal() {
    await driver.manage().setTimeouts({
        implicit: 30000
    });
    await driver.get(drupalBasePages[0]);

    try {
        let arrowSelector = '#carouselHero > div.container.arrow > div > div > div > div > div > a.carousel-control-next > i';

        //Slide ONE
        let slideOneH2 = await (await driver).findElement(By.css('#carouselHero > div.carousel-inner > div.carousel-item.active > div > div > div > div > div > div > h2')).getText();
        carouselArrDr.push(slideOneH2);

        await driver.sleep(500);

        let slideOneP = await (await driver).findElement(By.css('div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p')).getText();
        carouselArrDr.push(slideOneP);
        await driver.sleep(500);

        let readMore = await (await driver).findElement(By.css('div.carousel-item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a')).getText();
        carouselArrDr.push(readMore);

        nextSlide(arrowSelector);

        await driver.sleep(500);

        //Slide TWO
        let slideTwoH2 = await (await driver).findElement(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h2')).getText();
        carouselArrDr.push(slideTwoH2);

        await driver.sleep(500);


        let slideTwoP = await (await driver).findElement(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p')).getText();
        carouselArrDr.push(slideTwoP);

        await driver.sleep(500);


        let readMoreTwo = await (await driver).findElement(By.css('div.carousel-item:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a')).getText();
        carouselArrDr.push(readMoreTwo);

        await driver.sleep(500);

        await driver.sleep(5000);

        nextSlide(arrowSelector);

        await driver.sleep(500);

        

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

        // console.log(carouselArrDr);
        // assert.strictEqual(carouselArrSc, carouselArrDr, 'text is not strict equal!');
        // assert.deepStrictEqual(carouselArrSc, carouselArrDr, 'text is not deep strict equal!');
        
        if (carouselArrSc.toString === carouselArrDr.toString)  {
            console.log('The arrays match in length')
            for (let i = 0; i < carouselArrSc.length; i++) {
                console.log(carouselArrDr[i]);
                console.log(carouselArrSc[i]);  
            };
        } else {
            console.log('The text doesn\'t match');
        }
    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
        

    }
}


//SITECORE

async function mainSitecore() {
    await driver.manage().setTimeouts({
        implicit: 30000
    });
    await driver.get(sitecoreBasePages[0]);

    try {
        let arrowSelector = '#content > div.cmp-hero-carousel.slider-box > div.slider-controls.container > div.next.slick-arrow > i';

        await driver.sleep(500);

        //Slide ONE                                               
        let slideOneH2 = await (await driver).findElement(By.css('div.slick-slider:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > h2:nth-child(1)')).getText();
        carouselArrSc.push(slideOneH2);

        await driver.sleep(500);

        let slideOneP = await (await driver).findElement(By.css('div.slick-slider:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)')).getText();
        carouselArrSc.push(slideOneP);
        await driver.sleep(500);

        let readMore = await (await driver).findElement(By.css('div.slick-slider:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(3)')).getText();
        carouselArrSc.push(readMore);

        await driver.sleep(5000);

        nextSlide(arrowSelector);

        await driver.sleep(500);

        //Slide TWO
        let slideTwoH2 = await (await driver).findElement(By.css('div.slick-current:nth-child(3) > div:nth-child(2) > h2:nth-child(1)')).getText();
        carouselArrSc.push(slideTwoH2);

        await driver.sleep(500);

        let slideTwoP = await driver.findElement(By.css('div.slick-current:nth-child(3) > div:nth-child(2) > p:nth-child(2)')).getText();
        carouselArrSc.push(slideTwoP);

        await driver.sleep(500);

        let readMoreTwo = await (await driver).findElement(By.css('div.slick-current:nth-child(3) > div:nth-child(2) > a:nth-child(3)')).getText();
        carouselArrSc.push(readMoreTwo);

        await driver.sleep(500);
        
        nextSlide(arrowSelector);

        await driver.sleep(500);

        //Slide THREE
        let slideThreeH2 = await (await driver).findElement(By.css('div.slick-current:nth-child(4) > div:nth-child(2) > h2:nth-child(1)')).getText();
        carouselArrSc.push(slideThreeH2);
        
        await driver.sleep(500);

        let slideThreeP = await (await driver).findElement(By.css('div.slick-current:nth-child(4) > div:nth-child(2) > p:nth-child(2)')).getText();
        carouselArrSc.push(slideThreeP);
        
        await driver.sleep(500);
        
        let readMoreThree = await (await driver).findElement(By.css('div.slick-current:nth-child(4) > div:nth-child(2) > a:nth-child(3)')).getText();
        carouselArrSc.push(readMoreThree);
        
        await driver.sleep(500);

        // console.log(carouselArrSc);

    } catch (error) {
        console.log(error);
    } finally {
        mainDrupal();
        // await driver.quit();
    }
}

mainSitecore();






    