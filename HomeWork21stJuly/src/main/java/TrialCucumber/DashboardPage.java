package TrialCucumber;

import org.openqa.selenium.By;
import org.testng.Assert;

public class DashboardPage extends Utils {
    private By _welcomeMessgae = By.id("welcome");
    private By _dashBoardMessage = By.xpath("//*[@id='content']/div/div/h1");
    String expectedMessage = "Hi Admin";

    public void toVerifySuccessfullLogin(){
        Assert.assertTrue(getText(_welcomeMessgae).contains(expectedMessage));
        Assert.assertTrue(getText(_dashBoardMessage).contains("Dashboard"));
        System.out.println(getText(_welcomeMessgae));

    }
}
