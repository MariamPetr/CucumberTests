describe('trial testing', () => {
    beforeEach(() => {
        cy.visit('https://www.inflectra.com/Rapise/')
    })


    it('check registration page functionality',
        () => {
            cy.get('[id="navLoginBtn"]').click()
            cy.get('[id="cplMainContent_LoginUser_HyperLink1"]').click()
            cy.get('[id="txtEmailAddress"]').clear().type("testmail@mail.ru")
            cy.get('[id="txtFirstName"]').clear().type("tester")
            cy.get('[id="txtLastName"]').clear().type("testeryan@mail.ru")
            cy.get('[id="cplMainContent_ddlCountry"]').select('Armenia')
            cy.get('[id="txtPassword"]').clear().type("Karo2019")
            cy.get('[id="txtPassword"]').clear().type("Karo2019")
            cy.get('[id="cplMainContent_ddlSecurityQuestion"]').select('In what city or town did your mother and father meet?')
            cy.get('[id="txtSecurityAnswer"]').clear().type('Sevan')
            cy.get('[id="txtCaptcha"]').clear().type('7VEX3')
            cy.get('[id="btnRegister"]').click()
        })

    it('check login page functionality', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get('[id="cplMainContent_LoginUser_UserName"]').clear().type("testingmail@mail.ru")
        cy.get('[id="cplMainContent_LoginUser_Password"]').clear().type("Karo2019..")
        cy.get('[id="cplMainContent_LoginUser_btnLogIn"]').click()
        cy.get('[class*="transition-all flex"]').first().should('contain', 'tester Testeryan')
         cy.get('[id="cplMainContent_LoginUser_RememberMe"]').click()
    })

    it('check "Support" action registration functionality', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="RegisterHyperLink"]').click()
        cy.get('[id="MainContent_txtEmail"]').clear().type("testingmail@mail.ru")
        cy.get('[id="MainContent_txtUserName"]').clear().type("testertesteryan")
        cy.get('[id="MainContent_txtFirstName"]').clear().type("tester")
        cy.get('[id="MainContent_txtLastName"]').clear().type("testeryan")
        cy.get('[id="txtNewPassword"]').clear().type("Karo2019..")
        cy.get('[id="MainContent_txtPasswordConfirmation"]').clear().type("Karo2019..")
        cy.get('[id="MainContent_txtQuestion"]').clear().type("daughter's name")
        cy.get('[id="MainContent_txtAnswer"]').clear().type("Lilit")
        cy.get('[id="MainContent_btnSave"]').click()


    })


    it('check "Support" action registration functionality',
        () => {
            cy.get('[id="navLoginBtn"]').click()
            cy.get(`[id="navSupportBtn"]`).click()
            cy.get('[class="tdn fs-90"]').first().click()
            cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
            cy.get('[id="signinPass"]').clear().type("Karo2019..")
            cy.get('[id="RememberMeLabel"]').click()
            cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').click()
            cy.get('li.UserNameAvatar > div > a > span').should('contain','testertesteryan')

        })


    it('verify if video files are exist', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
        cy.get('[id="signinPass"]').clear().type("Karo2019..")
        cy.get('[id="RememberMeLabel"]').click()
        cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').should('contain', 'Sign-In').click()
        cy.url().should('include', '/External.aspx')
        // cy.wait(5000)
        cy.get('[id="imgKronoDeskLogo"]').should('have.attr', 'alt','Home Page').click();
        // cy.scrollTo('bottom')
        cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()
        // cy.get('[class="tdn tdu-hover mid-gray mid-gray-hover"]').eq(21).click()
        cy.get('[class="fs-h1 fs-h2-xs my5 db"]').should('contain','Featured Videos')

    })



    it('check Video watching opportunity', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
        cy.get('[id="signinPass"]').clear().type("Karo2019..")
        cy.get('[id="RememberMeLabel"]').click()
        cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').should('contain', 'Sign-In').click()
        cy.url().should('include', '/External.aspx')
        // cy.wait(5000)
        cy.get('[id="imgKronoDeskLogo"]').should('have.attr', 'alt','Home Page').click();
        // cy.scrollTo('bottom')
        cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()
        // cy.get('[class="tdn tdu-hover mid-gray mid-gray-hover"]').eq(21).click()
        cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(1).click()
        cy.get('[id="playlist-title"]').should('contain','2. Getting Started With Rapise')

    })

    it('check Video watching opportunity', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
        cy.get('[id="signinPass"]').clear().type("Karo2019..")
        cy.get('[id="RememberMeLabel"]').click()
        cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').should('contain', 'Sign-In').click()
        cy.url().should('include', '/External.aspx')
        // cy.wait(5000)
        cy.get('[id="imgKronoDeskLogo"]').should('have.attr', 'alt','Home Page').click();
        // cy.scrollTo('bottom')
        cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()
        // cy.get('[class="tdn tdu-hover mid-gray mid-gray-hover"]').eq(21).click()
        cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(1).click()
        cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(3).click()
        cy.get('[class="mw960 mx-auto tc"]').should('contain','Getting Started with Rapise - Data-Driven Testing using Map (Part 4)')

    })

    it('check Video watching opportunity', () => {
        cy.get('[id="navLoginBtn"]').click()
        cy.get(`[id="navSupportBtn"]`).click()
        cy.get('[class="tdn fs-90"]').first().click()
        cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
        cy.get('[id="signinPass"]').clear().type("Karo2019..")
        cy.get('[id="RememberMeLabel"]').click()
        cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').should('contain', 'Sign-In').click()
        cy.url().should('include', '/External.aspx')
        // cy.wait(5000)
        cy.get('[id="imgKronoDeskLogo"]').should('have.attr', 'alt','Home Page').click();
        // cy.scrollTo('bottom')
        cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()
        // cy.get('[class="tdn tdu-hover mid-gray mid-gray-hover"]').eq(21).click()
        cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(1).click()
        cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(3).click()

    })
    it('plays video',
        () => {
            cy.get('[id="navLoginBtn"]').click()
            cy.get(`[id="navSupportBtn"]`).click()
            cy.get('[class="tdn fs-90"]').first().click()
            cy.get('[id="signinUser"]').clear().type("testingmail@mail.ru")
            cy.get('[id="signinPass"]').clear().type("Karo2019..")
            cy.get('[id="RememberMeLabel"]').click()
            cy.get('[class*="btn btn-primary w-100 py3 ui-button"]').should('contain', 'Sign-In').click()
            cy.url().should('include', '/External.aspx')
            // cy.wait(5000)
            cy.get('[id="imgKronoDeskLogo"]').should('have.attr', 'alt', 'Home Page').click();
            // cy.scrollTo('bottom')
            cy.get('[class*="gray mid-gray-hover"]').should('contain', 'Videos').contains('Videos').click()
            // cy.get('[class="tdn tdu-hover mid-gray mid-gray-hover"]').eq(21).click()
            cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(1).click()
            cy.get('[class="tdn tdu-hover dark-gray orange-hover"]').eq(3).click()
            // https://www.inflectra.com/Ideas/Videos/PL1GncVUgF5ntLDCyJMx5L9hKE8ainRCDd/SRIVpHWSilQ.aspx

})


})