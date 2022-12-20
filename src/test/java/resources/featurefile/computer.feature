Feature: Computer Test
  As a User I am verifying Computer page test
  Given I am on home page

  @Sanity @Regression
  Scenario:  verify User Should Navigate To ComputerPage Successfully
    When I click on "Computers" tab
    Then I verify computer text

  @Smoke @Regression
  Scenario:  verify User Should Navigate To DesktopsPage Successfully
    When I click on "Computers" tab
    And I click on "Desktops" link
    Then I verify desktops text

  @Regression

  Scenario Outline:  Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully
    When I click on "Computers" tab
    And I click on "Desktops" link
    Then I select product "Build your own computer"
    And I select processor "<processor>"
    And I select RAM "<ram>"
    And I select HDD "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I click on add to cart button
    Then I  verify message The product has been added to your shopping cart

    Examples:
      |processor                                         |ram            |hdd               |os                        |software|
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |


