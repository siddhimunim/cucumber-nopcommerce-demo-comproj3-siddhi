$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a User I am verifying Computer page test\r\nGiven I am on home page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4378198000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify User Should Navigate To ComputerPage Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computerpage-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify computer text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 978820400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 39972500,
  "status": "passed"
});
formatter.after({
  "duration": 721549500,
  "status": "passed"
});
formatter.before({
  "duration": 2554965500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To DesktopsPage Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktopspage-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify desktops text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 888888800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 391353800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyDesktopsText()"
});
formatter.result({
  "duration": 46372900,
  "status": "passed"
});
formatter.after({
  "duration": 768073600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2464234600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 495967700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 382397400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1102050800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 106977800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 100610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 74594200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 61638800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 90629800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 67476700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 727901400,
  "status": "passed"
});
formatter.after({
  "duration": 672835100,
  "status": "passed"
});
formatter.before({
  "duration": 2545599600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 852017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 352717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 641761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 69305600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 91865100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 80935500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 73274600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 84621600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 43177000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 653005300,
  "status": "passed"
});
formatter.after({
  "duration": 659825500,
  "status": "passed"
});
formatter.before({
  "duration": 2507571500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 844053500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 357826200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 659598000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 64409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 71935300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 58472200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 57096400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 79661500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 54098600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 653255700,
  "status": "passed"
});
formatter.after({
  "duration": 674223500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs user I want to login in nop commerce",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2333113800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 770955400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 38676900,
  "status": "passed"
});
formatter.after({
  "duration": 651386300,
  "status": "passed"
});
formatter.before({
  "duration": 2473123400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify TheError Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-theerror-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter emailId \"siddhi.mun1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify error massage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 756436000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi.mun1@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 96528300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 89850100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1701125700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyErrorMassage()"
});
formatter.result({
  "duration": 35846700,
  "status": "passed"
});
formatter.after({
  "duration": 677763400,
  "status": "passed"
});
formatter.before({
  "duration": 2324019800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify That User Should logInSuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-loginsuccessfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I filled all regestration details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter emailId \"jennu.smith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"katiebruno\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify that logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 387575400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 329889200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iFilledAllRegestrationDetails()"
});
formatter.result({
  "duration": 344666800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 329300900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 351528400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennu.smith@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 140266700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "katiebruno",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 113843600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1573847600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 1067433100,
  "status": "passed"
});
formatter.after({
  "duration": 667447300,
  "status": "passed"
});
formatter.before({
  "duration": 2665019000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I filled all regestration details",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter emailId \"jennu.smith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password \"katiebruno\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on LogOut button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify that Login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 850955200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 546112700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iFilledAllRegestrationDetails()"
});
formatter.result({
  "duration": 652194800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 338691600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 328492100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennu.smith@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 125270300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "katiebruno",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 83308700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1561579500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutButton()"
});
formatter.result({
  "duration": 496711700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLoginLinkDisplay()"
});
formatter.result({
  "duration": 1067911200,
  "status": "passed"
});
formatter.after({
  "duration": 650374600,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Regester Test",
  "description": "As A user I register in nop commerce site",
  "id": "regester-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2039899100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify User Should NavigateTo Register Page Successfully",
  "description": "",
  "id": "regester-test;verify-user-should-navigateto-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify register text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 384161900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 301018200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyRegisterText()"
});
formatter.result({
  "duration": 37792700,
  "status": "passed"
});
formatter.after({
  "duration": 661469200,
  "status": "passed"
});
formatter.before({
  "duration": 2232902100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That FirstName LastName Email password And ConfirmPassword Fields Are Mandetory",
  "description": "",
  "id": "regester-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandetory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should verify errorMassage",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 752358500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 298153800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 69993300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyErrorMassage()"
});
formatter.result({
  "duration": 296868900,
  "status": "passed"
});
formatter.after({
  "duration": 661874000,
  "status": "passed"
});
formatter.before({
  "duration": 1906015400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "regester-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter firstname \"siddhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter lastname \"Munim\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select date of birth \"23\",\"March\",\"1990\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"siddhi.mun\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter passWord \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I confirm password \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify message your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 364831900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 316710500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 80209700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 57047900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Munim",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 83557200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 24
    },
    {
      "val": "March",
      "offset": 29
    },
    {
      "val": "1990",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 225963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi.mun",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 75949200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassWord(String)"
});
formatter.result({
  "duration": 70972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iConfirmPassword(String)"
});
formatter.result({
  "duration": 75117700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 558834400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 45355000,
  "status": "passed"
});
formatter.after({
  "duration": 654846400,
  "status": "passed"
});
});