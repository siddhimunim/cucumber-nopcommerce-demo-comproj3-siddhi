package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

public class ComputerSteps {
    @When("^I click on \"([^\"]*)\" tab$")
    public void iClickOnTab(String tab)  {
        new HomePage().clickOnMenuTab(tab);

    }


    @Then("^I verify computer text$")
    public void iVerifyComputerText() {
        Assert.assertEquals("Computers",new ComputerPage().getPageTitleText());
    }


    @And("^I click on \"([^\"]*)\" link$")
    public void iClickOnLink(String subTab) {
        new ComputerPage().clickOnSubMenu(subTab);

    }

    @Then("^I verify desktops text$")
    public void iVerifyDesktopsText() {
        Assert.assertEquals("Desktops",new ComputerPage().getPageTitleText());

    }

    @Then("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String productName)  {
        new DesktopsPage().selectProduct(productName);

    }





    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processorName) {
        new BuildYourOwnComputerPage().selectProcessor(processorName);

    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ramGB) {
        new BuildYourOwnComputerPage().selectRam(ramGB);

    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hDdGB)  {
        new BuildYourOwnComputerPage().selectHDD(hDdGB);

    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String oSName) {
        new BuildYourOwnComputerPage().selectOS(oSName);

    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String softwareName)  {
        new BuildYourOwnComputerPage().selectSoftware(softwareName);

    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I  verify message The product has been added to your shopping cart$")
    public void iVerifyMessageTheProductHasBeenAddedToYourShoppingCart() {
        Assert.assertEquals("The product has been added to your shopping cart",new BuildYourOwnComputerPage().getProductAddedMessage());
    }


}
