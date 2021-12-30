import fs from 'fs';
import path from 'path'

class Base {
    // sendKeysFromKeyboard(text) {
    //     browser.keys(text)
    // }

    // compareArrays(actualItems,expectedItems){
    //     let extraExpected = []
    //     let extraActual = []
    //     if(actualItems.length != expectedItems.length){
    //         throw new Error(`'Arrays items count mismatch. 
    //             1. Actual Array - length ${actualItems.length} - "${actualItems}"  
    //             2. Expected Array - length ${expectedItems.length} - "${expectedItems}"`)
    //     }
    //     extraExpected = expectedItems.filter(item => !actualItems.includes(item))
    //     extraActual = actualItems.filter(item => !expectedItems.includes(item))
    //     if(extraExpected.length > 0 || extraActual.length > 0 ){
    //         throw new Error(`'Arrays mismatch. 
    //             1. Items present but not expected "${extraActual}"  
    //             2. Items expected but not present "${extraExpected}"`)
    //     }

    // }

    // /**
    //  * 
    //  * @param {WebdriverIO.Element} object 
    //  * @param {String} filePath 
    //  */
    // uploadFile(object, filePath){
    //     if(!fs.existsSync(filePath)) {
    //         throw new Error(`file is not present : ${filePath}`)
    //     }
    //     let serverFilePath = browser.uploadFile(filePath)
    //     console.log(`server file path is ${serverFilePath}`);
    //     browser.execute(
    //         // assign style to elem in the browser
    //         (el) => el.style.display = 'block',
    //         // pass in element so we don't need to query it again in the browser
    //         object
    //     );
    //     browser.pause(1000);
    //     object.waitForDisplayed();
    //     console.log('attaching file to input');
    //     object.setValue(serverFilePath)
    //     browser.pause(3000)
    //     browser.execute(
    //         // assign style to elem in the browser
    //         (el) => el.style.display = 'none',
    //         // pass in element so we don't need to query it again in the browser
    //         object
    //     );
    //     this.captureScreenshot()
    // }

    // captureScreenshot(name = Date.now().toString()) {
    //     let screenshotPath = path.join(process.cwd(), '/reports/screenshots');
    //     if(!fs.existsSync(screenshotPath)) {
    //         fs.mkdirSync (screenshotPath,{recursive: true});
    //     }
    //     browser.saveScreenshot(path.join(screenshotPath, name + '.png'));
    // }

    async open(path = "/"){
        await browser.url(path)
    }
}

export default Base