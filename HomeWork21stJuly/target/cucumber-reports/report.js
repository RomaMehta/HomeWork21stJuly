$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/TrialCucumber/OrangeHRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "log in",
  "description": "",
  "id": "log-in",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7142392807,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a User, I should be able to log-in with valid credentials.",
  "description": "",
  "id": "log-in;as-a-user,-i-should-be-able-to-log-in-with-valid-credentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be logged in and able to see welcome message.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_login_page()"
});
formatter.result({
  "duration": 109506180,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 307405784,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2052405356,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_logged_in_and_able_to_see_welcome_message()"
});
formatter.result({
  "duration": 64291014,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat TrialCucumber.DashboardPage.toVerifySuccessfullLogin(DashboardPage.java:12)\r\n\tat TrialCucumber.MyStepDefs.user_should_be_logged_in_and_able_to_see_welcome_message(MyStepDefs.java:31)\r\n\tat ✽.Then user should be logged in and able to see welcome message.(src/test/Resources/TrialCucumber/OrangeHRMLogin.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1918810419,
  "status": "passed"
});
formatter.after({
  "duration": 785454415,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "log-in;invalid-credentials.;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error message"
      ],
      "line": 18,
      "id": "log-in;invalid-credentials.;;1"
    },
    {
      "cells": [
        "Test",
        "Test123",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "log-in;invalid-credentials.;;2"
    },
    {
      "cells": [
        "Test",
        "admin123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "log-in;invalid-credentials.;;3"
    },
    {
      "cells": [
        "Admin",
        "Test123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "log-in;invalid-credentials.;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "log-in;invalid-credentials.;;5"
    },
    {
      "cells": [
        "",
        "Test123",
        "Username cannot be empty"
      ],
      "line": 23,
      "id": "log-in;invalid-credentials.;;6"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 24,
      "id": "log-in;invalid-credentials.;;7"
    },
    {
      "cells": [
        "Test",
        "",
        "Password cannot be empty"
      ],
      "line": 25,
      "id": "log-in;invalid-credentials.;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5982655566,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 61440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 353059564,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 503911469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 69705843,
  "status": "passed"
});
formatter.after({
  "duration": 26027,
  "status": "passed"
});
formatter.after({
  "duration": 799778474,
  "status": "passed"
});
formatter.before({
  "duration": 5336428944,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 43946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "admin123",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 320853471,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 439573520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 58865945,
  "status": "passed"
});
formatter.after({
  "duration": 25173,
  "status": "passed"
});
formatter.after({
  "duration": 780522573,
  "status": "passed"
});
formatter.before({
  "duration": 6015037020,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Admin\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 55893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 37
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 336357690,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 745293118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 65294961,
  "status": "passed"
});
formatter.after({
  "duration": 20480,
  "status": "passed"
});
formatter.after({
  "duration": 797666474,
  "status": "passed"
});
formatter.before({
  "duration": 5351795350,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 69121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 318404830,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 96115241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 56291438,
  "status": "passed"
});
formatter.after({
  "duration": 35840,
  "status": "passed"
});
formatter.after({
  "duration": 763389765,
  "status": "passed"
});
formatter.before({
  "duration": 5796359166,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 180480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    },
    {
      "val": "Test123",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 301032661,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 100572629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 53329943,
  "status": "passed"
});
formatter.after({
  "duration": 23894,
  "status": "passed"
});
formatter.after({
  "duration": 771812169,
  "status": "passed"
});
formatter.before({
  "duration": 6459176302,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 51626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 25
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 294609192,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 111916421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 60734319,
  "status": "passed"
});
formatter.after({
  "duration": 19200,
  "status": "passed"
});
formatter.after({
  "duration": 818046643,
  "status": "passed"
});
formatter.before({
  "duration": 5948910485,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid credentials.",
  "description": "",
  "id": "log-in;invalid-credentials.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on log-in page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters username as \"Test\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on log-in button.",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should not be logged in with \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_log_in_page()"
});
formatter.result({
  "duration": 42240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 25
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "MyStepDefs.user_enters_username_as_and(String,String)"
});
formatter.result({
  "duration": 299015807,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 122484532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 35
    }
  ],
  "location": "MyStepDefs.user_should_not_be_logged_in_with(String)"
});
formatter.result({
  "duration": 59409519,
  "status": "passed"
});
formatter.after({
  "duration": 20053,
  "status": "passed"
});
formatter.after({
  "duration": 809019225,
  "status": "passed"
});
});