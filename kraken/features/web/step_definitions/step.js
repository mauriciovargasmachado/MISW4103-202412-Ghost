const { Given, When, Then } = require('@cucumber/cucumber');

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

