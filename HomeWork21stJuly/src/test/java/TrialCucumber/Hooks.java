package TrialCucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.ITestResult;

import java.io.File;
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
    public void screenShot(ITestResult result){
        //here we are comparing if the test fails, only then it will enter the if condition loop
       if  (ITestResult.FAILURE == result.getStatus()) {
            try{
                // Create reference of TakesScreenshot
                TakesScreenshot ts = (TakesScreenshot) driver;

                // Calling the method to take the screenshot
                File source = ts.getScreenshotAs(OutputType.FILE);

                // Copy files to specific location here it will save all screenshot in our project home directory and
                // result.getName() will return name of test case so that screenshot name will be same
                FileUtils.copyFile(source, new File("src\\test\\Resources\\Screenshots\\" + result.getName() + System.currentTimeMillis() + ".png"));

                System.out.println("ScreenShot Taken");
            } catch (Exception e) {

                System.out.println("Exception while taking screenshot" + e.getMessage());
            }
        }
    }

    @After
    public void toCloseBrowser(){
      driver.quit();
    }
}

