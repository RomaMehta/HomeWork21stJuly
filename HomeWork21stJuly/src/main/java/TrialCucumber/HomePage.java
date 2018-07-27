package TrialCucumber;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Utils {
    LoadProp loadProp = new LoadProp();

    private By _userNameField = By.id("txtUsername");
    private By _passWordField = By.id("txtPassword");
    private By _loginButton = By.id("btnLogin");
    private By _errorMessage = By.id("spanMessage");

    public void enterLoginCredentials (){
        clearAndEnterText(_userNameField , loadProp.getProperty("username"));
        clearAndEnterText(_passWordField, loadProp.getProperty("password"));
    }

    public void enterInValidCredentials(String username , String password){
        clearAndEnterText(_userNameField , username);
        clearAndEnterText(_passWordField , password);

    }

    public void toClickOnLogInButton(){
        clickOnElement(_loginButton);
    }

    public void toVerifyErrorMessage(String errorMessage){
        Assert.assertEquals(getText(_errorMessage) ,errorMessage);
    }
}
