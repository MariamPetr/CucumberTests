Feature: Login

   Scenario: Register to Inflectra.com
    Given User is at the login page
    And User types "testerSdSmddm@mail.ru" in 'Email Input'
    And User types "tester0s0" in 'First name block'
    And User types "testeryan111" in 'last name block'
    And User types "Armenia" in 'Country block'
    And User types "Karo2019.." in 'Password block'
    And User types "Karo2019.." in 'Confirm Password block'
    And User types "In what city or town did your mother and father meet?" in 'Security question block'
    And User types "Sevan" in 'Security answer block'
    And User types "7VEX3" in 'Captcha block'
    When User clicks on Register button
    Then User should see "tester0s0 testeryan111"


  Scenario:  login to Inflectra.com
    Given User is at the login page for logging in
    And user types "testerSsSmddm@mail.ru"  in 'email address' block
    And User types "Karo2019.." in 'password' block
    And User clicks on 'Keep me logged in' button
    When User clicks on 'Log in' button
    Then User sees "tester0s0 testeryan111"


  Scenario:  Registering to Inflectra.com from supporting
    Given User is at help desk page for logging in for supporting
    And user types "dsgjdsffgds"  in 'login id' block
    And User types "thacjyfghh@mail.ru" in 'Email address' block
    And User types "testernnsdf" in 'First name' block
    And User types "testeryanm" in 'Last name' block
    And User types "testernn" in 'Password' block
    And User types "testernn" in 'confirm password' block
    And User types "testernn" in 'security question' block
    And User types "testernn" in 'security answer' block
    When User clicks on button 'click on account'
    Then User should see text "Sign-Out"


    Scenario: Verify if video files are exist
        Given User is on About page from header
        And User clicks on 'Blogs' button from About page
        When User clicks on 'Videos' file from footer
        Then User sees the text "Featured Videos"


    Scenario:Verify the opportunity of watching 2-nd video
        Given User is on video's page
        And   User clicks on " 2. Getting Started With Rapise " button
       Then User clicks on " Getting Started with Rapise - Orientation (Part 1) " button

