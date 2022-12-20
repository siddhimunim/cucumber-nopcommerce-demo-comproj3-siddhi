Feature: Login Test

  As user I want to login in nop commerce

  @Sanity @Regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

 @Smoke @Regression
  Scenario: verify TheError Message With InValid Credentials
    Given I am on homepage
    When I click on login link
    And I enter emailId "siddhi.mun1@gmail.com"
    And I enter password "siddh123"
    And I click on login button
    Then I verify error massage

  @Regression
  Scenario:  verify That User Should logInSuccessFully With Valid Credentials
    Given I am on homepage
    When I click on login link
    And I click on register link
    And I filled all regestration details
    And I click on register button
    And I click on login link
    And I enter emailId "jennu.smith@gmail.com"
    And I enter password "katiebruno"
    And I click on login button
    Then I verify that logout link is display

  @Regression
  Scenario: Verify That User Should LogOut SuccessFully
    Given I am on homepage
    When I click on login link
    And I click on register link
    And I filled all regestration details
    And I click on register button
    And I click on login link
    And I enter emailId "jennu.smith@gmail.com"
    And I enter password "katiebruno"
    And I click on login button
    And I click on LogOut button
    Then I verify that Login link display
