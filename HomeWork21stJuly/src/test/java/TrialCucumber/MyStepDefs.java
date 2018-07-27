package TrialCucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {
    HomePage homePage = new HomePage();
    DashboardPage dashboardPage = new DashboardPage();

    @Given("^user is on login page$")
    public void user_is_on_login_page(){
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^user enters valid username and password$")
    public void user_enters_valid_username_and_password(){
        // Write code here that turns the phrase above into concrete actions
    homePage.enterLoginCredentials();
    }

    @When("^user clicks on log-in button\\.$")
    public void user_clicks_on_log_in_button(){
        // Write code here that turns the phrase above into concrete actions
   homePage.toClickOnLogInButton();
    }

    @Then("^user should be logged in and able to see welcome message\\.$")
    public void user_should_be_logged_in_and_able_to_see_welcome_message(){
        // Write code here that turns the phrase above into concrete actions
    dashboardPage.toVerifySuccessfullLogin();
    }

    @Given("^user is on log-in page$")
    public void user_is_on_log_in_page(){
        // Write code here that turns the phrase above into concrete actions
    }

    @When("^user enters username as \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_username_as_and(String username, String password){
        // Write code here that turns the phrase above into concrete actions
        homePage.enterInValidCredentials(username, password);
    }

    @Then("^user should not be logged in with \"([^\"]*)\"$")
    public void user_should_not_be_logged_in_with(String errorMessage){
        // Write code here that turns the phrase above into concrete actions
   homePage.toVerifyErrorMessage(errorMessage);
    }


}
