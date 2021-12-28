import {Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps'


Given(/^User is at the login page$/, function () {
    cy.visit('https://www.inflectra.com/Rapise/')
    cy.get('[id="navLoginBtn"]').click()
    cy.get('[id="cplMainContent_LoginUser_HyperLink1"]').click()
})

And(/^User types "([^"]*)" in 'Email Input'$/, function (arg) {
    cy.get('[id="txtEmailAddress"]').clear().type(arg)
})

And(/^User types "([^"]*)" in 'First name block'$/, function (arg) {
    cy.get('[id="txtFirstName"]').clear().type(arg)
})

And(/^User types "([^"]*)" in 'last name block'$/, function (arg) {
    cy.get('[id="txtLastName"]').clear().type(arg)
})

And(/^User types "([^"]*)" in 'Country block'$/, function (arg) {
    cy.get('[id="cplMainContent_ddlCountry"]').select(arg)
})

And(/^User types "([^"]*)" in 'Password block'$/, function (arg) {
    cy.get('[id="txtPassword"]').clear().type(arg)
})

And(/^User types "([^"]*)" in 'Confirm Password block'$/, function (arg) {
    cy.get('[id="txtPasswordConfirm"]').clear().type(arg)
})

And(/^User types "([^"]*)" in 'Security question block'$/, function (arg) {
    cy.get('[id="cplMainContent_ddlSecurityQuestion"]').select(arg)
})

And(/^User types "([^"]*)" in 'Security answer block'$/, function (arg) {
    cy.get('[id="txtSecurityAnswer"]').clear().type(arg)
    cy.wait(6000)
})

And(/^User types "([^"]*)" in 'Captcha block'$/, function (arg) {
    cy.get('[id="txtCaptcha"]')
})

When(/^User clicks on Register button$/, function () {
    cy.get('[id="btnRegister"]').click()
    cy.get('[class*="nav-top-btn pointer"]').click()
})

Then(/^User should see "([^"]*)"$/, function (arg) {
    cy.get('[class*="transition-all flex"]').first().contains(arg)
})


Given(/^User is at the login page for logging in$/,
    function () {
        cy.visit('https://www.inflectra.com/Rapise/')
        cy.get('[id="navLoginBtn"]').click()

    });

And(/^user types "([^"]*)"  in 'email address' block$/, function (arg) {
    cy.get('[id="cplMainContent_LoginUser_UserName"]').clear().type(arg)

});

And(/^User types "([^"]*)" in 'password' block$/, function (arg) {
    cy.get('[id="cplMainContent_LoginUser_Password"]').clear().type(arg)

});
And(/^User clicks on 'Keep me logged in' button$/, function () {
    cy.get('[id="cplMainContent_LoginUser_RememberMe"]').click()

});
When(/^User clicks on 'Log in' button$/, function () {
    cy.get('[id="cplMainContent_LoginUser_btnLogIn"]').click()

});
Then(/^User sees "([^"]*)"$/, function (arg) {
    cy.get('[class*="transition-all flex"]').first().contains(arg)

});


Given(/^User is at help desk page for logging in for supporting$/,
    function () {
        cy.visit('https://www.inflectra.com/Rapise/')
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="RegisterHyperLink"]').click()
    });

And(/^user types "([^"]*)"  in 'login id' block$/, function (arg) {
    cy.get('[id="MainContent_txtUserName"]').clear().type(arg)

});

And(/^User types "([^"]*)" in 'Email address' block$/,
    function (arg) {
        cy.get('[id="MainContent_txtEmail"]').clear().type(arg)


    });

And(/^User types "([^"]*)" in 'First name' block$/, function (arg) {
    cy.get('[id="MainContent_txtFirstName"]').clear().type(arg)

})
And(/^User types "([^"]*)" in 'Last name' block$/, function (arg) {
    cy.get('[id="MainContent_txtLastName"]').clear().type("arg")

});
And(/^User types "([^"]*)" in 'Password' block$/, function (arg) {
    cy.get('[id="txtNewPassword"]').clear().type(arg)

});
And(/^User types "([^"]*)" in 'confirm password' block$/, function (arg) {
    cy.get('[id="MainContent_txtPasswordConfirmation"]').clear().type(arg)

});

And(/^User types "([^"]*)" in 'security answer' block$/, function (arg) {
    cy.get('[id="MainContent_txtAnswer"]').clear().type(arg)
});
And(/^User types "([^"]*)" in 'security question' block$/, function (arg) {
    cy.get('[id="MainContent_txtQuestion"]').clear().type(arg)
});

When(/^User clicks on button 'click on account'$/, function () {
    cy.get('[id="MainContent_btnSave"]').click()
    cy.get('[class="dropdown-toggle"]').click()
});

Then(/^User should see text "([^"]*)"$/, function (arg) {
    cy.get('a[href="javascript:b()"]').contains(arg)
});


Given(/^User is on About page from header$/, function () {
    cy.visit('https://www.inflectra.com/Rapise/')
    cy.get(`[id="navAboutBtn"]`).click()

});

And(/^User clicks on 'Blogs' button from About page$/, function () {
    cy.get('[class="tdn tdn-hover transition-all"]').eq(31).click()

});

When(/^User clicks on 'Videos' file from footer$/, function () {
    cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()


});
Then(/^User sees the text "([^"]*)"$/, function (arg) {
    cy.get('[class="fs-h1 fs-h2-xs my5 db"]').contains(arg)
});


Given(/^User is on video's page$/, function () {
    cy.visit('https://www.inflectra.com/Rapise/')
    cy.get('[id="navAboutBtn"]').click()
    cy.get('[class="tdn tdn-hover transition-all"]').eq(31).click()
    cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()

});

And(/^User clicks on "([^"]*)" button$/, function (arg) {
    cy.get('[class="tdn tdu-hover dark-gray orange-hove"]').contains(arg).click()
});
