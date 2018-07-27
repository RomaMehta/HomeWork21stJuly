package TrialCucumber;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSetup browserSetup = new BrowserSetup();
    LoadProp loadProp = new LoadProp();

    @Before
    public void toOpenBrowser (){
        browserSetup.selectBrowser();
        driver.get(loadProp.getProperty("website"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }
    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            TakesScreenshot ts = (TakesScreenshot) driver;
        File scrFile = ts.getScreenshotAs(OutputType.FILE);

        try {
            FileUtils.copyFile(scrFile, new File("src\\test\\Resources\\ScreenShots\\" + System.currentTimeMillis() + ".png"));
            System.out.println("ScreenShot Taken");
        } catch (IOException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }
    }}

    @After
    public void toCloseBrowser(){
      driver.quit();
    }
}

