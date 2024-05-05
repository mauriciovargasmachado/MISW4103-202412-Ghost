const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

Given('I fill the login form email with {kraken-string}', async function (username) {
    let element = await this.driver.$('#identification');
    console.log(username);
    return await element.setValue(username);
});

Given('I fill the login form password with {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

Given('I try to login', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

Given('I wait for the dashboard to be visible', async function() {
    let element = await this.driver.$('.gh-canvas-title');
    return await element.getValue() == "Dashboard";
})

When('I start to create a new page', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
})

When('I fill the page form title with {kraken-string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.setValue(title);
});

When('I fill the page form body with {kraken-string}', async function (body) {
    let e = this.driver.$('.kg-prose');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.setValue(body);
});

When('I click the Publish button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
})

When('I schedule the publication of the page', async function() {
    let element = await this.driver.$('button.gh-publish-setting-title');
    return await element.click();
})

When('I set the schedule date and time', async function() {
    //let element = await this.driver.$('div[data-test-radio="schedule"]');
    let element = await this.driver.$('div > fieldset > div > div:nth-child(2)');
    return await element.click();
})

When('I click the Final Review button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
    return await element.click();
})

When('I click the Publish Page button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
})

Then('I expect to see {kraken-string}', async function (message) {
    let element = await this.driver.$('span.green');
    return await element.getValue() == message;
});


//Create Post scenario 1
When('I start to create a new post', async function() {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
})

When('I fill the post form title with {kraken-string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title.ember-text-area.gh-input.ember-view');
    await element.setValue(title);
    let e = this.driver.$('.kg-prose');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element2 = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element2.setValue("");  
});

When('I click the Publish Post button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
})

//Create Post scenario 2
When('I fill the post form body with {kraken-string}', async function (body) {
    let e = this.driver.$('.kg-prose');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.setValue(body);
});
//Create Post scenario 3
When('I fill the post adding a divider', async function () {
    let e = this.driver.$('.kg-prose');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.setValue('/hr');
    let element2 = await this.driver.$('ul[role=menu]')
    return element2.click()
});
//Create Post scenario 4
When('I fill the post adding a button', async function () {
    let e = this.driver.$('.kg-prose');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    await element.setValue('/button');
    let element2 = await this.driver.$('ul[role=menu]')
    return element2.click()
});
//Create Tag scenario 1
When('I start to create a new tag', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
});
When('I fill the tag form title with {kraken-string}', async function (title) {
    let element = await this.driver.$('.gh-input');
    return await element.setValue(title);
});
When('I click the Publish tag button', async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
});
//Create Tag scenario 2
When('I fill the tag color with {kraken-string}', async function (color) {
    let element = await this.driver.$('input[name="accent-color"]');
    return await element.setValue(color);
});

// Create Member
var email = faker.internet.email();
When('I start to create a new member', async function() {
    let element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
})

When('I wait for the members to be visible', async function() {
    let element = await this.driver.$('h2.gh-canvas-title');
    let text = await element.getText();
    assert(text == "Members");
})

When('I fill the member name with random data', async function () {
    let element = await this.driver.$('input[name="name"]');
    return await element.setValue(faker.person.fullName());
});

When('I fill the member email with random data', async function () {
    let element = await this.driver.$('input[name="email"]');
    return await element.setValue(email);
});

When('I fill the member note with random data', async function () {
    let element = await this.driver.$('textarea[name="note"]');
    return await element.setValue(faker.string.alphanumeric(150));
});

When('I click on the save member button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})

When('I check the member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.gh-member-details-attribution p');
    let text = await element.getText();
    assert(text.includes(message));
});

When('I check the new member in the members list', async function () {
    let emails = [];
    let rows = await this.driver.$$('div table.gh-list tbody tr');
    for (let i = 0; i < rows.length; i++) {
        let link = await rows[i].$('a');
        let paragraphs = await link.$$('p');
        for (let j = 0; j < paragraphs.length; j++) {
            let text = await paragraphs[j].getText();
            emails.push(text);
        }
    }
    console.log("Emails\n", emails);
    assert(emails.includes(email));
});

When('I fill the member note with a lot of data', async function () {
    let element = await this.driver.$('textarea[name="note"]');
    return await element.setValue(faker.string.alphanumeric(501));
});

When('I fill the member email with invalid data', async function () {
    let element = await this.driver.$('input[name="email"]');
    return await element.setValue(faker.word.sample());
});

Then('I expect the member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.gh-member-details-attribution p');
    let text = await element.getText();
    assert(text.includes(message));
});

Then('I expect the new member in the members list', async function () {
    let emails = [];
    let rows = await this.driver.$$('div table.gh-list tbody tr');
    for (let i = 0; i < rows.length; i++) {
        let link = await rows[i].$('a');
        let paragraphs = await link.$$('p');
        for (let j = 0; j < paragraphs.length; j++) {
            let text = await paragraphs[j].getText();
            emails.push(text);
        }
    }
    console.log("Emails\n", emails);
    assert(emails.includes(email));
});

Then('I expect the error member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.form-group.max-width.error p.response');
    let text = await element.getText();
    assert(text.includes(message));
});

Then('I expect the member note error message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.form-group.gh-member-note.error p.response');
    let text = await element.getText();
    assert(text.includes(message));
});