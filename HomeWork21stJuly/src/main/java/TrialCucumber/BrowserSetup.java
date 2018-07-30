package TrialCucumber;


import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;


public class BrowserSetup extends Utils {

    // here we created an object of LoadProp class
    public static LoadProp loadProp = new LoadProp();
    public static  final String USERNAME = loadProp.getProperty("SAUCE_USERNAME");
    public static final String ACCESS_KEY = loadProp.getProperty("SAUCE_ACCESS_KEY");
    public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";

    public static final boolean SAUCE_LAB = Boolean.parseBoolean(System.getProperty("Sauce"));
    public static final String browser = System.getProperty("browser");


    // Here we asked the object loadProp to get the info stored in TestData file infront of the word Browser
    //String browser = loadProp.getProperty("browser");

    // Here we created a method named selectBrowser
    public void selectBrowser() {
        //if sauce lab is true ----
        if (SAUCE_LAB){
            System.out.println("Running in SauceLab .... with browser" + browser );

               if (browser.equalsIgnoreCase("Safari")){
                   DesiredCapabilities caps = DesiredCapabilities.safari();
                   caps.setCapability("platform", "macOS 10.12");
                   caps.setCapability("version", "11.0");

                   try{
                       driver = new RemoteWebDriver(new URL(URL),caps);
                   } catch (MalformedURLException e){
                       e.printStackTrace();
                   }
               }
               else if( browser.equalsIgnoreCase("IE")){
                   DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                   caps.setCapability("platform", "Windows 8");
                   caps.setCapability("version", "10.0");
               try{
                   driver = new RemoteWebDriver(new URL(URL),caps);
               } catch (MalformedURLException e){
                   e.printStackTrace();
               }
               }
               else {
                   System.out.println("Wrong browser name " + browser);
               }
        }
        // if SauceLab is False ----
        else{
            if (browser.equalsIgnoreCase("Chrome")) {
                System.setProperty("webdriver.chrome.driver", "src\\test\\Resources\\BrowserDrivers\\chromedriver.exe");
                driver = new ChromeDriver();
            }
            else if (browser.equalsIgnoreCase("IE")) {
                System.setProperty("webdriver.ie.driver", "src\\test\\Resources\\BrowserDrivers\\IEDriverServer32.exe");
                driver = new InternetExplorerDriver();
            }
            else if (browser.equalsIgnoreCase("FireFox")) {
                System.setProperty("webdriver.gecko.driver", "src\\test\\Resources\\BrowserDrivers\\geckodriver.exe");
                driver = new FirefoxDriver();
            }
            // The below else is for the purpose - if all the above fail - it would print whatever is present in the TestData file in front of Browser
            else
                {
                System.out.println("wrong browser name or empty : " + browser);
                }
        }
    }

    }

