package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }



    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @And("^I enter emailId \"([^\"]*)\"$")
    public void iEnterEmailId(String email)  {
        new LoginPage().enterEmailId(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);

    }
    @And("^I click on login button$")
    public void iClickOnLoginButton() throws InterruptedException {
        new LoginPage().clickOnLoginButton();
        Thread.sleep(1000);
    }

    @Then("^I verify error massage$")
    public void iVerifyErrorMassage() {
       // String expMassage =""
      Assert.assertTrue(new LoginPage().getErrorMessage().contains("Login was unsuccessful. Please correct the errors and try again."));
    }

    @And("^I filled all regestration details$")
    public void iFilledAllRegestrationDetails() {
        new RegisterPage().enterFirstName("Jenna");
        new RegisterPage().enterLastName("Smith");
        new RegisterPage().enterEmailId1("jennu.smith@gmail.com");
        new RegisterPage().enterPassword("katiebruno");
        new RegisterPage().enterConfirmPassword("katiebruno");
    }


    @Then("^I verify that logout link is display$")
    public void iVerifyThatLogoutLinkIsDisplay() throws InterruptedException{
        Assert.assertTrue(new HomePage().isLogOutLinkDisplay());
        Thread.sleep(1000);
    }

    @And("^I click on LogOut button$")
    public void iClickOnLogOutButton() {
        new HomePage().clickOnLogOutLink();
    }

    @Then("^I verify that Login link display$")
    public void iVerifyThatLoginLinkDisplay() throws InterruptedException{
        Assert.assertTrue(new HomePage().isLogInLinkDisplay());
        Thread.sleep(1000);
    }


}
