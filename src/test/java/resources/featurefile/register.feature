Feature: Regester Test
  As A user I register in nop commerce site

  Background: As User I am on Home page
    Given I am on homepage

 @Sanity @Regression
  Scenario: Verify User Should NavigateTo Register Page Successfully
    When I click on LoginIn link
    And I click on register link
    Then I verify register text

 @Smoke @Regression
  Scenario: verify That FirstName LastName Email password And ConfirmPassword Fields Are Mandetory
    When I click on LoginIn link
    And I click on register link
    And I click on register button
    Then I should verify errorMassage
 @Regression
  Scenario: Verify That User Should Create Account Successfully
    When I click on LoginIn link
    And I click on register link
    And I select gender "Female"
    And I enter firstname "siddhi"
    And I enter lastname "Munim"
    And I select date of birth "23","March","1990"
    And I enter email "siddhi.mun"
    And I enter passWord "siddh123"
    And I confirm password "siddh123"
    And I click on register button
    Then I verify message your registration completed
