$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/TrialCucumber/OrangeHRMLogin.feature");
formatter.feature({
  "line": 1,
  "name": "log in",
  "description": "",
  "id": "log-in",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16028095609,
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
  "duration": 117958551,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_valid_username_and_password()"
});
formatter.result({
  "duration": 6938396508,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 2746508049,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_logged_in_and_able_to_see_welcome_message()"
});
formatter.result({
  "duration": 2163559036,
  "status": "passed"
});
formatter.after({
  "duration": 410874126,
  "status": "passed"
});
formatter.after({
  "duration": 177920,
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
  "duration": 14796267260,
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
  "duration": 99413,
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
  "duration": 3740219401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 1610922596,
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
  "duration": 612386490,
  "status": "passed"
});
formatter.after({
  "duration": 407414708,
  "status": "passed"
});
formatter.after({
  "duration": 31574,
  "status": "passed"
});
formatter.before({
  "duration": 17028863611,
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
  "duration": 51200,
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
  "duration": 4364381906,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 1228736720,
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
  "duration": 949630656,
  "status": "passed"
});
formatter.after({
  "duration": 333365333,
  "status": "passed"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.before({
  "duration": 12767139116,
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
  "duration": 51200,
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
  "duration": 5361206222,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 1371585756,
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
  "duration": 1633071744,
  "status": "passed"
});
formatter.after({
  "duration": 920824645,
  "status": "passed"
});
formatter.after({
  "duration": 41386,
  "status": "passed"
});
formatter.before({
  "duration": 12693830434,
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
  "duration": 46934,
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
  "duration": 3584574189,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 706484958,
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
  "duration": 599839488,
  "status": "passed"
});
formatter.after({
  "duration": 427364813,
  "status": "passed"
});
formatter.after({
  "duration": 30720,
  "status": "passed"
});
formatter.before({
  "duration": 10845619429,
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
  "duration": 49066,
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
  "duration": 5533566123,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 818242754,
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
  "duration": 481759337,
  "status": "passed"
});
formatter.after({
  "duration": 295525925,
  "status": "passed"
});
formatter.after({
  "duration": 49493,
  "status": "passed"
});
formatter.before({
  "duration": 16368785965,
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
  "duration": 68693,
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
  "duration": 4232210217,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 832538666,
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
  "duration": 578466873,
  "status": "passed"
});
formatter.after({
  "duration": 333550933,
  "status": "passed"
});
formatter.after({
  "duration": 45227,
  "status": "passed"
});
formatter.before({
  "duration": 12910186978,
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
  "duration": 54614,
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
  "duration": 4043500429,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 865544361,
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
  "duration": 615421801,
  "status": "passed"
});
formatter.after({
  "duration": 281738601,
  "status": "passed"
});
formatter.after({
  "duration": 41813,
  "status": "passed"
});
});