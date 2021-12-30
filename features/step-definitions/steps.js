import { Given, When, Then } from '@wdio/cucumber-framework';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

import HomePage from '../pageobjects/home.page';

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

