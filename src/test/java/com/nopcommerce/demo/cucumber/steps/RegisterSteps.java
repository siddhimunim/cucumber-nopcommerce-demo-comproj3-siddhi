package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @When("^I click on LoginIn link$")
    public void iClickOnLoginInLink() {
        new HomePage().clickOnLoginLink();
    }

    @And("^I click on register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();

    }

    @Then("^I verify register text$")
    public void iVerifyRegisterText() {
        Assert.assertEquals(new RegisterPage().getRegisterText(),"Register");
    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }



    @Then("^I should verify errorMassage$")
    public void iShouldVerifyErrorMassage() {
        Assert.assertEquals("First name is required.",new RegisterPage().getValidationErrorMessageForField("FirstName"));
        Assert.assertEquals("Last name is required.",new RegisterPage().getValidationErrorMessageForField("LastName"));
        Assert.assertEquals("Email is required.",new RegisterPage().getValidationErrorMessageForField("Email"));
        Assert.assertEquals("Password is required.",new RegisterPage().getValidationErrorMessageForField("Password"));
        Assert.assertEquals("Password is required.",new RegisterPage().getValidationErrorMessageForField("ConfirmPassword"));
    }

    @And("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String gender) {
        new RegisterPage().selectGender(gender);

    }

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstName) {
        new RegisterPage().enterFirstName(firstName);

    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastName)  {
        new RegisterPage().enterLastName(lastName);

    }

    @And("^I select date of birth \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iSelectDateOfBirth(String day, String month, String year) {
        new RegisterPage().selectDateOfBirth(day, month, year);

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new RegisterPage().enterEmail(email);


    }

    @And("^I enter passWord \"([^\"]*)\"$")
    public void iEnterPassWord(String password) {
        new RegisterPage().enterPassword(password);

    }



    @And("^I confirm password \"([^\"]*)\"$")
    public void iConfirmPassword(String confPassword)  {
        new RegisterPage().enterConfirmPassword(confPassword);

    }

    @Then("^I verify message your registration completed$")
    public void iVerifyMessageYourRegistrationCompleted() {
        Assert.assertEquals("Your registration completed",new RegisterPage().getYourRegCompletedText());
    }




}
