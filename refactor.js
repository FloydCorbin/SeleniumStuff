//UTILITY FUNCTIONS

async function addToArrayDr() {
    try {
        await driver.get(drupalBasePages[0]);
        async function iterateOverElements() {
            for (const key in selectorDr) {
                // console.log(`${key}: ${selectorDr[key]}`);


                async function pushToArray() {
                    let newKey;
                    newKey = key;
                    console.log(newKey);
                    newKey = await (await driver.wait(until.elementLocated(By.css(selectorDr[key])), 5000)).getText();
                    arrayDr.push(newKey);
                }
                pushToArray();

                /*GARBAGE?*/
                // for (let i = 0; i < Object.keys(selectorDr).length; i++) {    
                //     let newKey = key;
                //     console.log(newKey);
                // let newKey = await (await driver.wait(until.elementLocated(By.css(selectorDr[i])), 5000)).getText();
                // arrayDr.push(newKey);            
                // }
                // return arrayDr;
            }
        }

        iterateOverElements();
    } catch (e) {
        console.log(e);
    } finally {
        await driver.quit();
        console.log(arrayDr);
    }

    // console.log(pushToArray());
}

addToArrayDr();


/*TEST OUTPUT on exploreTopic.js */
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