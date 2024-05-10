const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const assert = require('assert');
const fs = require('fs');

Given('I fill the login form email with {kraken-string}', async function (username) {
    let element = await this.driver.$('#identification');
    console.log(username);
    return await element.setValue(username);
});

Given('I fill the old login form email with {kraken-string}', async function (username) {
    let element = await this.driver.$('.email.ember-text-field.gh-input.ember-view');
    console.log(username);
    return await element.setValue(username);
});

Given('I fill the login form password with {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

Given('I fill the old login form password with {kraken-string}', async function (password) {
    let element = await this.driver.$('.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(password);
});

Given('I try to login', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

Given('I try to login in the old site', async function() {
    let element = await this.driver.$('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view');
    return await element.click();
})

Given('I wait for the dashboard to be visible', async function() {
    let element = await this.driver.$('.gh-canvas-title');
    let text = await element.getText();
    assert(text == "Let’s get started!");
})

Given('I wait for the old dashboard to be visible', async function() {
    let element = await this.driver.$('.active.ember-view');
    let text = await element.getText();
    assert(text == "View site");
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

When('I fill the old page form body with {kraken-string}', async function (body) {
    let e = this.driver.$('div[data-kg="editor"]');
    e.click();
    await new Promise(r => setTimeout(r, 1000));
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.setValue(body);
});

When('I click the Publish button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
})

When('I click the old Publish button', async function() {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger');
    return await element.click();
})

When('I schedule the publication of the page', async function() {
    let element = await this.driver.$('button.gh-publish-setting-title');
    return await element.click();
})

When('I schedule the publication of the page in the old site', async function() {
    let element = await this.driver.$('section > div > div:nth-child(2)');
    await element.click();
    let element2 = await this.driver.$('header.gh-publishmenu-heading');
    return await element2.click({force: true});
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

When('I click the old Final Review button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click the Publish Page button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
})

Then('I expect to see {kraken-string}', async function (message) {
    let element = await this.driver.$('span.green');
    let text = await element.getText();
    assert(text == message);
});

Then('I expect in the old site to see {kraken-string}', async function (message) {
    let element = await this.driver.$('.gh-publishmenu-heading');
    let text = await element.getText();
    assert(text.includes(message));
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



//Log in scenario 1

When('I fill the login with right email with {kraken-string}', async function (username) {
    let element = await this.driver.$('#identification');
    console.log(username);
    return await element.setValue(username);
});

When('I fill the login form with the correct password with {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I try to click login', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

Then('I expect the dashboard to be visible', async function() {
    let element = await this.driver.$('.gh-canvas-title');
    let text = await element.getText();
    assert(text == "Let’s get started!");
});

//Log in scenario 2

Then('I expect to see a message with {kraken-string}', async function (message) {
    let element = await this.driver.$('.main-error');
    let text = await element.getText();
    assert(text.includes(message));
});

//Log in scenario 3

When('I fill the login form with the wrong password with {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

//Log in scenario 4

When('I try to click forget', async function() {
    let element = await this.driver.$('#ember4');
    return await element.click();
})


//Create Tag scenario 3

When('I navigate to ghost page', async function() {
    let element = await this.driver.$('.gh-canvas-title');
    let text = await element.getText();
    assert(text == "Let’s get started!");
});

When('I fill the tag description with {kraken-string}', async function (description) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(description);
});

Then('I expect to see <=500 characters with {kraken-string}', async function (message) {
    let element = await this.driver.$('#tag-description');
    return await element.getValue() <=500;
});


//Create Tag scenario 4

Then('I expect to an length error to show', async function () {
    let element = await this.driver.$('div.form-group.no-margin.error p.response');
    let text = await element.getText();
    assert(text == "Description cannot be longer than 500 characters.");
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

When('I click on the old save member button', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view');
    return await element.click();
})

When('I check the member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.gh-member-details-attribution p');
    let text = await element.getText();
    assert(text.includes(message));
});

When('I check the old member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('p.f7.pa0.ma0.midgrey.nudge-bottom--2');
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

When('I check the new member in the old members list', async function () {
    let emails = [];
    let rows = await this.driver.$$('section.content-list ol.members-list.gh-list li.gh-list-row.gh-members-list-item');
    for (let i = 0; i < rows.length; i++) {
        let link = await rows[i].$('a');
        let paragraph = await link.$('p');
        let text = await paragraph.getText();
        emails.push(text);
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

Then('I expect the old member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('p.f7.pa0.ma0.midgrey.nudge-bottom--2');
    let text = await element.getText();
    assert(text.includes(message));
});

Then('I take a screenshot and save it in {kraken-string}', async function (path) {
    if (!fs.existsSync(path.split('/')[0])) {
        fs.mkdirSync(`./screenshots/${path.split('/')[0]}`, { recursive: true });
    }
    await this.driver.saveScreenshot(`./screenshots/${path}.png`);
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

Then('I expect the new member in the old members list', async function () {
    let emails = [];
    let rows = await this.driver.$$('section.content-list ol.members-list.gh-list li.gh-list-row.gh-members-list-item');
    for (let i = 0; i < rows.length; i++) {
        let link = await rows[i].$('a');
        let paragraph = await link.$('p');
        let text = await paragraph.getText();
        emails.push(text);
    }
    console.log("Emails\n", emails);
    assert(emails.includes(email));
});

Then('I expect the error member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.form-group.max-width.error p.response');
    let text = await element.getText();
    assert(text.includes(message));
});

Then('I expect the old error member creation message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.gh-alert-content');
    let text = await element.getText();
    assert(text.includes(message));
});

Then('I expect the member note error message contains {kraken-string}', async function (message) {
    let element = await this.driver.$('div.form-group.gh-member-note.error p.response');
    let text = await element.getText();
    assert(text.includes(message));
});